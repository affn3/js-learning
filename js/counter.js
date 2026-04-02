let count = 0

function updateCount() {
    document.getElementById("count").innerHTML = count;
}

const increaseButton = document.getElementById("increaseButton")
increaseButton.addEventListener("click", () => { 
    if (upgrade.bougth == true) {
        count = count + 2;
    } else {
    count++;
    }
    updateCount();
})
   
const decreaseButton = document.getElementById("decreaseButton")
decreaseButton.addEventListener("click", () => {
    count--;
    updateCount();
}) 

const saveButton = document.getElementById("saveButton")
saveButton.addEventListener("click", () => {
    localStorage.setItem("count", count)
    let list = document.getElementById("history-list");
    let entry = document.createElement("li")
    entry.innerText = "Gespeichert: " + count;
    list.appendChild(entry);
})

const loadButton = document.getElementById("loadButton")
loadButton.addEventListener("click", () => {
    let saved = localStorage.getItem("count");
    if (saved !== null) {
    count = Number(saved);
    }
    updateCount();
})
   
const clearButton = document.getElementById("clearButton")
clearButton.addEventListener("click", () => {
    count = 0;
    updateCount();
})

const doubleButton = document.getElementById("doubleButton")
doubleButton.addEventListener("click", () => {
 if (count !== null) {
    count = count * 2;
    }
    updateCount();
})

const halfButton = document.getElementById("halfButton")
halfButton.addEventListener("click", () => {
     if (count !== null) {
    count = count / 2;
    }
    updateCount();
})

let upgrade = {
    name: "Super-klick",
    cost: 100,
    multiplier: 2,
    bougth: false
};

const upgradeButton = document.getElementById("upgradeButton")
upgradeButton.addEventListener("click", () => {
    if (upgrade.bougth == false) {
   if (count >= upgrade.cost) {
    count -= upgrade.cost;
    upgrade.bougth = true;
    updateCount();
   } else {
    alert('not enough count!')
   }
   } else {
    alert('already bougth!')
   }
})
