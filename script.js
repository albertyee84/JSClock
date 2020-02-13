const clock = document.querySelector('.clock');

setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date();
    let seconds = currentDate.getSeconds();
    let minutes = currentDate.getMinutes();
    let hours = currentDate.getHours();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let amPm = hours > 12 ? `PM` : `AM`;
    hours = hours > 12 ? hours % 12 : hours;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    clock.innerText = `${hours}:${minutes}:${seconds} ${amPm}`;
}

setClock();