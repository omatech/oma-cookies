(() => {
    const getScripts = () => {
        return document.querySelectorAll('script.omacookies-script');
    };

    const enableScripts = () => {
        getScripts().forEach(script => {
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
        });
    };

    const disableScripts = () => {
        getScripts().forEach(script => {
            script.setAttribute('type', 'text/plain');
        });
    };

    const handleCookiesConsent = () => {
        if (OMAC.consent.statistics) {
            enableScripts();
        } else {
            disableScripts();
        }
    };

    window.addEventListener('consent-updated', handleCookiesConsent);
})();
