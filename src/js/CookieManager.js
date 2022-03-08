(() => {
    window.addEventListener("load", () => updateConsent());
    window.addEventListener('update-consent-config', e => updateConsent(e.detail));

    /**
     * Sets all consent settings from the saved or set cookie from newCookieValue and refreshes consent form
     * @param {string,null} newCookieValue
     */
    const updateConsent = (newCookieValue = null) => {
        if (newCookieValue) {
            OMAC.hasResponded = true;
            OMAC.cookie = newCookieValue;
            OMAC.setCookie('omacookies-consent', newCookieValue);
        } else {
            OMAC.cookie = OMAC.getCookie('omacookies-consent');
            OMAC.hasResponded = !!OMAC.cookie;
        }

        const all = OMAC.consent.all = OMAC.strContainsAny(OMAC.cookie, 'all');
        OMAC.consent.preferences = all || OMAC.strContainsAny(OMAC.cookie, 'preferences');
        OMAC.consent.statistics = all || OMAC.strContainsAny(OMAC.cookie, 'statistics');
        OMAC.consent.marketing = all || OMAC.strContainsAny(OMAC.cookie, 'marketing');

        window.dispatchEvent(OMAC.consentUpdatedEvent);

        // refreshConsentFormSelections();
    };

    const getConsentSelectionForm = () => {
        return document.getElementById('omacookies-selection-form')
    };

    const refreshConsentFormSelections = () => {
        getConsentSelectionForm().querySelectorAll("input[name=omacookies_consent]").forEach(input => {
            input.checked = OMAC.strContainsAny(OMAC.cookie, ['all', input.value]);
        });
    };

    // const handleConsentFormSelections = e => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //
    //     const consentSelections = (new FormData(e.target)).getAll('omacookies_consent');
    //     const formattedConsent = OMAC.arrayIntersec(OMAC.consentTypes, consentSelections);
    //
    //     let newConsent = formattedConsent.join();
    //     if (formattedConsent.length === OMAC.consentTypes.length) {
    //         newConsent = 'all';
    //     }
    //     updateConsent(newConsent);
    // };
})();
