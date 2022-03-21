const NoticeBox = {
    elementId: "omac-notice-box",
    element: null,
    initialized: false,
    isOpen: false,
};

NoticeBox.close = function () {
    OMAC.closeModal(this);
};

NoticeBox.open = function () {
    OMAC.openModal(this);
};

NoticeBox.buildStructure = function () {
    const html = `
        <div id="${this.elementId}" class="omac-backdrop ${this.isOpen || !OMAC.hasResponded ? 'fade-in' : 'omac-hide'}">
            <div class="omac-notice omac-box omac-${OMAC.format}">
                <header class="omac-box-header">
                    <h3 class="omac-title">${OMAC.trans.consent_box_title}</h3>
                </header>
                <div class="omac-box-body">
                    <p class="omac-text">${OMAC.trans.consent_box_description}</p>
                    <a href="${OMAC.readMoreLink}" target="_blank" class="omac-read-more"
                        aria-label="${OMAC.trans.read_more_label}">
                        ${OMAC.trans.read_more}
                    </a>
                </div>
                <footer class="omac-box-footer">
                    <button id="omac-selection-btn" class="omac-btn-secondary"
                        aria-label="${OMAC.trans.customize_cookies_btn_label}" aria-labelledby="omac-selection">
                        ${OMAC.trans.customize_cookies_btn}
                    </button>
                    <button id="omac-accept-all-btn" class="omac-btn-primary">
                        ${OMAC.trans.accept_all_cookies_btn}
                    </button>
                </footer>
            </div>
        </div>
    `;

    const template = document.createElement('div');
    template.innerHTML = html;

    const struc = template.firstElementChild;

    struc.querySelector('#omac-selection-btn').addEventListener("click", () => {
        this.close();
        OMAC.SelectionModal.open();
    });

    struc.querySelector('#omac-accept-all-btn').addEventListener("click", () => {
        window.dispatchEvent(new CustomEvent('update-consent-config', {detail: 'all'}));
        this.close();
        OMAC.QuickLink.show();
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
