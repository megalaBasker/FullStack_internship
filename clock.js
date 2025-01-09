function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();