window.addEventListener("load", OMAC.delayedLoad(function() {
    const elem = document.getElementById(OMAC.elementId);
    elem.classList.add('omacookies');
    elem.innerHTML = "";
    elem.append(OMAC.NoticeBox.init());
    elem.append(OMAC.SelectionModal.init());
    elem.append(OMAC.QuickLink.init());
}));
