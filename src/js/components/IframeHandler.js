class IframeHandler {
    constructor(selector, excludedAttributes = ['consent']) {
        this.selector = selector;
        this.excludedAttributes = excludedAttributes;
        window.addEventListener('consent-updated', () => this.handleCookiesConsent());
    };

    getContentBlockedHtml() {
        return `
            <div class="omacookies-iframe-youtube-content">
                <img src="dist/img/omacookies-icon.svg" alt="Cookies">
                <h3 class="omacookies-title">${OMAC.trans.content_blocked_title}</h3>
                <p class="omacookies-text">${OMAC.trans.content_blocked_text}</p>
                <button id="omacookies-iframe-btn" class="omacookies-btn-secondary">
                    ${OMAC.trans.content_blocked_btn}
                </button>
            </div>
        `;
    };

    getIframeHtml(elem) {
        return `<iframe></iframe>`;
    };

    getAttributesAsProps(elem) {
        const props = {};
        for (const attr of elem.attributes) {
            if (attr.name.indexOf('data-omacookies-') !== -1) {
                const name = attr.name.split('data-omacookies-')[1];
                if (this.excludedAttributes.includes(name)) continue;
                props[name] = attr.value;
            }
        }
        return props;
    };

    enableIframe(elem) {
        elem.innerHTML = this.getIframeHtml(elem);
        const iframe = elem.querySelector('iframe');
        const props = this.getAttributesAsProps(elem);
        for (const [key, value] of Object.entries(props)) {
            iframe.setAttribute(key, value);
        }
    };

    disableIframe(elem) {
        elem.innerHTML = this.getContentBlockedHtml();
        elem.querySelector('button').addEventListener("click", () => OMAC.NoticeBox.open());
    };

    handleCookiesConsent() {
        const elements = document.querySelectorAll(this.selector);

        for (const elem of elements) {
            const consentType = elem.getAttribute('data-omacookies-consent');
            if (OMAC.consent[consentType]) {
                this.enableIframe(elem);
            } else {
                this.disableIframe(elem);
            }
        }
    };
}

module.exports = IframeHandler;
