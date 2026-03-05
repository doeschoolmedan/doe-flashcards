import os
import requests
import re
import time

# --- SETTINGS ---
VOCAB_FILE = 'vocab.js'
BASE_SOUND_DIR = 'sounds'

# Google Translate Language Codes
LANGUAGES = {
    'en': 'en',
    'zh': 'zh-TW',
    'idn': 'id'
}

def download_file(text, lang_code, folder, filename):
    # Remove characters that cause issues in filenames
    safe_filename = "".join([c for c in filename if c.isalnum() or c in (' ', '_')]).strip()
    
    # Define the save path
    folder_path = os.path.join(BASE_SOUND_DIR, folder)
    file_path = os.path.join(folder_path, f"{safe_filename}.mp3")
    
    # 1. THE CHECK: Skip if file already exists
    if os.path.exists(file_path):
        # Optional: uncomment the line below if you want to see what is being skipped
        # print(f"⏭️ Skipping: {folder}/{safe_filename}.mp3 (Already exists)")
        return

    # 2. DOWNLOAD: Only runs if the file is missing
    url = f"https://translate.google.com/translate_tts?ie=UTF-8&q={requests.utils.quote(text)}&tl={lang_code}&client=tw-ob"
    
    try:
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=10)
        if response.status_code == 200:
            with open(file_path, 'wb') as f:
                f.write(response.content)
            print(f"✅ Downloaded: {folder}/{safe_filename}.mp3")
            # Small delay to be polite to Google's servers
            time.sleep(0.3) 
        else:
            print(f"❌ Google Error {response.status_code} for: {text}")
    except Exception as e:
        print(f"⚠️ Network Error: {e}")

# Create folder structure
for lang in LANGUAGES.keys():
    os.makedirs(os.path.join(BASE_SOUND_DIR, lang), exist_ok=True)

print(f"🔍 Scanning {VOCAB_FILE} for new words...")

try:
    with open(VOCAB_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Improved pattern to catch both 'idn' and 'indonesia' keys
    pattern = r'en:\s*["\'](.*?)["\'].*?zh:\s*["\'](.*?)["\'].*?(?:idn|indonesia):\s*["\'](.*?)["\']'
    matches = re.findall(pattern, content, re.DOTALL)

    if not matches:
        print("❌ No words found. Ensure your vocab.js uses the format -> en: 'word'")
    else:
        print(f"🚀 Found {len(matches)} total words in script.")
        
        for en_word, zh_word, idn_word in matches:
            # We always use the English word as the filename to link them
            download_file(en_word, LANGUAGES['en'], 'en', en_word)
            download_file(zh_word, LANGUAGES['zh'], 'zh', en_word)
            download_file(idn_word, LANGUAGES['idn'], 'idn', en_word)
            
    print("\n✨ Process complete! Your sounds folder is up to date.")

except FileNotFoundError:
    print(f"❌ Error: {VOCAB_FILE} not found in this folder.")