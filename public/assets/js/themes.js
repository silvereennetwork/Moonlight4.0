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
	if (JSON.stringify(json)) {
		localStorage.setItem("moonlight.customTheme", JSON.stringify(json));
		loadTheme();
	}
}
function removeTheme() {
	localStorage.removeItem("moonlight.customTheme");
	customThemeJSON(`{
          "--primary-color": "#ffffff",
          "--secondary-color": "#a3a3a3",
          "--third-color": "#696969",
          "--text-color": "#ffffff",
          "--background": "url(/assets/imgs/backgrounds/astroslate.png)",
          "--container": "rgba(150, 150, 150, 0.28)",
		      "--containerborder": "#4a4a4a",
  		    "--selected": "#919191",
  		    "--buttonbg": "#ffffff"
        }`);
}