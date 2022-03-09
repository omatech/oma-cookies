window.OMAC = require('./OMAC');
window.OMAC.setLang("es");

require('./utils');

window.OMAC.NoticeBox = require('./components/CookiesNoticeBox');
window.OMAC.SelectionModal = require('./components/CookiesSelectionModal');
window.OMAC.QuickLink = require('./components/QuickLink');

require('./CookieManager');
require('./components/RegularIframe');
require('./components/YoutubeIframe');
require('./components/JavascriptScript');

require('./init.js');
