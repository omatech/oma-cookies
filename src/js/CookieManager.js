window.addEventListener("load", OMAC.delayedLoad(OMAC.updateConsent));
window.addEventListener('update-consent-config', e => OMAC.updateConsent(e.detail));

/**
 * Sets all consent settings from the saved or set cookie from newCookieValue and refreshes consent form
 * @param {string,null} newCookieValue
 */
OMAC.updateConsent = (newCookieValue = null) => {
    if (newCookieValue !== null) {
        OMAC.hasResponded = true;
        OMAC.cookie = newCookieValue;
        OMAC.setCookie('omacookies-consent', newCookieValue);
    } else {
        OMAC.cookie = OMAC.getCookie('omacookies-consent');
        OMAC.hasResponded = OMAC.cookie !== null;
    }

    const all = OMAC.consent.all = OMAC.strContainsAny(OMAC.cookie, 'all');
    OMAC.consent.statistics = all || OMAC.strContainsAny(OMAC.cookie, 'statistics');
    OMAC.consent.marketing = all || OMAC.strContainsAny(OMAC.cookie, 'marketing');

    window.dispatchEvent(OMAC.consentUpdatedEvent);
};
