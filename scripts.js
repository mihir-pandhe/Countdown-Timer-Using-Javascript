function startCountdown(duration) {
    const countdown = document.getElementById('countdown');
    let time = duration;
    
    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        
        countdown.textContent = `${pad(minutes)}:${pad(seconds)}`;
        
        if (time <= 0) {
            clearInterval(interval);
            countdown.textContent = "Time's up!";
        }
        
        time--;
    }, 1000);
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

startCountdown(300);
