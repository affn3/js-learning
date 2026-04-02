function darkMode() {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("darkMode", "enabled")
    } else {
        localStorage.setItem("darkMode", "disabled")
    }
}

let currentMode = localStorage.getItem("darkMode")
if (currentMode == "enabled") {
    document.body.classList.toggle("dark-theme")
}