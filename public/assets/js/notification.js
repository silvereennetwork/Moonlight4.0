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
        notification.addEventListener('click', function() {
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

    setTimeout(function() {
        notification.classList.add('hide');
        notification.style.animationName = 'slide-down';
        notification.style.animationDuration = '0.5s';
        notification.style.animationFillMode = 'forwards';
        setTimeout(function() {
            document.body.removeChild(notification);
        }, 500);
    }, duration * 1000);

    setTimeout(function() {
        notification.style.animationName = 'fadeOut';
        setTimeout(function() {
            document.body.removeChild(notification);
        }, (time - duration) * 1000);
    }, (time + 0.6) * 1000);
}
