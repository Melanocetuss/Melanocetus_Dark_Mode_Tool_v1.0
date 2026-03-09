document.getElementById('btn-dark').addEventListener('click', async () => {
    chrome.storage.local.set({ darkModeActive: true }); // Durumu kaydet
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            const existing = document.getElementById('cesur-force');
            if (!existing) {
                const s = document.createElement('style');
                s.id = 'cesur-force';
                s.innerHTML = 'html{filter:invert(1) hue-rotate(180deg)!important}img,video{filter:invert(1) hue-rotate(180deg)!important}';
                document.head.appendChild(s);
            }
        }
    });
});

document.getElementById('btn-default').addEventListener('click', async () => {
    chrome.storage.local.set({ darkModeActive: false }); // Durumu sil
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            const style = document.getElementById('cesur-force');
            if (style) style.remove();
            document.documentElement.style.filter = "none";
        }
    });
});