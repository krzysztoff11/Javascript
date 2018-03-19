function klik(info, tab) {

    var tresc = info.selectionText;

    tresc = tresc.replace(/^\s+|\s+$/g, "");

    if (tresc.length < 1) return false;

    chrome.tabs.create(

        {
            "url": "https://allegro.pl/listing?string=" + encodeURIComponent(tresc),
            "selected": true
        }

    );

}

var tytul = "Szukaj na Allegro";
var id = chrome.contextMenus.create({
    "title": tytul,
    "contexts": ["selection"],
    "onclick": klik
});