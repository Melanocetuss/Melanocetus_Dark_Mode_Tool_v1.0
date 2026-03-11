window.addEventListener('load', () => {

    chrome.storage.local.get(['darkModeActive'], (result) => {

        if (result.darkModeActive) {

            applyDarkMode();

        }

    });

});


function applyDarkMode() {

    const s = document.createElement('style');

    s.id = 'cesur-force';

    s.innerHTML = 'html{filter:invert(1) hue-rotate(180deg)!important}img,video{filter:invert(1) hue-rotate(180deg)!important}';

    document.head.appendChild(s);

}