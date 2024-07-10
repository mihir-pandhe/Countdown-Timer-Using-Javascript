let countdownInterval;
let remainingTime;
let isPaused = false;

function startCountdown() {
    if (isPaused) {
        isPaused = false;
        return;
    }

    const minutesInput = document.getElementById('minutes').value;
    const secondsInput = document.getElementById('seconds').value;
    const minutes = parseInt(minutesInput) || 0;
    const seconds = parseInt(secondsInput) || 0;

    remainingTime = minutes * 60 + seconds;

    countdownInterval = setInterval(() => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        document.getElementById('countdown').textContent = `${pad(minutes)}:${pad(seconds)}`;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = "Time's up!";
        }

        remainingTime--;
    }, 1000);
}

function pauseCountdown() {
    clearInterval(countdownInterval);
    isPaused = true;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

document.getElementById('start-btn').addEventListener('click', startCountdown);
document.getElementById('pause-btn').addEventListener('click', pauseCountdown);
