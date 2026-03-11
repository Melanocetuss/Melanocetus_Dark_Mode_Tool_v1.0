const toggle = document.getElementById('darkToggle');

chrome.storage.local.get(['darkModeActive'], (res) => {
    toggle.checked = !!res.darkModeActive;
});

toggle.addEventListener('change', () => {
    const isActive = toggle.checked;
    chrome.storage.local.set({ darkModeActive: isActive });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: () => location.reload()
        });
    });
});