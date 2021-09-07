window.addEventListener('dfMessengerLoaded', (event) => {
    const r1 = document.querySelector("df-messenger");
    const r2 = r1.shadowRoot.querySelector("df-messenger-chat");
    const r3 = r2.shadowRoot.querySelector("df-messenger-user-input");
    var sheet = new CSSStyleSheet;

    sheet.replaceSync( `div.chat-wrapper[opened="true"] { height: 450px }`);
    r2.shadowRoot.adoptedStyleSheets = [sheet];
})