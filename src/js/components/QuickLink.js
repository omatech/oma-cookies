const QuickLink = {
    elementId: "omac-quick-link",
    element: null,
    initialized: false,
    isShown: false,
}

QuickLink.hide = function () {
    if (this.initialized) {
        this.element.classList.add('omac-hide');
        this.isShown = false;
    }
}

QuickLink.show = function () {
    if (this.initialized) {
        this.element.classList.remove('omac-hide');
        this.isShown = true;
    }
}

QuickLink.buildStructure = function () {
    const html = `
        <button id="${this.elementId}"
            class="omac-quick-link ${OMAC.quickLinkPosition} ${this.isShown || OMAC.hasResponded ? '' : 'omac-hide'}"
            aria-labelledby="${OMAC.SelectionModal.elementId}">
            <i class="omac-icon-cookie"></i>
        </button>
    `;

    const template = document.createElement('button');
    template.innerHTML = html;

    const struc = template.firstElementChild;

    struc.addEventListener("click", () => {
        OMAC.SelectionModal.open();
        this.hide();
    });

    return struc;
}

QuickLink.init = function () {
    this.element = this.buildStructure();
    this.initialized = true;
    return this.element;
};

module.exports = QuickLink;
