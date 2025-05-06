function getRandom(){
    return Math.floor(Math.random() * 11) + 2;
}
let firstCard = getRandom();
let secondCard = getRandom();
let hasJackBlack = false
let isAlive = true

let sum = firstCard + secondCard;
let cards = [firstCard, secondCard]

// Render
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){

sumEl.textContent = "Sum: " + sum
cardsEl.textContent = "Cards: "+ cards 

if (sum <= 20) {
    messageEl.textContent = "Do you want to draw a new card?";
}else if(sum === 21) {
    hasJackBlack = true
    messageEl.textContent = "Blackjack!";
} else {
    isAlive = false
    messageEl.textContent = "You are out of the game!";
}

}

function newCard(){
    let thirdCard = getRandom()
    cards.push(thirdCard)
    sum += thirdCard
    
    renderGame()
}

