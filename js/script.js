const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const statusTitle = document.getElementById('status');
const attempt = document.getElementById('attempt');
const inputValue = document.getElementById('kick');
const result = document.getElementById('result');
const btnRestart = document.getElementById('btn-restart')

const GuessNumber = {
    max: 10,
    attemptNumber: 0,
    numberDraw: function (){
        return Math.round(Math.random() * this.max);
    },
    showButtonRestart: function () {
        btnRestart.style.display = 'flex'
    },
    clearInput: function () {
        inputValue.value = '';
    },
    updateAttempt: function (value){
        attempt.innerHTML = value;

    },
    correctAnswear: function (){
        this.showButtonRestart();
        statusTitle.innerHTML = 'Parabéns, você acertou!'

        statusTitle.classList.remove('incorrect-answear');
        statusTitle.classList.add('status-correct');

        result.classList.remove('result-box-default');
        result.classList.add('result-correct-answear');

        this.clearInput();
    },
    incorrectAnswear: function (message){
        statusTitle.innerHTML = message;
        statusTitle.classList.add('incorrect-answear');

        this.clearInput();
    },
};

const numberDraw = GuessNumber.numberDraw();

function handleSubmit(e){
    e.preventDefault();

    const kick = inputValue.value;

    if (!kick){
        alert('Digite algum valor!');
        return;
    }

    GuessNumber.updateAttempt(++GuessNumber.attemptNumber);

    if (numberDraw == kick) {
        GuessNumber.correctAnswear()
    } else if (numberDraw > kick) {
        GuessNumber.incorrectAnswear('O número é maior')
    } else if (numberDraw < kick) {
        GuessNumber.incorrectAnswear('O número é menor')
    }

}

function restartGame (){
        document.location.reload();
    }
