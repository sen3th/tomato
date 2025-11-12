const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const timer = document.getElementById('timer');

let timeLeft = 1500; // 25 minutes in seconds
let timerInterval = null;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // show as MM:SS with no extra whitespace
    timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
};

const startTimer = () => {
    // prevent multiple intervals if start clicked repeatedly
    if (timerInterval) return;

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("time's up, take a break!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
};

const stopTimer = () => {
    clearInterval(timerInterval);
    timerInterval = null;
};

const resetTimer = () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 1500;
    updateTimer();
};

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);