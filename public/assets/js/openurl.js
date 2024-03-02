const form = document.querySelector('form');
const input = document.querySelector('input');
function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function setGameInfo(gameName, appName) {

    function constructURL(foldername) {
        var url = `https://3kh0-assets.silvereen.net/3kh0-assets/${foldername}`;
        return url;
    }

    console.log(constructURL(gameName))

    var unencodedURL = search(constructURL(gameName), 'https://www.google.com/search?q=%s');

    var gameURL = __uv$config.prefix + __uv$config.encodeUrl(constructURL(gameName));
    var mainURL = "https://" + location.host + gameURL;
    console.log(mainURL);
    var appImage = `/assets/imgs/thumbnails/${gameName}.png`; // Construct the image path

    //localStorage.setItem('shownameandimg', showNameAndImg ? 'true' : 'false');
    localStorage.setItem('storedURL', mainURL);
    localStorage.setItem('app-name', appName);
    localStorage.setItem('app-image', appImage);
}

function getCdnInfo(gameName) {

    function constructURL(foldername) {
        var url = `https://3kh0-assets.silvereen.net/3kh0-assets/${foldername}`;
        return url;
    }

    //console.log(constructURL(gameName))

    var gameURL = __uv$config.prefix + __uv$config.encodeUrl(constructURL(gameName));
    var mainURL = "https://" + location.host + gameURL;
    console.log(mainURL);

    //localStorage.setItem('shownameandimg', showNameAndImg ? 'true' : 'false');
    return gameName;
}