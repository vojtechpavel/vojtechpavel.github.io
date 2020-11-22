const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

let lockBoard = false;
let counter = 0;
/*------------------------------------------------------------------------------*/
function flipCard() {
    if (lockBoard) {
        return true;
    }
    if (this === firstCard) return true;

    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
    }
    else {
        //second click
        secondCard = this;

        //do cards match?
        checkForMatch();

        //counter of attempts
        counter += 1;
        //console.log(counter);
        document.getElementById('number').innerHTML = counter;  //printing out into HTML
    }
  }
  /*------------------------------------------------------------------------------*/
function checkForMatch () {
    //do cards match?
    /*let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;  //this option or below that
    isMatch ? disableCards () : unFlipCards();*/

    if (firstCard.dataset.framework === secondCard.dataset.framework){
        //it's a match!!!
        disableCards();
    }
    else {
        unFlipCards();
    }
}
/*------------------------------------------------------------------------------*/
function disableCards (){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}
/*------------------------------------------------------------------------------*/
function unFlipCards (){
    lockBoard = true;

    //not a match
    setTimeout( () => {                   /*TO ENSURE THAT CARD IS NOT FLIPPING BACK IMMEDIATELY*/
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    },1500);
}
/*------------------------------------------------------------------------------*/
function resetBoard () {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
/*------------------------------------------------------------------------------*/
(function shuffle (){                   //invoke!!! 
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})();
/*------------------------------------------------------------------------------*/
cards.forEach(card => card.addEventListener("click", flipCard));