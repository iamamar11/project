//? global variables for the game
let PlayingBox, boxses, status, PlayerWon, box1 ,box2, box3, playerX = 0, playerO = 0, gameState = true, IsWin = false;
let counter = 0, boxId = [];

let playerXname = prompt("Enter Name of player with X-SIGN");
let playerOname = prompt("Enter Name of player with O-SIGN");

document.querySelector('#playerx').textContent = playerXname;
document.querySelector('#playero').textContent = playerOname;
// console.log(playerXname);
status = document.querySelector('#status');

//! code to get all the buttons and store all of them inside the boxID array and
//! this will be used for checking who is the real winner among the two players
for(let i = 1; i<=9; i++ ){
    data = document.querySelector("#box"+i);
    boxId.push(data);
}
function clearBox(){
    for(let i = 1; i <= 9; i++){
        document.querySelector('#box'+i).textContent = "";
        document.querySelector('#box'+i).disabled = false;
        document.querySelector('#box'+i).classList.remove('boxClicked');
        // document.querySelector('#box'+i).style.background = "black";
    }
}

function restartGame(){
    IsWin = false;
    gameState = true;
    status.style.display = "none";
    clearBox();
    counter = 0;
}

function gameOver(){
    // gameState = false;
    if(counter == 9 ){
        status.style.display = "block";
        status.innerText = "GAME OVER.. YOU NEED TO RESTART AGAIN!";
        // restartGame();
    }
}
function IsGameWon(PlayerWonName){

    gameState = false;
    
    if(IsWin && !gameState){
        status.style.display = "block";
        //!Cannot assign message value to status feild 
        status.innerText = PlayerWonName;
        if(PlayerWonName === "X symbol won"){
            console.log(playerXname);
            document.querySelector('#playerXscore').textContent = (++playerX);
        }else if(PlayerWonName === "O symbol won"){
            // console.log(++playerO);
            document.querySelector('#playerOscore').textContent = (++playerO);

        }
        console.log(PlayerWonName);

        //? disabing all the buttons
        clearBox();
    }
}

//? Parent function to start playing game
function getID(divElement){
    // let boxfeild = divElement.getAttribute("id");  
    // boxId.push(boxfeild);
    if(gameState){
        if(parseInt(counter % 2) == 1){
            divElement.textContent = "X";
            divElement.disabled = true;
            divElement.classList.add('boxClicked');
            // divElement.style.background = "Green";
            console.log("condition : "+parseInt(counter % 2)+" counter : "+ (counter++));
            CheckWin(); 
            gameOver();           
        }else{
            divElement.textContent = "O";
            divElement.disabled = true;
            divElement.classList.add('boxClicked');
            // divElement.style.background = "Green";
            console.log("condition : "+parseInt(counter % 2)+" counter : "+ (counter++));
            CheckWin();
            gameOver();
        }
    }
}

function CheckWin(){

    // ! First Row
    if((boxId[0].textContent == 'X' && boxId[1].textContent == 'X' && boxId[2].textContent == 'X' )){
        IsWin = true;
        PlayerWon = "X symbol won";
        IsGameWon(PlayerWon);        
        document.querySelector('#playerx').textContent = "PLAYER X : "+(++playerX);
        

    }else if((boxId[0].textContent == 'O' && boxId[1].textContent == 'O' && boxId[2].textContent == 'O' )){
        IsWin = true;
        PlayerWon = "O symbol won";
        
        IsGameWon(PlayerWon);
    }
    //!second Row
    if((boxId[3].textContent == 'X' && boxId[4].textContent == 'X' && boxId[5].textContent == 'X' )){
        IsWin = true;
        PlayerWon = "X symbol won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[3].textContent == 'O' && boxId[4].textContent == 'O' && boxId[5].textContent == 'O' )){
        IsWin = true;
        PlayerWon = "O symbol won";
        
        IsGameWon(PlayerWon);
    }

    //! last Row
    if((boxId[6].textContent == 'X' && boxId[7].textContent == 'X' && boxId[8].textContent == 'X' )){
        IsWin = true;
        PlayerWon = "X symbol won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[6].textContent == 'O' && boxId[7].textContent == 'O' && boxId[8].textContent == 'O' )){
        IsWin = true;
        PlayerWon = "O symbol won";
        
        IsGameWon(PlayerWon);
    }

    //! diagonal one
    if((boxId[0].textContent == 'X' && boxId[4].textContent == 'X' && boxId[8].textContent == 'X' )){
        IsWin = true;
        PlayerWon = "X symbol won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[0].textContent == 'O' && boxId[4].textContent == 'O' && boxId[8].textContent == 'O' )){
        IsWin = true;
        PlayerWon = "O symbol won";
        
        IsGameWon(PlayerWon);
    }
    //! diagonal two
    if((boxId[2].textContent == 'X' && boxId[4].textContent == 'X' && boxId[6].textContent == 'X' )){
        IsWin = true;
        PlayerWon = "X symbol won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[2].textContent == 'O' && boxId[4].textContent == 'O' && boxId[6].textContent == 'O' )){
        IsWin = true;
        PlayerWon = "O symbol won";
        
        IsGameWon(PlayerWon);
    }
    //! First Column
    if((boxId[0].textContent == 'X' && boxId[3].textContent == 'X' && boxId[6].textContent == 'X' )){
        IsWin = true;
        PlayerWon = "X symbol won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[0].textContent == 'O' && boxId[3].textContent == 'O' && boxId[6].textContent == 'O' )){
        IsWin = true;
        PlayerWon = "O symbol won";
        
        IsGameWon(PlayerWon);
    }
    //! Second Column
    if((boxId[1].textContent == 'X' && boxId[4].textContent == 'X' && boxId[7].textContent == 'X' )){
        IsWin = true;
        PlayerWon = "X symbol won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[1].textContent == 'O' && boxId[4].textContent == 'O' && boxId[7].textContent == 'O' )){
        IsWin = true;
        PlayerWon = "O symbol won";
        
        IsGameWon(PlayerWon);
    }
    //! Third Column
    if((boxId[2].textContent == 'X' && boxId[5].textContent == 'X' && boxId[8].textContent == 'X' )){
        IsWin = true;
        PlayerWon = "X symbol won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[2].textContent == 'O' && boxId[5].textContent == 'O' && boxId[8].textContent == 'O' )){
        IsWin = true;
        PlayerWon = "O symbol won";
        
        IsGameWon(PlayerWon);
    }



}

