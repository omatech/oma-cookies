const SelectionModal = {
    elementId: "omacookies-selection-box",
    element: null,
    initialized: false,
    isOpen: false,
    isCloseEnabled: false,
};

SelectionModal.close = function () {
    OMAC.closeModal(this);
};

SelectionModal.open = function () {
    OMAC.openModal(this);
};

SelectionModal.enableClose = function () {
    this.isCloseEnabled = true;
}

SelectionModal.buildStructure = function () {
    const html = `
        <div id="${this.elementId}" class="omacookies-backdrop ${this.isOpen ? '' : 'omacookies-hide'}">
            <form class="omacookies-selection omacookies-box omacookies-modal" id="omacookies-selection-form">
                <header class="omacookies-box-header">
                    <h3 class="omacookies-title">${OMAC.trans.select_box_title}</h3>
                </header>
                <div class="omacookies-box-body">
                    <p class="omacookies-text">${OMAC.trans.select_box_description}</p>
                    <a href="${OMAC.readMoreLink}" target="_blank" class="omacookies-read-more"
                        aria-label="${OMAC.trans.read_more_label}">
                        ${OMAC.trans.read_more}</a>
                    <div class="omacookies-switch-list">
                        <label class="omacookies-switch-group">
                            <span class="omacookies-switch-text">${OMAC.trans.select_mandatory_title}</span>
                            <input type="checkbox" disabled checked />
                            <span class="omacookies-switch"></span>
                        </label>
                        <label class="omacookies-switch-group" for="switch-statistics">
                            <span class="omacookies-switch-text">${OMAC.trans.select_statistics_title}</span>
                            <input id="switch-statistics" type="checkbox" value="statistics" name="omacookies_consent" />
                            <span class="omacookies-switch"></span>
                        </label>
                        <label class="omacookies-switch-group" for="switch-marketing">
                            <span class="omacookies-switch-text">${OMAC.trans.select_marketing_title}</span>
                            <input id="switch-marketing" type="checkbox" value="marketing" name="omacookies_consent" />
                            <span class="omacookies-switch"></span>
                        </label>
                    </div>
                </div>
                <footer class="omacookies-box-footer">
                    <button id="omacookies-select-all-btn" type="button" class="omacookies-btn-secondary">${OMAC.trans.select_all_btn}</button>
                    <button id="omacookies-accept-selection-btn" type="submit"  class="omacookies-btn-primary">${OMAC.trans.accept_selection_btn}</button>
                </footer>
                <button id="omacookies-close-selection" type="button" class="omacookies-close" aria-labelledby="${this.elementId}">
                    <span class="omacookies-visually-hidden">${OMAC.trans.close}</span>
                    <i class="omacookies-icon-close"></i>
                </button>
            </form>
        </div>
    `;

    const template = document.createElement("div");
    template.innerHTML = html;

    const struc = template.firstElementChild;

    let checkboxes = struc.querySelectorAll("[name='omacookies_consent']");
    this.updateCheckboxes(checkboxes);

    struc.querySelector('#omacookies-select-all-btn').addEventListener("click", () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
    });

    struc.querySelector('#omacookies-selection-form').addEventListener("submit", (e) => this.handleFormSubmit(e));

    let closeBtn = struc.querySelector('#omacookies-close-selection');
    if (!OMAC.hasResponded) {
        closeBtn.disabled = true;
    }
    closeBtn.addEventListener("click", () => {
        this.close();
        OMAC.QuickLink.show();
    });

    if (!OMAC.hasResponded || !this.isCloseEnabled) {
        closeBtn.disabled = true;
    } else {
        this.enableCloseModalOnBackdropClick(struc);
    }

    window.addEventListener("consent-updated", () => {
        this.updateCheckboxes(checkboxes);
        this.enableClose();
        this.enableCloseButton(closeBtn);
        this.enableCloseModalOnBackdropClick(struc);
    })

    return struc;
};

SelectionModal.handleFormSubmit = function (e) {
    e.preventDefault();
    const consentSelections = (new FormData(e.target)).getAll('omacookies_consent');
    const formattedConsent = OMAC.arrayIntersec(OMAC.consentTypes, consentSelections);
    let newConsent = formattedConsent.join();
    if (formattedConsent.length === OMAC.consentTypes.length) {
        newConsent = 'all';
    }
    this.close();
    window.dispatchEvent(new CustomEvent("update-consent-config", {
        detail: newConsent
    }));
    OMAC.QuickLink.show();
}

SelectionModal.updateCheckboxes = function (checkboxes) {
    checkboxes.forEach(checkbox => SelectionModal.updateCheckbox(checkbox));
}

SelectionModal.updateCheckbox = function (checkbox) {
    if (OMAC.strContainsAny(OMAC.cookie, ["all", checkbox.value])) {
        return checkbox.checked = true;
    }
}

SelectionModal.enableCloseButton = function (button) {
    button.disabled = false;
}

SelectionModal.enableCloseModalOnBackdropClick = function (modalElement) {
    modalElement.addEventListener("click", (e) => {
        e.stopPropagation();
        if (e.target.classList.contains("omacookies-backdrop")) {
            this.close();
            OMAC.QuickLink.show();
        }
    })
}

SelectionModal.refresh = function () {
    this.element.innerHTML = this.buildStructure().innerHTML;
};

SelectionModal.init = function () {
    this.element = this.buildStructure();
    this.initialized = true;
    return this.element;
};

module.exports = SelectionModal;
