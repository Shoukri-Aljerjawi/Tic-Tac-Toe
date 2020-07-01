var game = function () {
  var play1 = true;
  var palyer1 = [];
  var palyer2 = [];
  var winner = "Player X";
  player1Winner = 0;
  player2Winner = 0;
  var winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  clickNumber = 0;
  var winCasesf = winCases;
  //----------------------------------------------------------
  //Start Code !!!

  //console.log(winCasesf);
  //put (X && O ) in the square with Alternate !!
  document.getElementById("turn").innerHTML = "Player O turn";
  if (play1 === true) {
    document.getElementById("turn").innerHTML = "Player X turn";
  }
  var squareNumber = document.getElementsByTagName("td");
  for (var i = 0; i < squareNumber.length; i++) {
    squareNumber[i].addEventListener("click", function () {
      if (
        event.target.innerHTML == "" &&
        event.target.style.background !== "gray"
      ) {
        clickNumber++;
        //For player 1 "X"
        if (play1 === true) {
          event.target.innerHTML = "X";
          play1 = false;
          document.getElementById("turn").innerHTML = "Player O turn";
          for (var i = 0; i < winCasesf.length; i++) {
            for (var j = 0; j < winCasesf[i].length; j++) {
              if (winCasesf[i][j] == event.target.id) {
                winCasesf[i][j] = "X";
                check(winCasesf);
                console.log(clickNumber);
                tie(squareNumber);
              }
            }
          }
          // for player 2 "O"
        } else if (play1 === false) {
          event.target.innerHTML = "O";
          document.getElementById("turn").innerHTML = "Player x turn";
          play1 = true;
          for (var i = 0; i < winCasesf.length; i++) {
            for (var j = 0; j < winCasesf[i].length; j++) {
              if (winCasesf[i][j] == event.target.id) {
                winCasesf[i][j] = "O";
                check(winCasesf);
                console.log(clickNumber);
                tie(squareNumber);
                //console.log(event.target.id);
              }
            }
          }
        }
      }
      console.log(winCasesf);
    });
    document.getElementById("score").innerHTML =
      " Score: Player'X' : " + player1Winner + "  Player 'O' " + player2Winner;
    console.log(player1Winner, player2Winner);
    winner = "Tie";
    console.log(clickNumber);
  }
  //-------------------------------------------------------
  //Check if there is any winner
  function check(winCasesf) {
    for (var i = 0; i < winCasesf.length; i++) {
      if (
        winCasesf[i][0] == winCasesf[i][1] &&
        winCasesf[i][1] == winCasesf[i][2]
      ) {
        if (winCasesf[i][2] == "X") {
          winner = "Player X";
          //layer1Winner++;
        } else if (winCasesf[i][2] == "O") {
          winner = "Player O";
          //player2Winner++;
        }

        gameOver(squareNumber);
      }
    }
  }
  //------------------------------------------------------
  //Tie function

  function tie(squareNumber) {
    if (clickNumber >= 9) {
      for (var i = 0; i < squareNumber.length; i++) {
        squareNumber[i].style.background = "gray";
      }
      //console.log(document.getElementById("label").innerHTML);
      document.getElementById("label").innerHTML =
        "Game Over the winner is " + winner;

      // document.getElementById("score").innerHTML =
      //   " Score: Player 1 'X'  " + player1Winner + "Player 2 'O' " + player2Winner;
      // console.log(player1Winner, player2Winner);
    }
  }

  //------------------------------------------------------
  //End the game with choose the winner
  function gameOver(squareNumber) {
    for (var i = 0; i < squareNumber.length; i++) {
      squareNumber[i].style.background = "gray";
    }
    //console.log(document.getElementById("label").innerHTML);
    document.getElementById("label").innerHTML =
      "Game Over the winner is " + winner;

    // document.getElementById("score").innerHTML =
    //   " Score: Player 1 'X'  " + player1Winner + "Player 2 'O' " + player2Winner;
    // console.log(player1Winner, player2Winner);
  }
  //-------------------------------------------------------
  //Refrsh the Game Without refresh the page
  var refreshBtn = document.getElementById("refresh");
  refreshBtn.addEventListener("click", function () {
    clickNumber = 0;
    for (var i = 0; i < squareNumber.length; i++) {
      squareNumber[i].style.background = "";
      squareNumber[i].innerHTML = "";
    }
    document.getElementById("label").innerHTML = "";
    winCasesf = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    if (winner == "Player X") {
      player1Winner++;
      play1 = true;
    } else if (winner == "Player O") {
      player2Winner++;
      play1 = false;
    } else if (winner == "Tie") {
      player1Winner = player1Winner;
      player2Winner = player2Winner;
    }

    document.getElementById("score").innerHTML =
      " Score: Player'X' : " + player1Winner + "  Player 'O' " + player2Winner;
    console.log(player1Winner, player2Winner);
    console.log(winCasesf);

    // location.reload();
  });
};
game.call();
