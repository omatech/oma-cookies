import IframeHandler from "./IframeHandler";

class YoutubeIframe extends IframeHandler {
    constructor(selector, excludedAttributes) {
        super(selector, excludedAttributes);
    };

    getIframeHtml(elem) {
        const youtubeVideoId = elem.getAttribute('data-omacookies-yt-video-id');
        return `
            <iframe
                width="560" height="315" frameborder="0" allowfullscreen
                src="https://www.youtube-nocookie.com/embed/${youtubeVideoId}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        `;
    };
}

new YoutubeIframe(".omacookies-iframe-youtube", ["consent", "src", "yt-video-id"]);
