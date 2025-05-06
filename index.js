
let player = {
    name: "Noa",
    chips: 0
}


function getRandomCard(){
    let card =  Math.floor(Math.random() * 13) + 1
    if(card > 10){
        return 10
    }
    if(card === 1){
        return 11
    }
    return card
}

// Global Variables
let hasJackBlack = false
let isAlive = false
let sum = 0
let cards = []
let message = ""

// Render
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    isAlive = true
    hasJackBlack = false
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    sum = firstCard + secondCard;
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame(){

    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "+ cards 

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }else if(sum === 21) {
        hasJackBlack = true
        message = "Blackjack!";
        player.chips += 10
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        isAlive = false
        message = "You are out of the game!";
    }
        messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasJackBlack === false){
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


