(() => {
    const enableScripts = script => {
        const src = script.getAttribute('src');

        if (src) {
            script.removeAttribute('src');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', src);
        } else {
            const newScript = document.createElement('script');
            newScript.className = script.className;
            newScript.setAttribute('type', 'text/javascript');
            newScript.innerText = script.innerText;
            script.parentNode.insertBefore(newScript, script);
            script.remove();
        }
    };

    const disableScripts = script => script.setAttribute('type', 'text/plain');

    const handleCookiesConsent = () => {
        const elements = document.querySelectorAll('script.omacookies-script');

        for (const elem of elements) {
            const consentType = elem.getAttribute('data-omacookies-consent');
            if (OMAC.consent[consentType]) {
                enableScripts(elem);
            } else {
                disableScripts(elem);
            }
        }
    };

    window.addEventListener('consent-updated', handleCookiesConsent);
})();
