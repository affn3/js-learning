let random = 0;

const generateButton = document.getElementById("generateButton")
generateButton.addEventListener("click", () => {
    random = Math.round(Math.random() * 6);
    updateRandom();
})

function updateRandom() {
document.getElementById("random").innerHTML = random;
}