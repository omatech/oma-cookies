const QuickLink = {
    elementId: "omacookies-quick-link",
    element: null,
    initialized: false,
    isShown: false,
}

QuickLink.hide = function () {
    this.element.classList.add('omacookies-hide');
    this.isShown = false;
}

QuickLink.show = function () {
    this.element.classList.remove('omacookies-hide');
    this.isShown = true;
}

QuickLink.buildStructure = function () {
    const html = `
        <button id="${this.elementId}"
            class="omacookies-quick-link ${OMAC.quickLinkPosition} ${this.isShown || OMAC.hasResponded ? '' : 'omacookies-hide'}"
            aria-labelledby="${OMAC.SelectionModal.elementId}">
            <i class="omacookies-cookie-icon"></i>
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
