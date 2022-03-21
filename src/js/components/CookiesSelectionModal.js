const SelectionModal = {
    elementId: "omac-selection-box",
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
        <div id="${this.elementId}" class="omac-backdrop ${this.isOpen ? '' : 'omac-hide'}">
            <form class="omac-selection omac-box omac-modal" id="omac-selection-form">
                <header class="omac-box-header">
                    <h3 class="omac-title">${OMAC.trans.select_box_title}</h3>
                </header>
                <div class="omac-box-body">
                    <p class="omac-text">${OMAC.trans.select_box_description}</p>
                    <a href="${OMAC.readMoreLink}" target="_blank" class="omac-read-more"
                        aria-label="${OMAC.trans.read_more_label}">
                        ${OMAC.trans.read_more}</a>
                    <div class="omac-switch-list">
                        <label class="omac-switch-group">
                            <span class="omac-switch-text">${OMAC.trans.select_mandatory_title}</span>
                            <input type="checkbox" disabled checked />
                            <span class="omac-switch"></span>
                        </label>
                        <label class="omac-switch-group" for="switch-statistics">
                            <span class="omac-switch-text">${OMAC.trans.select_statistics_title}</span>
                            <input id="switch-statistics" type="checkbox" value="statistics" name="omacookies_consent" />
                            <span class="omac-switch"></span>
                        </label>
                        <label class="omac-switch-group" for="switch-marketing">
                            <span class="omac-switch-text">${OMAC.trans.select_marketing_title}</span>
                            <input id="switch-marketing" type="checkbox" value="marketing" name="omacookies_consent" />
                            <span class="omac-switch"></span>
                        </label>
                    </div>
                </div>
                <footer class="omac-box-footer">
                    <button id="omac-select-all-btn" type="button" class="omac-btn-secondary">${OMAC.trans.select_all_btn}</button>
                    <button id="omac-accept-selection-btn" type="submit"  class="omac-btn-primary">${OMAC.trans.accept_selection_btn}</button>
                </footer>
                <button id="omac-close-selection" type="button" class="omac-close" aria-labelledby="${this.elementId}">
                    <span class="omac-visually-hidden">${OMAC.trans.close}</span>
                    <i class="omac-icon-close"></i>
                </button>
            </form>
        </div>
    `;

    const template = document.createElement("div");
    template.innerHTML = html;

    const struc = template.firstElementChild;

    let checkboxes = struc.querySelectorAll("[name='omacookies_consent']");
    this.updateCheckboxes(checkboxes);

    struc.querySelector('#omac-select-all-btn').addEventListener("click", () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
    });

    struc.querySelector('#omac-selection-form').addEventListener("submit", (e) => this.handleFormSubmit(e));

    let closeBtn = struc.querySelector('#omac-close-selection');
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
        if (e.target.classList.contains("omac-backdrop")) {
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
