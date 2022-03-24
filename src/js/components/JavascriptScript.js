(() => {
    const enableScript = script => {
        const src = script.getAttribute('src');

        if (src) {
            script.removeAttribute('src');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', src);
        } else {
            const newScript = document.createElement('script');
            newScript.className = script.className;
            newScript.setAttribute('type', 'text/javascript');
            newScript.setAttribute('data-omacookies-consent', script.getAttribute('data-omacookies-consent'));
            newScript.innerText = script.innerText.replace("<br>", "");
            script.parentNode.insertBefore(newScript, script);
            script.remove();
        }
    };

    const disableScript = script => script.setAttribute('type', 'text/plain');

    const handleCookiesConsent = () => {
        const elements = document.querySelectorAll('script.omac-script');

        for (const elem of elements) {
            const consentType = elem.getAttribute('data-omacookies-consent');
            if (OMAC.consent[consentType]) {
                enableScript(elem);
            } else {
                disableScript(elem);
            }
        }
    };

    window.addEventListener('consent-updated', handleCookiesConsent);
})();
