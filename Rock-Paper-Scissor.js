const rockbuttonelement = document.querySelector('.js-rock');
const paperbuttonelement = document.querySelector('.js-paper');
const scissorbuttonelement = document.querySelector('.js-scissor');
const displayScore = document.querySelector('.js-display');
const displayscore2 = document.querySelector('.js-moves');
const resetScoreButton = document.querySelector('.js-reset-button');
const autoPlayButton = document.querySelector('.js-auto-play-button');
const confermResetMessage = document.querySelector('.js-confermreset');


let computerMove = '';
let playerMove = 'none';
let computerMoveDisplay = 'none';
let autoplay = false;
let move ;
const computer = () => {
    num = Math.random();
    if (num >=0 && num <=1/3) {
        computerMove = 'rock';
    } else if (num >=1/3 && num <=2/3) {
        computerMove = 'paper';
    } else if (num >=2/3 && num <=1) {
        computerMove = 'scissor';
    }
    return computerMove ;
}
const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
}
const playerMoveRock = () => {
    playerMove = '<img src="icones/Screenshot 2024-04-18 at 12-26-22 Rock Paper Scissors Emojis ✊✌️✋👊✌️✋ Copy & Paste.png">';
    
    computerDisplay();
    if (computer() === 'rock') {
        score.ties++;
    } else if (computer() === 'paper') {
        score.loses++;
    } else if (computer() === 'scissor') {
        score.wins++;
    }
    localStorage.setItem('score', JSON.stringify(score));
    displayMove();
    display();
}
const playerMovePaper = () => {
    playerMove = '<img src="icones/Screenshot 2024-04-18 at 12-26-58 Rock Paper Scissors Emojis ✊✌️✋👊✌️✋ Copy & Paste.png">';
    computerDisplay();
    if (computer() === 'rock') {
        score.wins++;
    } else if (computer() === 'paper') {
        score.ties++;
    } else if (computer() === 'scissor') {
        score.loses++;
    }
    localStorage.setItem('score', JSON.stringify(score));
    displayMove();
    display();
}
const playerMoveScissor = () => {
    playerMove = '<img src="icones/Screenshot 2024-04-18 at 12-27-04 Rock Paper Scissors Emojis ✊✌️✋👊✌️✋ Copy & Paste.png">';
    computerDisplay();
    if (computer() === 'rock') {
        score.loses++;
    } else if (computer() === 'paper') {
        score.wins++;
    } else if (computer() === 'scissor') {
        score.ties++;
    }
    localStorage.setItem('score', JSON.stringify(score));
    displayMove();
    display();
}
const computerDisplay = () => {
    if (computer() === 'rock'){
        computerMoveDisplay = '<img src="icones/Screenshot 2024-04-18 at 12-26-22 Rock Paper Scissors Emojis ✊✌️✋👊✌️✋ Copy & Paste.png">'
    }else if (computer() === 'paper'){
        computerMoveDisplay = '<img src="icones/Screenshot 2024-04-18 at 12-26-58 Rock Paper Scissors Emojis ✊✌️✋👊✌️✋ Copy & Paste.png">'
    }else if (computer() === 'scissor'){
        computerMoveDisplay = '<img src="icones/Screenshot 2024-04-18 at 12-27-04 Rock Paper Scissors Emojis ✊✌️✋👊✌️✋ Copy & Paste.png">'
    }
}
const display = () => {
    displayScore.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}
const displayMove = () => {
    displayscore2.innerHTML = `player: ${playerMove}, Computer: ${computerMoveDisplay}`;
}
displayMove();
display();
rockbuttonelement.addEventListener('click', playerMoveRock)
paperbuttonelement.addEventListener('click', playerMovePaper)
scissorbuttonelement.addEventListener('click', playerMoveScissor)
resetScoreButton.addEventListener('click', () => {
    confermResetMessage.innerHTML = `Are you sure you want to reset the score?
    <button class='js-yesbutton'>Yes</button> <button class='js-nobutton'>No</button>`
    const yesButton = document.querySelector('.js-yesbutton');
    const noButton = document.querySelector('.js-nobutton');
    yesButton.addEventListener('click', () => {
        localStorage.removeItem('score');
        location.reload();
    })
    noButton.addEventListener('click', () => {
        confermResetMessage.innerHTML = '';
    })
})
autoPlayButton.addEventListener('click', () => {
    if (autoPlayButton.innerText === 'Auto play'){
        autoPlayButton.innerText = 'Stop';
    } else if (autoPlayButton.innerText === 'Stop'){
        autoPlayButton.innerText = 'Auto play';
    }
    if (autoplay === true){
        clearInterval(interval)
        autoplay = false;
    } else if (autoplay === false){
        interval = setInterval(() => {
            move = computer()
            if (move === 'rock'){
                playerMoveRock();
            } else if (move === 'paper'){
                playerMovePaper();
            } else if (move === 'scissor'){
                playerMoveScissor();
            }
        }, 500);
        autoplay = true;
    }
})
