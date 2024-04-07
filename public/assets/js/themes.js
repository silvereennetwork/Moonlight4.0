// some of my worst fucking work ever
// borrowed from selenite
document.addEventListener("DOMContentLoaded", () => {
	loadTheme();
});
function loadTheme() {
		theme = localStorage.getItem("moonlight.customTheme");
		if (theme) {
			theme_json = JSON.parse(theme);
			theme_json = JSON.parse(theme_json);
			for (let i = 0; i < Object.keys(theme_json).length; i++) {
				document.body.style.setProperty(Object.keys(theme_json)[i], eval(`theme_json["${Object.keys(theme_json)[i]}"]   `));
			}
	}
}
function customThemeJSON(json) {
	if(JSON.stringify(json)) {
		localStorage.setItem("moonlight.customTheme", JSON.stringify(json));
		loadTheme();
	}
}
function removeTheme() {
	localStorage.removeItem("moonlight.customTheme")
}