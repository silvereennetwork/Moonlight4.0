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
	localStorage.removeItem("moonlight.customTheme");
	customThemeJSON(`{
		"--primary-color": "#064180",
		"--secondary-color": "#003366",
		"--third-color": "#336699",
		"--text-color": "#fff",
		"--background": "url(/assets/imgs/backgrounds/1.png)",
		"--container": "rgba(255, 255, 255, 0.28)",
		"--containerborder": "rgba(0,0,0,0)",
  		"--selected": "lime",
  		"--buttonbg": "#1a1a1a"
		}`);
}