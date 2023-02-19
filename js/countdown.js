//Countdown timer:
const timer = document.querySelector('.timer-count');
const startBtn = document.querySelector('.timer-button.start');
// const restartBtn = document.querySelector('.timer-button.restart');
timer.innerText = '60';

//Timer function:
const startTimer = () => {
    let currentTime = 60; //--> setting an initial value for the current time
    const timerCountdown = setInterval(() => {
        startBtn.disabled = true;
        if (currentTime == 1) { //--> if current time on the interval equals 1, it means a whole minute has passed
            clearInterval(timerCountdown); //--> clearing the interval, since it's finished
            startBtn.innerText = 'restart';
            startBtn.disabled = false;
        }
        timer.innerText = 60 - currentTime;
        currentTime -= 1;
        timer.innerText = currentTime;
    }, 1000); //--> activates the function every 1000 milliseconds so every second
}

startBtn.addEventListener('click', startTimer);