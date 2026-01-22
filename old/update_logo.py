import re
import os

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Header replacement
    header_pattern = r'<a href="index\.html" class="logo">\s*<div class="logo-icon">\s*<svg.*?</svg>\s*</div>\s*<span>Sun & Soil<br><small>FOUNDATION</small></span>\s*</a>'
    header_replacement = '<a href="index.html" class="logo">\n                    <img src="assets/SUN AND SOIL LOGO.png" alt="Sun & Soil Foundation Logo" style="height: 60px;">\n                </a>'
    
    new_content = re.sub(header_pattern, header_replacement, content, flags=re.DOTALL)

    # Footer replacement
    footer_pattern = r'<a href="index\.html" class="logo">\s*<div class="logo-icon">\s*<svg.*?</svg>\s*</div>\s*<span>Sun & Soil<br><small style="color: white; opacity: 0\.8;">FOUNDATION</small></span>\s*</a>'
    footer_replacement = '<a href="index.html" class="logo">\n                        <img src="assets/SUN AND SOIL LOGO.png" alt="Sun & Soil Foundation Logo" style="height: 60px; background: white; padding: 5px; border-radius: 8px;">\n                    </a>'
    
    new_content = re.sub(footer_pattern, footer_replacement, new_content, flags=re.DOTALL)

    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes for {filepath}")

files = [
    'index.html',
    'about.html',
    'blog.html',
    'careers.html',
    'contact.html',
    'donate.html',
    'news.html',
    'partners.html',
    'programs.html',
    'projects.html',
    'team.html',
    'volunteer.html'
]

base_dir = r'c:\Users\Blessings Chidazi\Desktop\newDesign'

for file in files:
    filepath = os.path.join(base_dir, file)
    if os.path.exists(filepath):
        update_file(filepath)
    else:
        print(f"File not found: {filepath}")
