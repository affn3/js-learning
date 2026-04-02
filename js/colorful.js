function colorful() {
    document.body.classList.toggle("colorful")
    if (document.body.classList.contains("colorful")) {
        localStorage.setItem("colorfulMode", "enabled")
    } else {
        localStorage.setItem("colorfulMode", "disabled")
    }
}

let currentColorfulMode = localStorage.getItem("colorfulMode")
if (currentColorfulMode == "enabled") {
    document.body.classList.toggle("colorful")
}
