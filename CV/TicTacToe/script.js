//? global variables for the game
let PlayingBox, boxses, status, PlayerWon, box1 ,box2, box3, playerX = 0, playerO = 0, gameState = true, IsWin = false;
let counter = 0, boxId = [];

//?  player name and signs
let playerXname, playerOname, playerSymbol1, playerSymbol2;

// ! function to get userinput name and symbols and check if they are equal or not equal
playerXname = prompt("Enter Name of player 1");
do{
    playerSymbol1 = prompt("Symbol for "+playerXname+". ONLY SINGLE CHARACTER");
}while(playerSymbol1.length > 1);

do{
    playerOname = prompt("Enter Name of player 2");
}while(playerOname == playerXname);

do{
    playerSymbol2 = prompt("Symbol for "+playerOname+". ONLY SINGLE CHARACTER");
}while(playerSymbol2 == playerSymbol1 || playerSymbol2.length > 1);

document.querySelector('#playerx').textContent = playerXname;
document.querySelector('#playero').textContent = playerOname;
status = document.querySelector('#status'); //display msg

//? Parent function to start playing game
function getID(divElement){
    console.log(divElement);
    // let boxfeild = divElement.getAttribute("id");  
    // boxId.push(boxfeild);
    if(gameState){
        if(parseInt(counter % 2) == 1){
            divElement.textContent = playerSymbol1;
            divElement.disabled = true;
            divElement.classList.add('boxClicked');
            console.log("condition : "+parseInt(counter % 2)+" counter : "+ (counter++));
            CheckWin(); 
            gameOver();           
        }else{
            divElement.textContent = playerSymbol2;
            divElement.disabled = true;
            divElement.classList.add('boxClicked');
            
            // divElement.style.background = "Green";
            console.log("condition : "+parseInt(counter % 2)+" counter : "+ (counter++));
            CheckWin();
            gameOver();
        }
        document.querySelector('#playerx').classList.toggle('active');
        document.querySelector('#playero').classList.toggle('active');
    }
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
    document.querySelector('#playerx').classList.remove('active');
    document.querySelector('#playero').classList.add('active');
    clearBox();
    counter = 0;
}

function gameOver(){
    // gameState = false;
    if(counter == 9 && IsWin == false){
        status.style.display = "block";
        status.innerText = "GAME OVER.. YOU NEED TO RESTART AGAIN!";
    }
}
function IsGameWon(PlayerWonName){
    gameState = false;
    if(IsWin && !gameState){
        status.style.display = "block";
        //!Cannot assign message value to status feild 
        status.innerText = PlayerWonName;
        if(PlayerWonName === playerXname+" won"){
            console.log(playerXname);
            document.querySelector('#playerXscore').textContent = (++playerX);
        }else if(PlayerWonName === playerOname+" won"){
            // console.log(++playerO);
            document.querySelector('#playerOscore').textContent = (++playerO);

        }
        console.log(PlayerWonName);

        //? disabing all the buttons
        clearBox();
    }
}


//! code to get all the buttons and store all of them inside the boxID array and
//! this will be used for checking who is the real winner among the two players
for(let i = 1; i<=9; i++ ){
    data = document.querySelector("#box"+i);
    boxId.push(data);
}

function CheckWin(){

    // ! First Row
    if((boxId[0].textContent == playerSymbol1 && boxId[1].textContent == playerSymbol1 && boxId[2].textContent == playerSymbol1 )){
        IsWin = true;
        PlayerWon = playerXname+" won";
        IsGameWon(PlayerWon);        
        document.querySelector('#playerx').textContent = "PLAYER X : "+(++playerX);
        

    }else if((boxId[0].textContent == playerSymbol2 && boxId[1].textContent == playerSymbol2 && boxId[2].textContent == playerSymbol2 )){
        IsWin = true;
        PlayerWon = playerOname+" won";
        IsGameWon(PlayerWon);
    }
    //!second Row
    if((boxId[3].textContent == playerSymbol1 && boxId[4].textContent == playerSymbol1 && boxId[5].textContent == playerSymbol1 )){
        IsWin = true;
        PlayerWon = playerXname+" won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[3].textContent == playerSymbol2 && boxId[4].textContent == playerSymbol2 && boxId[5].textContent == playerSymbol2 )){
        IsWin = true;
        PlayerWon = playerOname+" won";
        IsGameWon(PlayerWon);
    }

    //! last Row
    if((boxId[6].textContent == playerSymbol1 && boxId[7].textContent == playerSymbol1 && boxId[8].textContent == playerSymbol1 )){
        IsWin = true;
        PlayerWon = playerXname+" won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[6].textContent == playerSymbol2 && boxId[7].textContent == playerSymbol2 && boxId[8].textContent == playerSymbol2 )){
        IsWin = true;
        PlayerWon = playerOname+" won";
        IsGameWon(PlayerWon);
    }

    //! diagonal one
    if((boxId[0].textContent == playerSymbol1 && boxId[4].textContent == playerSymbol1 && boxId[8].textContent == playerSymbol1 )){
        IsWin = true;
        PlayerWon = playerXname+" won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[0].textContent == playerSymbol2 && boxId[4].textContent == playerSymbol2 && boxId[8].textContent == playerSymbol2 )){
        IsWin = true;
        PlayerWon = playerOname+" won";
        IsGameWon(PlayerWon);
    }
    //! diagonal two
    if((boxId[2].textContent == playerSymbol1 && boxId[4].textContent == playerSymbol1 && boxId[6].textContent == playerSymbol1 )){
        IsWin = true;
        PlayerWon = playerXname+" won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[2].textContent == playerSymbol2 && boxId[4].textContent == playerSymbol2 && boxId[6].textContent == playerSymbol2 )){
        IsWin = true;
        PlayerWon = playerOname+" won";
        IsGameWon(PlayerWon);
    }
    //! First Column
    if((boxId[0].textContent == playerSymbol1 && boxId[3].textContent == playerSymbol1 && boxId[6].textContent == playerSymbol1 )){
        IsWin = true;
        PlayerWon = playerXname+" won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[0].textContent == playerSymbol2 && boxId[3].textContent == playerSymbol2 && boxId[6].textContent == playerSymbol2 )){
        IsWin = true;
        PlayerWon = playerOname+" won";
        IsGameWon(PlayerWon);
    }
    //! Second Column
    if((boxId[1].textContent == playerSymbol1 && boxId[4].textContent == playerSymbol1 && boxId[7].textContent == playerSymbol1 )){
        IsWin = true;
        PlayerWon = playerXname+" won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[1].textContent == playerSymbol2 && boxId[4].textContent == playerSymbol2 && boxId[7].textContent == playerSymbol2 )){
        IsWin = true;
        PlayerWon = playerOname+" won";
        IsGameWon(PlayerWon);
    }
    //! Third Column
    if((boxId[2].textContent == playerSymbol1 && boxId[5].textContent == playerSymbol1 && boxId[8].textContent == playerSymbol1 )){
        IsWin = true;
        PlayerWon = playerXname+" won";
        IsGameWon(PlayerWon);
        

    }else if((boxId[2].textContent == playerSymbol2 && boxId[5].textContent == playerSymbol2 && boxId[8].textContent == playerSymbol2 )){
        IsWin = true;
        PlayerWon = playerOname+" won";
        IsGameWon(PlayerWon);
    }
}

