let userGuess;
let rndmNum;

const compareButton = document.getElementById("compareButton")
compareButton.addEventListener("click", () => {
   let inputField = document.getElementById("guessInput");
   userGuess = Number(inputField.value);

    rndmNum = Math.round(Math.random() * 6);

    if (userGuess == rndmNum) {
        alert('correct');
    } else {
        alert('false');
    }
})
