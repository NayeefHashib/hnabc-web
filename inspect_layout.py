import re

with open("C:/Users/connectingdots3/.gemini/antigravity/scratch/hnabc_website/index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Let's search for <section id="..."> or main elements
sections = re.findall(r'<section\s+id="([^"]+)"', content)
print("Sections found:", sections)

# Check colors used
colors = re.findall(r'(bg-\w+-\d+|text-\w+-\d+|from-\w+-\d+|to-\w+-\d+)', content)
print("Unique tailwind colors used (sample):", list(set(colors))[:20])
