import os
import glob
import re
import json
import time
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor

def load_api_keys():
    keys = []
    env_keys = os.environ.get("GEMINI_API_KEYS")
    if env_keys:
        keys.extend([k.strip() for k in env_keys.split(",") if k.strip()])
    if not keys and os.path.exists(".env"):
        with open(".env", "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith("GEMINI_API_KEYS="):
                    val = line.split("=", 1)[1].strip().strip('"').strip("'")
                    keys.extend([k.strip() for k in val.split(",") if k.strip()])
                elif line.startswith("GEMINI_API_KEY="):
                    val = line.split("=", 1)[1].strip().strip('"').strip("'")
                    if val:
                        keys.append(val)
    return keys

API_KEYS = load_api_keys()

# Fallback sequence prioritizing currently available models
FALLBACK_MODELS = [
    "gemini-3.6-flash",
    "gemini-3.5-flash",
    "gemini-3.1-flash-lite",
    "gemini-3.8-flash",
    "gemini-3.7-flash",
    "gemini-flash-latest"
]

SYSTEM_PROMPT = """You are an expert C competitive programmer and educator solving university eLab automated grader problems.

Given the problem description below, provide a structured markdown response with a brief explanation followed by the working C code.

Format your response strictly under these 4 sections:

## 1. Problem Overview
A short 2-3 line explanation capturing the essence of what the problem is actually asking, stripping away story fluff.

## 2. Algorithm & Approach
Step-by-step logic detailing how to solve the problem efficiently within the given constraints.

## 3. Example Walkthrough
A concise step-by-step dry run on one of the sample test cases demonstrating how input translates to expected output.

## 4. C Solution
```c
#include <stdio.h>
// necessary standard library headers if needed

int main()
{
    // solution logic
    return 0;
}
```

STRICT CODE REQUIREMENTS:
1. MANDATORY KEYWORDS (CRITICAL):
   - If the problem specifies "Mandatory Keywords", you MUST include EVERY exact keyword or code snippet verbatim in the C code.
   - The automated grader uses strict substring matching. Do NOT modify whitespace, variable names, types, or syntax of the mandatory keywords.
2. EXACT OUTPUT:
   - Output must match the test case expected outputs character-for-character (spaces, newlines, exact casing like "Zero" vs "0").
   - Do NOT print interactive prompts (e.g. do NOT write printf("Enter t: ");).
3. COMPLEXITY & COMMENTS:
   - Keep code comments MINIMAL or ZERO. Do NOT add inline explanatory comments on every line, as they inflate NLOC and token count limits.
   - Stay within the Cyclomatic Complexity, Token Count, and NLOC limits stated in the problem (keep control flow simple, concise, and clean).
4. SKELETON:
   - Follow standard C structure with int main() and return 0;
"""

def extract_mandatory_keywords(content: str):
    match = re.search(r"###\s*Mandatory Keywords\s*\n(.*?)(?:\n###|\Z)", content, re.DOTALL)
    if not match:
        return []
    keywords = []
    for line in match.group(1).splitlines():
        line = line.strip()
        if line.startswith("-"):
            kw = line.lstrip("- ").strip()
            if kw.startswith("`") and kw.endswith("`") and len(kw) >= 2:
                kw = kw[1:-1]
            if kw:
                keywords.append(kw)
    return keywords

def call_gemini(prompt: str, api_key: str):
    payload = {
        "contents": [
            {
                "parts": [
                    {"text": prompt}
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.2
        }
    }
    headers = {"Content-Type": "application/json"}
    data = json.dumps(payload).encode("utf-8")

    # Rotate keys if a key gets rate-limited (429)
    keys_to_try = [api_key] + [k for k in API_KEYS if k != api_key]

    for key in keys_to_try:
        key_quota_hit = False
        for model in FALLBACK_MODELS:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}"
            
            for attempt in range(2):
                try:
                    req = urllib.request.Request(url, data=data, headers=headers, method="POST")
                    with urllib.request.urlopen(req, timeout=45) as resp:
                        result = json.loads(resp.read().decode("utf-8"))
                        candidates = result.get("candidates", [])
                        if candidates:
                            parts = candidates[0].get("content", {}).get("parts", [])
                            text_parts = [p.get("text", "") for p in parts if "text" in p]
                            if text_parts:
                                return "".join(text_parts)
                    break
                except urllib.error.HTTPError as e:
                    if e.code == 503:
                        print(f"[{key[:10]}...] 503 capacity on {model} -> trying next model in fallback list...", flush=True)
                        break
                    elif e.code == 429:
                        print(f"[{key[:10]}...] 429 quota on {model} -> trying next model...", flush=True)
                        break
                    else:
                        break
                except Exception:
                    time.sleep(1)
                
    return ""

def process_file(task, api_key):
    rel_path = task
    topic = os.path.dirname(rel_path)
    base_name = os.path.basename(rel_path)
    stem = os.path.splitext(base_name)[0]
    
    out_dir = os.path.join("Solutions", topic)
    os.makedirs(out_dir, exist_ok=True)
    out_md = os.path.join(out_dir, f"{stem}.md")
    
    # Keep what is already generated
    if os.path.exists(out_md) and os.path.getsize(out_md) > 200:
        print(f"Skipping {rel_path}, already generated.")
        return
        
    with open(rel_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    mandatory_kws = extract_mandatory_keywords(content)
    
    prompt = f"{SYSTEM_PROMPT}\n\n### PROBLEM DETAILS:\n{content}"
    if mandatory_kws:
        prompt += f"\n\nREMINDER - Mandatory Keywords MUST be present verbatim in the C code:\n" + "\n".join(f"- `{kw}`" for kw in mandatory_kws)
        
    print(f"[{api_key[:10]}...] Generating solution for {rel_path}...")
    response_text = call_gemini(prompt, api_key)
    
    if not response_text:
        print(f"Failed to generate for {rel_path}")
        return

    # Check if mandatory keywords are present in the C code block
    c_code_match = re.search(r"```c\s*(.*?)\s*```", response_text, re.DOTALL)
    c_code = c_code_match.group(1) if c_code_match else ""
    
    missing = [kw for kw in mandatory_kws if kw not in c_code]
    if missing and c_code:
        print(f"[{rel_path}] Missing mandatory keywords {missing}. Retrying with emphasis...")
        correct_prompt = f"{prompt}\n\nCRITICAL FIX NEEDED:\nYour previous code was missing these mandatory keywords:\n" + "\n".join(f"- `{kw}`" for kw in missing) + "\nPlease regenerate the complete response ensuring each keyword is present verbatim."
        corrected_response = call_gemini(correct_prompt, api_key)
        if corrected_response:
            response_text = corrected_response
                
    with open(out_md, "w", encoding="utf-8") as f:
        f.write(f"# {topic} - {stem}\n\n{response_text.strip()}\n")
            
    print(f"Created: {out_md}")
    time.sleep(1)

def worker_thread(tasks, api_key):
    for task in tasks:
        process_file(task, api_key)

def main():
    all_files = []
    for topic in ["Searching", "Sorting", "Arrays", "Linked List"]:
        pattern = os.path.join(topic, "*.md")
        files = sorted(
            glob.glob(pattern),
            key=lambda x: int(re.search(r"\d+", os.path.basename(x)).group()) if re.search(r"\d+", os.path.basename(x)) else 0
        )
        all_files.extend(files)
        
    print(f"Total challenges to process: {len(all_files)}")
    
    num_keys = len(API_KEYS)
    task_buckets = [[] for _ in range(num_keys)]
    for idx, fpath in enumerate(all_files):
        task_buckets[idx % num_keys].append(fpath)
        
    with ThreadPoolExecutor(max_workers=num_keys) as executor:
        futures = []
        for i in range(num_keys):
            futures.append(executor.submit(worker_thread, task_buckets[i], API_KEYS[i]))
        for f in futures:
            f.result()

    print("\nAll solutions generated successfully in the 'Solutions/' folder!")

if __name__ == "__main__":
    main()
