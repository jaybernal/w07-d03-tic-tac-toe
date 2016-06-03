window.addEventListener("load", setUpPage);

function setUpPage () {

  document.getElementById("x-score").innerHTML = 0;
  document.getElementById("o-score").innerHTML = 0;

  var tiles = document.getElementsByClassName("board-tile");
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', turns);
  }


  // initialize whatever variables you need and add your event listeners
  // you can (but probably shouldn't) define functions inside this function
}





//Switch player
function turns(){
  if (activePlayer === "X") {
    this.innerHTML = "X";
    this.removeEventListener('click', turns)

  }else {
    this.innerHTML = "O";
    this.removeEventListener('click', turns)
  }
  displayWinner();
  changeActivePlayer();
  displayActivePlayer();

}



//Find active player
var activePlayer = "X";

function changeActivePlayer(){
  if(activePlayer === "X") {
    activePlayer = "O";
  } else { 
    activePlayer = "X";
  }
}

//Display Active Player
function displayActivePlayer(){
  if (activePlayer === "X") {
    document.getElementById("player-x-ready").className = "visible";
  } else {
    document.getElementById("player-x-ready").className = "hidden";
  } 

  if (activePlayer === "O") {
    document.getElementById("player-o-ready").className = "visible";
  } else {
    document.getElementById("player-o-ready").className = "hidden";
  } 
}

//Ways to Win

function displayWinner(){
  var t1_1 = document.getElementById("tile-1-1").innerHTML;
  var t2_1 = document.getElementById("tile-2-1").innerHTML;
  var t3_1 = document.getElementById("tile-3-1").innerHTML;

  var t1_2 = document.getElementById("tile-1-2").innerHTML;
  var t2_2 = document.getElementById("tile-2-2").innerHTML;
  var t3_2 = document.getElementById("tile-3-2").innerHTML;

  var t1_3 = document.getElementById("tile-1-3").innerHTML;
  var t2_3 = document.getElementById("tile-2-3").innerHTML;
  var t3_3 = document.getElementById("tile-3-3").innerHTML;


  if  ((t1_1 === activePlayer && t2_1 === activePlayer && t3_1 === activePlayer) || 
      (t1_2 === activePlayer && t2_2 === activePlayer && t3_2 === activePlayer)  ||
      (t1_3 === activePlayer && t2_3 === activePlayer && t3_3 === activePlayer)  ||

      (t1_1 === activePlayer && t1_2 === activePlayer && t1_3 === activePlayer) || 
      (t2_1 === activePlayer && t2_2 === activePlayer && t2_3 === activePlayer) ||
      (t3_1 === activePlayer && t3_2 === activePlayer && t3_3 === activePlayer) ||

      (t1_1 === activePlayer && t2_2 === activePlayer && t3_3 === activePlayer) || 
      (t1_3 === activePlayer && t2_2 === activePlayer && t3_1 === activePlayer)) {
        alert(activePlayer + " wins");
  };
}