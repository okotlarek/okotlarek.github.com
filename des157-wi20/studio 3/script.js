//NEW FUNCTIONALITY: tracks points per turn by adding each rollSum together. Does not add points from the turn if it ends by rolling a 1.

(function(){
    "use strict";

    //DOM elements
    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const score = document.getElementById("score");
    const actionArea = document.getElementById("actions");

    //Variables for game data
    const gameData = {
        dice: ["images/dice-1.png", "images/dice-2.png", "images/dice-3.png", "images/dice-4.png", "images/dice-5.png", "images/dice-6.png"],
        players: ["Player One", "Player Two"],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        turnSum: 0,
        index: 0,
        gameEnd: 29
    }

    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn(){
        gameData.turnSum = 0;
        game.innerHTML = `<h2>Roll the dice, ${gameData.players[gameData.index]}!</h2>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener("click", function(){

            throwDice();

        });
            checkWinningCondition();
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.ceil(Math.random()*6);
        gameData.roll2 = Math.ceil(Math.random()*6);
        game.innerHTML = `<h2>Roll the dice, ${gameData.players[gameData.index]}!</h2>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // if two 1's are rolled...
        if( gameData.rollSum === 2 ){
            game.innerHTML += "<p>Oh snap! Snake eyes!</p>";
            gameData.score[gameData.index] = 0;
            gameData.index ? gameData.index = 0 : gameData.index = 1;
            
            showCurrentScore();
            
            setTimeout(function(){
                setUpTurn();
            }, 2000);
        }
        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            //NEW FUNCTIONALITY: tracks points per turn by adding each rollSum together. Does not add points from the turn if it ends by rolling a 1.
            gameData.score[gameData.index] -= gameData.turnSum;
            gameData.index ? gameData.index = 0 : gameData.index = 1;
            game.innerHTML += `<h2>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</h2>`;

            setTimeout(function(){
                setUpTurn();
            }, 2000);
        }
        // if neither die is a 1...
        else {
            gameData.score[gameData.index] += gameData.rollSum;
            gameData.turnSum += gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener("click", function(){ 
                throwDice();
            });

            document.getElementById('pass').addEventListener("click", function(){
                gameData.index ? gameData.index = 0 : gameData.index = 1;
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} 
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }
        else{  
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<h2>Score: <br> ${gameData.players[0]}:
        ${gameData.score[0]} <br> ${gameData.players[1]}:
        ${gameData.score[1]}</h2>`;
    }

}());