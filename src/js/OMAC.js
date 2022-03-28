const setReadOnlyProperty = (obj, propName, propValue) => {
    Object.defineProperty(obj, propName, {
        value: propValue,
        writable: false
    });
};

const OMACookies = {
    cookie: null,
    hasResponded: false,
    consent: {
        all: false,
        statistics: false,
        marketing: false
    },
    available_languages: {
        es: require('../lang/es.json'),
        en: require('../lang/en.json'),
    },
    lang: "",
    trans: {},
    readMoreLink: "#",
    elementId: "omacookies",
    format: "modal", //banner or modal
    quickLinkPosition: "bottom-right", // top-right top-left bottom-right bottom-left
    loadDelay: 0,
    enableQuickLink: true,
};

setReadOnlyProperty(OMACookies, "consentUpdatedEvent", new Event('consent-updated'));
setReadOnlyProperty(OMACookies, "openConsentBoxEvent", new Event('open-consent-box'));
setReadOnlyProperty(OMACookies, "consentTypes", ['statistics', 'marketing']);

OMACookies.setLang = function (lang) {
    this.lang = lang;
    this.trans = this.available_languages[lang];
};

module.exports = OMACookies;
