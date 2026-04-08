const greetBtn = document.getElementById("greetBtn")
greetBtn.addEventListener("click", () => {
    let nameInput = document.getElementById("nameInput")
    let name = String(nameInput.value)
    greet(name);
})

function greet(name) {
    alert('Hallo ' + name)
}