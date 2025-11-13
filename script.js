const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const timer = document.getElementById('timer');

let timeLeft = 1500; // 25 minutes in seconds
let timerInterval = null;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;


    timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
};

const startTimer = () => {

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

startButton.addEventListener('click', () => {
    animateButton(startButton);
    startTimer();
});
stopButton.addEventListener('click', () => {
    animateButton(stopButton);
    stopTimer();
});
resetButton.addEventListener('click', () => {
    animateButton(resetButton);
    resetTimer();
});

const animateButton = (button) => {
    button.classList.add('clicked');

    setTimeout(() => {
        button.classList.remove('clicked');
    }, 300);
};

const addCheckboxButton = document.getElementById('addCheckboxButton');
const checkboxLabelUserInput = document.getElementById('checkboxLabelUserInput');
const checkboxContainer = document.getElementById('checkboxContainer');

function addCheckbox() {
    const labelText = checkboxLabelUserInput.value.trim();

    if (!labelText) return;

    const id = `checkbox-${Date.now()}`;
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = id;
    newCheckbox.name = id;
    newCheckbox.value = labelText;

    const newLabel = document.createElement('label');
    newLabel.htmlFor = newCheckbox.id;
    newLabel.textContent = labelText;

    const row = document.createElement('div');
    row.className = 'check';
    row.appendChild(newCheckbox);
    row.appendChild(newLabel);

    checkboxContainer.appendChild(row);
    checkboxLabelUserInput.value = '';
}

addCheckboxButton.addEventListener('click', addCheckbox);

checkboxLabelUserInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addCheckbox();
    }
});