# Itch.io Review YouTube Embed Fix

Fixes the bug where you can't paste YouTube links into the itch.io review embed box.

## 🚀 Installation
1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. [Click here to install the script directly from GitHub](https://github.com/YOUR_USERNAME/itchio-embed-fix/raw/main/itch-embed-fix.user.js) 
*(Note: Replace YOUR_USERNAME with your actual username above!)*

## 🛠 How it works
It uses a MutationObserver to watch for the video popup and automatically injects your clipboard content if it detects a YouTube URL.

## 📖 Usage
Once installed, copy the youtube link, open the itch.io review, click the 'Add Video' button, and the script will automatically detect the YouTube link in your clipboard and paste it for you.
