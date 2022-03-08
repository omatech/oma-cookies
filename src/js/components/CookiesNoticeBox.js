const NoticeBox = {
    elementId: "omacookies-notice-box",
    element: null,
    initialized: false,
    isOpen: false,
};

NoticeBox.close = function () {
    this.element.classList.add('omacookies-hide');
    this.isOpen = false;
};

NoticeBox.open = function () {
    this.element.classList.remove('omacookies-hide');
    this.isOpen = true;
};

NoticeBox.buildStructure = function () {
    const html = `
        <div id="${this.elementId}" class="omacookies-backdrop ${this.isOpen || !OMAC.hasResponded ? '' : 'omacookies-hide'}">
            <div class="omacookies-notice omacookies-box omacookies-${OMAC.format}">
                <header class="omacookies-box-header">
                    <h3 class="omacookies-title">${OMAC.trans.consent_box_title}</h3>
                </header>
                <div class="omacookies-box-body">
                    <p class="omacookies-text">${OMAC.trans.consent_box_description}</p>
                    <a href="${OMAC.readMoreLink}" target="_blank" class="omacookies-read-more"
                        aria-label="${OMAC.trans.read_more_label}">
                        ${OMAC.trans.read_more}
                    </a>
                </div>
                <footer class="omacookies-box-footer">
                    <button id="omacookies-selection-btn" class="omacookies-btn-secondary"
                        aria-label="${OMAC.trans.customize_cookies_btn_label}" aria-labelledby="omacookies-selection">
                        ${OMAC.trans.customize_cookies_btn}
                    </button>
                    <button id="omacookies-accept-all-btn" class="omacookies-btn-primary">
                        ${OMAC.trans.accept_all_cookies_btn}
                    </button>
                </footer>
                <button id="omacookies-close-notice" class="omacookies-close" aria-labelledby="omacookies-consent" disabled>
                    <span class="omacookies-visually-hidden">${OMAC.trans.close}</span>
                </button>
            </div>
        </div>
    `.trim();

    const template = document.createElement('div');
    template.innerHTML = html;

    const struc = template.firstElementChild;

    struc.querySelector('#omacookies-close-notice').addEventListener("click", () => this.close());
    struc.querySelector('#omacookies-selection-btn').addEventListener("click", () => {
        console.log('TODO: OPEN COOKIES CONFIG POPUP');
    });
    struc.querySelector('#omacookies-accept-all-btn').addEventListener("click", () => {
        window.dispatchEvent(new CustomEvent('update-consent-config', {detail: 'all'}));
        this.close();
    });

    return struc;
};

NoticeBox.refresh = function () {
    this.element.innerHTML = this.buildStructure().innerHTML;
};

NoticeBox.init = function () {
    this.element = this.buildStructure();
    this.initialized = true;
    return this.element;
};

module.exports = NoticeBox;
