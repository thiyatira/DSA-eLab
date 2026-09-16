import os
import re

def split_markdown_into_folders(md_content: str, base_dir: str = "."):
    """
    Parses a markdown string containing sections delimited by:
    ## Level 2 / {Topic} / {QNo}
    and writes out each section to its respective directory:
    {base_dir}/Level 2/{Topic}/{QNo}/README.md
    """
    pattern = re.compile(r"^##\s+Level 2\s*/\s*([^/\n]+)\s*/\s*([^\n]+)", re.MULTILINE)
    
    matches = list(pattern.finditer(md_content))
    if not matches:
        print("No section headers found matching '## Level 2 / {Topic} / {QNo}'")
        return

    for i, match in enumerate(matches):
        topic = match.group(1).strip()
        qno = match.group(2).strip()
        
        start_pos = match.start()
        end_pos = matches[i + 1].start() if i + 1 < len(matches) else len(md_content)
        
        section_content = md_content[start_pos:end_pos].strip()
        # Clean trailing separators or code blocks if any
        while True:
            stripped = False
            if section_content.endswith("---"):
                section_content = section_content[:-3].strip()
                stripped = True
            if section_content.endswith("```"):
                section_content = section_content[:-3].strip()
                stripped = True
            if not stripped:
                break

        # Destination path: base_dir / Topic / {QNo}.md
        folder_path = os.path.join(base_dir, topic)
        os.makedirs(folder_path, exist_ok=True)
        
        file_path = os.path.join(folder_path, f"{qno}.md")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(section_content + "\n")
            
        print(f"Created: {file_path}")

if __name__ == "__main__":
    # You can pass the path to the Markdown file or read standard input
    import sys
    
    if len(sys.argv) > 1:
        file_path = sys.argv[1]
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
    else:
        # Default looks for raw.md or all_questions.md in the current directory
        candidates = ["raw.md", "all_questions.md"]
        file_path = next((c for c in candidates if os.path.exists(c)), None)
        if file_path:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
        else:
            print("Please provide a path to the markdown file (e.g. raw.md or all_questions.md)")
            print("Usage: python code.py <path_to_markdown_file>")
            sys.exit(1)
            
    split_markdown_into_folders(content)
    print("\nAll 40 questions have been organized into their respective folders.")