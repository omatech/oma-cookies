/**
 * Sets a cookie with the passed value. if no exdays are passed the duration will be a year
 * @param {string} name
 * @param {string} value
 * @param {number} exdays
 */
OMAC.setCookie = (name, value, exdays = 365) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

/**
 * Returns the value of a cookie
 * @param {string} name
 */
OMAC.getCookie = (name) => {
    name += "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
};

/**
 * Deletes a cookie by name
 * @param {string} name
 */
OMAC.deleteCookie = name => OMAC.setCookie(name, null, -1);

/**
 * Removes the passed element attributes
 * @param {object} element
 * @param {array} attributes
 */
OMAC.removeAttributes = (element, attributes) => {
    for (const attr of attributes) {
        element.removeAttribute(attr);
    }
};

/**
 * Checks if there are any of the needles in the haystack
 * @param {string} haystack
 * @param {string, array} needles
 */
OMAC.strContainsAny = (haystack, needles) => {
    if (haystack && needles) {
        needles = typeof (needles) === 'string' ? [needles] : needles;
        for (const needle of needles) {
            if (haystack.indexOf(needle) !== -1) return true;
        }
    }
    return false;
};

/**
 * Returns the intersected values of 2 arrays
 * @param {array} array1
 * @param {array} array2
 */
OMAC.arrayIntersec = (array1, array2) => {
    return array1.filter(x => array2.includes(x));
};

/**
 * Returns the literal template cleaned of useless spaces
 * @param {string} literal
 * @return {string}
 */
OMAC.literal = literal => {
    return literal.replace(/\s+/g, ' ').replace("\\n", "").trim();
}

/**
 * Adds the params, classes & animations to open modal
 * @param {object} modal
 */
OMAC.openModal = (modal) => {
    modal.element.classList.remove("omacookies-hide");
    setTimeout(() => {
        modal.element.classList.add("fade-in");
    }, 300);
    this.isOpen = true;
}

/**
 * Adds the params, classes & animations to close modal
 * @param {object} modal
 */
OMAC.closeModal = (modal) => {
    modal.element.classList.remove("fade-in");
    setTimeout(() => {
        modal.element.classList.add("omacookies-hide");
    }, 300);
    this.isOpen = false;
}
