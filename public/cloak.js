document.title = localStorage.getItem('title');
document.getElementById('icon').href = localStorage.getItem('icon');

function setTitle(title) {
    document.title = title;
    localStorage.setItem('title', title);
}

function setIcon(icon) {
    document.getElementById('icon').href = icon;
    localStorage.setItem('icon', icon);
}
