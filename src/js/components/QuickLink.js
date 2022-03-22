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
            <svg class="omac-icon-cookie"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 224 222.2"
                xml:space="preserve">
                <path d="M222,61.1c-2.3-0.8-5.3-2.2-6.9-1.3c-1.9,1-4,4.4-3.7,6.4c0.3,2.1,3.5,5.3,5.3,5.2c2.5-0.2,4.9-2.9,7.3-4.5c0-1,0-2,0-3
                    C223.3,62.8,222.9,61.4,222,61.1z M213.3,96.9c-13,6.2-18.4,5.1-27.2-6.4c-2.2-2.9-4.6-3.3-7.8-2.7c-4,0.9-8.1,1.8-12.2,2.2
                    c-15.4,1.6-29.2-8.3-32.5-23.2c-1.7-7.8-0.9-15.5,1.4-23.1c1.2-4.1,0.3-6.9-3.9-8.8c-6.6-2.9-9.6-8.4-9.6-15.5
                    c0-3.9,0.5-7.9,1.2-11.8c1.1-5.4-0.5-8-6.1-7.8c-8.4,0.4-16.9,0.5-25.2,2C33.2,12.6-7.1,68.4,1,126.6c7.7,55,54.7,95.7,103.5,95.6
                    c23.9,0.1,40-3.7,55.3-11.1c41.1-20.1,66-63.8,62.2-108.9C221.5,96.6,218.2,94.6,213.3,96.9z M118.6,211.8
                    C59.5,216.3,9.3,169.1,10.3,110.3c1.1-62,54.8-100.8,101-99.9c0,4.2-0.2,8,0,11.7c0.6,7.8,3.9,14.4,10.1,19.2
                    c2.1,1.6,2.4,2.8,2.3,5.6c-0.4,7.8-1.1,16,0.6,23.6c4.4,19.4,22,31.8,41.8,29.8c8-0.8,14.7-1.3,21,5.7c5.3,5.8,13.4,5.8,21,4.3
                    c1-0.2,1.9-0.4,2.9-0.6c0.1,0,0.3,0.1,0.5,0.1C214.2,153.9,179.4,207.1,118.6,211.8z M178.2,21.7c5.7,0,10.3-4.7,10.3-10.5
                    c-0.1-5.8-4.2-10-10-10.2C172.4,0.9,168,5.1,168,11.1C168,17,172.5,21.7,178.2,21.7z M170.5,60.9c5.5,0,9.8-4.2,9.7-9.7
                    c0-5.4-3.9-9.4-9.3-9.5c-5.7-0.1-9.8,3.8-9.9,9.3C161,56.6,165,60.8,170.5,60.9z M73.7,100.7c0-8.8-7.1-15.8-15.8-15.7
                    c-8.6,0.2-15.3,7-15.3,15.6c0,8.9,6.8,16,15.5,15.9C66.7,116.5,73.8,109.4,73.7,100.7z M140,146.8c-8-0.1-14.6,6.3-14.6,14.3
                    c-0.1,8.1,6.2,14.5,14.3,14.5c8.1,0.1,14.6-6.3,14.7-14.2C154.4,153.4,148,146.9,140,146.8z M68.7,142.9
                    c-6.3-0.2-11.1,4.4-11.1,10.7c0,6.4,4.4,10.9,10.8,11c6.1,0.1,11.2-5,11.1-10.9C79.4,148,74.5,143.1,68.7,142.9z M108.1,105.4
                    c-5.4,0-9,3.6-8.9,9c0.1,4.9,4,8.9,8.7,8.9c4.7,0,8.8-4,9-8.7C117.1,109.3,113.4,105.5,108.1,105.4z M92,57.7
                    c-4.6,0.2-8.5,4.3-8.2,8.8c0.2,4.6,4.2,8.3,8.8,8.3c4.9-0.1,8.3-3.6,8.3-8.6C100.8,61,97.1,57.5,92,57.7z"/>
            </svg>
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
