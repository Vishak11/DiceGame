'use strict'
const how = document.querySelector('.how')
// console.log(instruction)
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const player0El = document.querySelector('.player--0')
const player0E2 = document.querySelector('.player--1')

let currentScore, activePlayer, score;

const newGame = () => {
    currentScore = 0
    activePlayer = 0
    score = [0, 0]
    score0El.textContent = 0
    score1El.textContent = 0
    diceEl.classList.add('hidden')
    current0El.textContent = 0
    current1El.textContent = 0
    player0El.classList.remove('player--winner')
    player0E2.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player0E2.classList.remove('player--active')
    document.getElementById('name--0').textContent="Player 1"
    document.getElementById('name--1').textContent="Player 2"
    btnRoll.disabled = false
    btnHold.disabled = false

}
newGame()

const switchPlayer = () => {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player0E2.classList.toggle('player--active')
}



//rolling dice
btnRoll.addEventListener('click', function () {

    const dice = Math.trunc(Math.random() * 6) + 1
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`
    if (dice != 1) {
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }
    else {
        document.getElementById(`score--${activePlayer}`).textContent = 0
        score[activePlayer] = 0
        switchPlayer()



    }


})

btnHold.addEventListener('click', function () {
    score[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

    if (score[activePlayer] >= 100) {
        document.getElementById(`name--${activePlayer}`).textContent="Winner..."
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        // document.getElementById(`name--${activePlayer}`).textContent = "Winner!!!!!"
        btnRoll.disabled = true
        btnHold.disabled = true
        diceEl.classList.add('hidden')



    } else { switchPlayer() }


})
btnNew.addEventListener('click', newGame)

how.addEventListener('mouseover', function () {
    const dialogBox = document.createElement('div');
    dialogBox.textContent = "Click the Roll Dice button to roll the dice. The number you roll gets added to your current score. If you are satisfied with your current score, click the Hold button to save it. Be careful, though, rolling a 1 resets your current score!The first player to reach 100 points wins the game! Good luck!";
    dialogBox.style.backgroundColor = '#f9f9f9';
  dialogBox.style.border = '1px solid #ddd';
  dialogBox.style.padding = '20px';
  dialogBox.style.position = 'absolute';
  dialogBox.style.top = '50px';
  dialogBox.style.left = '50px';
  dialogBox.style.width = '220px';
  dialogBox.style.height = '400px';
  
  dialogBox.style.borderRadius="10px"
  dialogBox.style.fontSize = '18px';
    document.body.appendChild(dialogBox);
    how.addEventListener('mouseout', function() {
    document.body.removeChild(dialogBox);
    })
})








