function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = hours + ':' + minutes;
    document.getElementById('time-display').textContent = timeString;
}

// Initial call to update the clock
updateClock();

// Update the time every 60 seconds
setInterval(updateClock, 60000);