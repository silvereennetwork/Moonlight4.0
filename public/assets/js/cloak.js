if (!localStorage.getItem('moonlight.title')) {
    localStorage.setItem('moonlight.title', 'Moonlight');
};

if (!localStorage.getItem('moonlight.icon')) {
    localStorage.setItem('moonlight.icon', '/assets/imgs/logos/logo.png');
}

document.title = localStorage.getItem('moonlight.title');
document.getElementById('icon').href = localStorage.getItem('moonlight.icon');

function changeKey(key) {
    localStorage.setItem('moonlight.panicKey', key);
}

function changeSite(site) {
    if (site.includes('https://') || site.includes('http://')) {
        localStorage.setItem('moonlight.panicSite', site);
    } else {
        localStorage.setItem('moonlight.panicSite', 'https://'+site);
    }
}

function setTitle(title) {
    if (title == null || title == "") {
        document.title = 'Moonlight';
        localStorage.setItem('moonlight.title', 'Moonlight');
    } else {
        document.title = title;
        localStorage.setItem('moonlight.title', title);
    }
    
}

function setIcon(icon) {
    if (icon == null || icon == "") {
        document.getElementById('icon').href = '/assets/imgs/logos/logo.png';
        localStorage.setItem('moonlight.icon', '/assets/imgs/logos/logo.png');
    } else {
        document.getElementById('icon').href = icon;
        localStorage.setItem('moonlight.icon', icon);
    }
    
}

document.addEventListener("keydown", (e) => {
    if (e.key == localStorage.getItem('moonlight.panicKey')) {
      window.open(localStorage.getItem('moonlight.panicSite'), '_self')
    }
});