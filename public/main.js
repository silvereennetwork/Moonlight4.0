let timeString;
let batteryLevel;

var erudaAttach = document.createElement('script');
erudaAttach.src = 'https://cdnjs.cloudflare.com/ajax/libs/eruda/3.0.1/eruda.min.js';
var erudaInit = document.createElement('script');
erudaInit.innerHTML = 'eruda.init()';
document.body.appendChild(erudaAttach);
document.body.appendChild(erudaInit);


if (document.getElementById('time-clock')) {
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
}

/* NOTIFICATION CODE */
function showNotifi(time, duration, color, title, message, url = null) {
  var notification = document.createElement('div');
  notification.className = 'notification';
  notification.style.cssText = `
        background-color: ${color};
        font-size: 0.75em; 
        animation-duration: ${duration * 0.1}s;
    `;

  var notificationTitle = document.createElement('h2');
  notificationTitle.innerHTML = title;
  notification.appendChild(notificationTitle);

  var notificationMessage = document.createElement('p');
  notificationMessage.innerHTML = message;
  notification.appendChild(notificationMessage);

  if (url) {
    notification.style.cursor = 'pointer'; // Make the notification clickable
    notification.addEventListener('click', function () {
      window.location.href = url; // Navigate to the URL when clicked
    });
  }

  var durationBar = document.createElement('div');
  durationBar.className = 'duration-bar';
  durationBar.style.animationDuration = `${duration}s`;
  durationBar.classList.add('decrease');
  notification.appendChild(durationBar);

  document.body.appendChild(notification);

  notification.classList.add('show');

  setTimeout(function () {
    notification.classList.add('hide');
    notification.style.animationName = 'slide-down';
    notification.style.animationDuration = '0.5s';
    notification.style.animationFillMode = 'forwards';
    setTimeout(function () {
      document.body.removeChild(notification);
    }, 500);
  }, duration * 1000);

  setTimeout(function () {
    notification.style.animationName = 'fadeOut';
    setTimeout(function () {
      document.body.removeChild(notification);
    }, (time - duration) * 1000);
  }, (time + 0.6) * 1000);
}

function getDeviceInfo() {
  var info = `${batteryLevel}; ${screen.width}; ${screen.height}; ${navigator.userAgent};`;
  return info;

}

const bar = document.getElementById('announcement-bar')

    fetch('/api/api/announcement-header')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.display == "true") {
          bar.innerHTML = data.text;
          bar.style.backgroundColor = data.bgcolor;
          bar.style.color = data.textcolor;
          bar.style.display = 'block';
        }
      });

var asciiv5 = `
Moonlight 4.0                              
`;
console.log(asciiv5);


