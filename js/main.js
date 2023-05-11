
document.getElementById("buy-coins").addEventListener("click", buyCoins);
const buyPackButtons = document.getElementsByClassName("buy-pack");
for (const button of buyPackButtons) {
    button.addEventListener("click", buyPack);
}

let coins = 0;

function updateCoinCount() {
    document.getElementById("coin-count").innerText = coins;
}

function buyCoins() {
    coins += 10;
    updateCoinCount();
}

function buyPack(event) {
    const pack = event.target.parentElement;
    const cost = parseInt(pack.getAttribute("data-cost"));

    if (coins >= cost) {
        coins -= cost;
        updateCoinCount();
        openPack();
    } else {
        alert("You don't have enough coins!");
    }
}

const imagePaths = [
    "res/Jons_die_Dampflok.png",        //normal
    "res/texas_jons.png",               //normal
    "res/lyrikJons.png",        	    //selten
    "res/kommunisten_jons.png",         //selten
    "res/wombatjons.jpg",               //legendär
    "res/rothschild_jons_legendary.png" //legendär
];

const probabilities = [0.3, 0.3, 0.15, 0.15, 0.05, 0.05]; 

function openPack() {
    // Generate random number between 0 and 1
    let random = Math.random();
    
    // Select image based on probabilities
    let selectedImage;
    let cumulativeProb = 0;
    for (let i = 0; i < imagePaths.length; i++) {
        cumulativeProb += probabilities[i];
        if (random < cumulativeProb) {
            selectedImage = imagePaths[i];
            break;
        }
    }
    
    // Create image element and add to page
    const img = document.createElement("img");
    img.src = selectedImage;
    img.classList.add("card");
    document.getElementById("card-collection").appendChild(img);
}
