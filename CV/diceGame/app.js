/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
// declaration of variables

var playerSelect, score, roundScore, Player1, Player2, gamePlaying, gamePoint, count;
// initialisation of the variables
init = () => {
    count = 0;
    score = [0,0,];
    activePlayer = 0; 
    roundScore = 0;
    gamePlaying = true;
    Player1 = prompt("Enter Player 1 Name ");
    Player2 = prompt("Enter Player 2 Name ");
    gamePoint = prompt("Enter the Game Point for the game");
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = Player1;
    document.querySelector('#name-1').textContent = Player2;
    document.querySelector('.btn-roll').disabled = false;
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
}
init();

//! Mutating the html to show the current score
document.querySelector('.btn-new').addEventListener('click',init);

//! change player function call
function ChangePlayer(){
    roundScore = 0;
    document.querySelector('#current-'+activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // ?changing the active player class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // TODO: document.querySelector('.dice').style.display = 'none';
    }

document.querySelector('.btn-roll').addEventListener('click',rollDice = () =>{
    if(gamePlaying){
        //! generate a randon number
        let previousDice = 0;
        var dice = Math.floor(Math.random() * 6) + 1;
        previousDice = dice;
        if(previousDice == 6){
            count = count + 1;
            //TODO /Testing / console.log(count) 
            if(count == 2){
                //TODO /testing / console.log("SIX in a row");
                document.querySelector('#score-'+activePlayer).textContent = '0';
                document.querySelector('#current-'+activePlayer).textContent = '0';
                ChangePlayer();
            }  
            // TODO: testing purpose
            //! else{
            //!     // count = 0;
            //!     console.log("OK");
            //! }
        }
        else{
            count = 0;
            console.log("out of loop"+count);
        }


        //! Display the result by image
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+dice+'.png';

        //! update the round score by changing player and current score
        if(dice !==  1){
            //! Add score
            roundScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }else{
            //! Next player turn and set round score to 0
            ChangePlayer();
        }   
    }
});
document.querySelector('.btn-hold').addEventListener('click',hold = () => {
    if(gamePlaying){
        count = 0;
        // console.log("count set to 0");
        score[activePlayer] += roundScore;
        document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];

        
        // ! check for the winner 
        if(score[activePlayer] >= gamePoint){
            document.querySelector('#name-'+activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            // ! another way to stop gamePlaying   document.querySelector('.btn-roll').disabled = true;
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //! next player turn
            ChangePlayer();
        }
    }
});



