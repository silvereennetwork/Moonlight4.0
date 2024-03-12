let timeString;
let batteryLevel;

var erudaAttach = document.createElement('script');
erudaAttach.src = 'https://cdnjs.cloudflare.com/ajax/libs/eruda/3.0.1/eruda.min.js';
var erudaInit = document.createElement('script');
erudaInit.innerHTML = 'eruda.init()';
document.body.appendChild(erudaAttach);
document.body.appendChild(erudaInit);

navigator.getBattery().then(function (battery) {
  function getTimeFromSeconds(seconds) {
    if (battery.charging && (seconds === Infinity || battery.level === 1)) {
      return "Fully Charged";
    } else if (seconds < 0) {
      return "Calculating...";
    } else {
      let date = new Date(1970, 0, 1);
      date.setSeconds(seconds);
      return date.toTimeString().substring(0, 5);
    }
  }

  function updateBatteryStatus() {
    let now = new Date();
    let hours = now.getHours();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    let currentTime = ` ${hours}:${minutes} ${ampm}`;

    batteryLevel = Math.round(battery.level * 100);
    setTimeout(updateBatteryStatus, 1000);

    if (battery.charging) {
      timeString = getTimeFromSeconds(battery.chargingTime) + " Until Full";
    } else {
      timeString = getTimeFromSeconds(battery.dischargingTime) + " Until Dead";
    }

    var fullthing; // Declare the variable once at the beginning

    if (battery.level <= 0.2 && !battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_1_bar</span> " +
        batteryLevel +
        "%";
    } else if (battery.level > 0.2 && battery.level < 0.35 && !battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_2_bar</span> " +
        batteryLevel +
        "%";
    } else if (battery.level >= 0.35 && battery.level < 0.5 && !battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_3_bar</span> " +
        batteryLevel +
        "%";
    } else if (battery.level >= 0.5 && battery.level < 0.65 && !battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_4_bar</span> " +
        batteryLevel +
        "%";
    } else if (battery.level >= 0.65 && battery.level < 0.9 && !battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_5_bar</span> " +
        batteryLevel +
        "%";
    } else if (battery.level >= 0.9 && !battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_full</span> " +
        batteryLevel +
        "%";
    } else if (battery.level <= 0.2 && battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_charging_20</span> " +
        batteryLevel +
        "%";
    } else if (battery.level > 0.2 && battery.level < 0.35 && battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_charging_30</span> " +
        batteryLevel +
        "%";
    } else if (battery.level >= 0.35 && battery.level < 0.5 && battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_charging_50</span> " +
        batteryLevel +
        "%";
    } else if (battery.level >= 0.5 && battery.level < 0.65 && battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_charging_60</span> " +
        batteryLevel +
        "%";
    } else if (battery.level >= 0.65 && battery.level < 0.9 && battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_charging_80</span> " +
        batteryLevel +
        "%";
    } else if (battery.level >= 0.9 && battery.level < 1 && battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - " +
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_charging_90</span> " +
        batteryLevel +
        "%";
    } else if (battery.level === 1 && battery.charging) {
      fullthing =
        "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +
        currentTime +
        " - <span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_charging_full</span> " +
        batteryLevel +
        "%";
    }

    console.log(battery.level && battery.charging);

    document.getElementById("time-clock").innerHTML = fullthing;
    return timeString;
  }

  updateBatteryStatus();

  battery.addEventListener("chargingchange", updateBatteryStatus);
  battery.addEventListener("chargingtimechange", updateBatteryStatus);
  battery.addEventListener("dischargingtimechange", updateBatteryStatus);
  battery.addEventListener("levelchange", updateBatteryStatus);
});

var asciiv5 = `
██████╗ ██╗  ██╗██╗  ██╗ ██████╗ ██╗   ██╗███████╗
╚════██╗██║ ██╔╝██║  ██║██╔═████╗██║   ██║██╔════╝
 █████╔╝█████╔╝ ███████║██║██╔██║██║   ██║███████╗
 ╚═══██╗██╔═██╗ ██╔══██║████╔╝██║╚██╗ ██╔╝╚════██║
██████╔╝██║  ██╗██║  ██║╚██████╔╝ ╚████╔╝ ███████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═══╝  ╚══════╝
                                                  
`;
console.log(asciiv5);
