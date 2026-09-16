import os
import glob
import re
import json

TOPICS = ["Searching", "Sorting", "Arrays", "Linked List"]

def parse_markdown_sections(text: str):
    sections = {}
    current_header = "Intro"
    current_lines = []
    
    for line in text.splitlines():
        header_match = re.match(r"^#{1,3}\s+(.+)$", line)
        if header_match and not line.startswith("####"):
            sections[current_header] = "\n".join(current_lines).strip()
            current_header = header_match.group(1).strip()
            current_lines = []
        else:
            current_lines.append(line)
            
    sections[current_header] = "\n".join(current_lines).strip()
    return sections

def build_data():
    challenges = []
    
    for topic in TOPICS:
        pattern = os.path.join(topic, "*.md")
        files = sorted(
            glob.glob(pattern),
            key=lambda x: int(re.search(r"\d+", os.path.basename(x)).group()) if re.search(r"\d+", os.path.basename(x)) else 0
        )
        
        for fpath in files:
            base_name = os.path.basename(fpath)
            stem = os.path.splitext(base_name)[0]
            num_match = re.search(r"\d+", stem)
            c_num = int(num_match.group()) if num_match else 0
            
            with open(fpath, "r", encoding="utf-8") as f:
                raw_q = f.read()
                
            sol_path = os.path.join("Solutions", topic, f"{stem}.md")
            raw_sol = ""
            has_solution = False
            c_code = ""
            
            if os.path.exists(sol_path):
                with open(sol_path, "r", encoding="utf-8") as f:
                    raw_sol = f.read()
                if len(raw_sol) > 100:
                    has_solution = True
                    code_match = re.search(r"```c\s*(.*?)\s*```", raw_sol, re.DOTALL)
                    if code_match:
                        c_code = code_match.group(1).strip()

            challenges.append({
                "id": f"{topic.lower().replace(' ', '-')}-{c_num}",
                "topic": topic,
                "challenge": stem,
                "number": c_num,
                "question_raw": raw_q,
                "has_solution": has_solution,
                "solution_raw": raw_sol,
                "c_code": c_code
            })
            
    js_content = f"window.ELAB_DATA = {json.dumps(challenges, indent=2)};"
    with open("data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"Built data.js with {len(challenges)} challenges.")

if __name__ == "__main__":
    build_data()
