const buildForm = function () {
    const html = `
        <div>
            <h1>${this.trans.consent_box_title}</h1>
            <p>${this.trans.consent_box_description}</p>
            <form id="omacookies-selection-form">
                <ul>
                    <li>
                        <label>
                            <span>${this.trans.consent_preferences_title}:</span>
                            <input type="checkbox" name="omacookies_consent" value="preferences"/>
                        </label>
                    </li>
                    <li>
                        <label>
                            <span>${this.trans.consent_statistics_title}:</span>
                            <input type="checkbox" name="omacookies_consent" value="statistics"/>
                        </label>
                    </li>
                    <li>
                        <label>
                            <span>${this.trans.consent_marketing_title}:</span>
                            <input type="checkbox" name="omacookies_consent" value="marketing"/>
                        </label>
                    </li>
                    <li>
                        <button type="submit" class="link clr-secondary">
                            ${this.trans.accept_selection}
                        </button>
                    </li>
                </ul>
            </form>
        </div>
    `;

    const template = document.createElement('div');
    html.trim();
    template.innerHTML = html;

    return template.firstElementChild;
};




const handleConsentFormSelections = e => {
    e.preventDefault();
    e.stopPropagation();

    const consentSelections = (new FormData(e.target)).getAll('omacookies_consent');
    const formattedConsent = OMAC.arrayIntersec(OMAC.consentTypes, consentSelections);

    let newConsent = formattedConsent.join();
    if (formattedConsent.length === OMAC.consentTypes.length) {
        newConsent = 'all';
    }
    updateConsent(newConsent);
};


module.exports = {
    buildForm
};
