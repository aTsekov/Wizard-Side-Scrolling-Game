
// select game screens
const gameStart = document.querySelector('.game-start');
const gameArea = document.querySelector('.game-area');
const gameOverlay = document.querySelector('.game-over');
const gameScore = document.querySelector('.game-score');

gameStart.addEventListener('click', onGameStart);

function onGameStart(){
    
    gameStart.classList.add('hide');

    //Render Wizard
    const wizard = document.createElement('div');
    wizard.classList.add('wizard');
    wizard. style.top = "200px";
    wizard. style.left = "200px";
    gameArea.appendChild(wizard);
}