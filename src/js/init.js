window.addEventListener("load", () => {
    const elem = document.getElementById(OMAC.elementId);
    elem.innerHTML = "";
    elem.append(OMAC.NoticeBox.init());
});
