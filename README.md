# Itch.io Review YouTube Embed Fix

Fixes the bug where you can't paste YouTube links into the itch.io review embed box.

## 🚀 Installation
1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. [Click here to install the script directly from GitHub](chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/ask.html?aid=499ff255-e171-41b1-ae4f-fa8d83a39d1a) 
*(Note: Will open a new tab for the Tampermonkey script)*

## 🛠 How it works
It uses a MutationObserver to watch for the video popup and automatically injects your clipboard content if it detects a YouTube URL.

## 📖 Usage
Once installed, copy the youtube link, open the itch.io review, click the 'Add Video' button, and the script will automatically detect the YouTube link in your clipboard and paste it for you.
