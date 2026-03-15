// ==UserScript==
// @name         itch.io Review Video Auto-Paste
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Unlocks the video box and auto-pastes your clipboard link
// @author       NinaM33p
// @match        https://*.itch.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const tryPasteLink = async () => {
        const videoBox = document.getElementById('redactor-insert-video-area');

        if (videoBox && videoBox.value === "") {
            try {
                // Fix the "unclickable" bug
                videoBox.style.pointerEvents = 'auto';
                videoBox.style.userSelect = 'text';

                // Try to read from clipboard
                const text = await navigator.clipboard.readText();

                // Only paste if it looks like a YouTube link
                if (text.includes("youtube.com") || text.includes("youtu.be")) {
                    videoBox.value = text;
                    console.log("Tampermonkey: Auto-pasted link from clipboard!");
                }
            } catch (err) {
                console.log("Clipboard access denied. You may need to click the page first.");
            }
        }
    };

    // Watch for the pop-up to appear
    const observer = new MutationObserver(tryPasteLink);
    observer.observe(document.body, { childList: true, subtree: true });
})();
