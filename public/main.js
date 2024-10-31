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

function updateAnnouncementHeader() {
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
      } else {
        bar.style.display = 'none';
      }
    });
}

const updateAnnouncementHeaderInterval = setInterval(updateAnnouncementHeader, 1000);
updateAnnouncementHeader()


fetch('/api/api/statusjson')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.code == 0 || data.code == 1) {
      showNotifi(3, 3, '#ffaa00', 'Warning!', 'An outage has been reported on Silvereen Network\'s main servers. <br> This may effect some functionality.')
    }
  });

fetch('/api/view', {
  method: "POST"
});

// Function to get all data from localStorage and sessionStorage

function downloadFile(content, name) {
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function getStorageData() {
  let storageData = {
    localStorage: {},
    sessionStorage: {}
  };

  // Get data from localStorage
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    storageData.localStorage[key] = localStorage.getItem(key);
  }

  // Get data from sessionStorage
  for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    storageData.sessionStorage[key] = sessionStorage.getItem(key);
  }

  // Convert the object to JSON format
  return JSON.stringify(storageData);
}

// To upload and restore this JSON data later, you can do this:
function restoreStorageData(jsonData) {
  let data = JSON.parse(jsonData);

  // Restore localStorage data
  for (let key in data.localStorage) {
    if (data.localStorage.hasOwnProperty(key)) {
      localStorage.setItem(key, data.localStorage[key]);
    }
  }

  // Restore sessionStorage data
  for (let key in data.sessionStorage) {
    if (data.sessionStorage.hasOwnProperty(key)) {
      sessionStorage.setItem(key, data.sessionStorage[key]);
    }
  }
}

function uploadFile(callback) {
  // Create an input element of type file
  const input = document.createElement('input');
  input.type = 'file';

  // Listen for file selection
  input.onchange = (event) => {
    const file = event.target.files[0]; // Get the selected file

    if (file) {
      const reader = new FileReader();

      // Set up a callback to handle when the file is fully read
      reader.onload = (e) => {
        const fileContent = e.target.result; // File content
        callback(fileContent); // Pass the content to the callback function
      };

      // Read the file as text
      reader.readAsText(file);
    }
  };

  // Programmatically trigger the file input click
  input.click();
}

var asciiv5 = `
Moonlight 4.0                              
`;
console.log(asciiv5);


