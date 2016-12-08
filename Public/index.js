

var player = 'X';
var otherPlayer = 'O';
var one = ' ';
var two = ' ';
var three = ' ';
var four = ' ';
var five = ' ';
var six = ' ';
var seven = ' ';
var eight = ' ';
var nine = ' ';

function changeTurn(player){
    var str = "It is "+player+"'s Turn";
    document.getElementById("player").innerHTML = str;
}
function clickSpace(event){

        var clickedElem = event.target;

            var id=clickedElem.id;
            if(id=='one' && one == ' '){
                one = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,one);
                changeTurn(player);
                checkWin();
            }else if(id=='two' && two == ' '){
                two = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,two);
                changeTurn(player);
                checkWin();
            }else if(id=='three' && three == ' '){
                three = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,three);
                changeTurn(player);
                checkWin();
            }else if(id=='four' && four == ' '){
                four = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,four);
                changeTurn(player);
                checkWin();
            }else if(id=='five' && five == ' '){
                five = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,five);
                changeTurn(player);
                checkWin();
            }else if(id=='six' && six == ' '){
                six = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,six);
                changeTurn(player);
                checkWin();
            }else if(id=='seven' && seven == ' '){
                seven = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,seven);
                changeTurn(player);
                checkWin();
            }else if(id=='eight' && eight == ' '){
                eight = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,eight);
                changeTurn(player);
                checkWin();
            }else if(id=='nine' && nine == ' '){
                nine = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,nine);
                changeTurn(player);
                checkWin();
            }


}


checkWin = function () { // CHECKS IF X WON
    if ((one == four && one == seven && (one == "X")) || //first column
    (two == five && two == eight && (two == "X")) || //second column
    (three == six && three == nine && (three == "X")) || //third column
    (one == two && one == three && (one == "X")) || //first row
    (four == five && four == six && (four == "X")) || //second row
    (seven == eight && seven == nine && (seven == "X")) || //third row
    (one == five && one == nine && (one == "X")) || //diagonal 1
    (seven == five && seven == three && (seven == "X")) //diagonal 2
    ) {
        xWin = true;
        oWin = false;
        winAlert();

    } else { // CHECKS IF O WON
        if ((one == four && one == seven && (one == "O")) || //first column
        (two == five && two == eight && (two == "O")) || //second column
        (three == six && three == nine && (three == "O")) || //third column
        (one == two && one == three && (one == "O")) || //first row
        (four == five && four == six && (four == "O")) || //second row
        (seven == eight && seven == nine && (seven == "O")) || //third row
        (one == five && one == nine && (one == "O")) || //diagonal 1
        (seven == five && seven == three && (seven == "O")) //diagonal 2
        ) {
            oWin = true;
            xWin = false;
            winAlert();

        } else {
            //if ((("one" == "x") || ("one" == "o")) && (("two" == "x") || ("two" == "o")) && (("three" == "x") || ("three" == "o")) && (("four" == "x") || ("four" == "o")) && (("five" == "x") || ("five" == "o")) && (("six" == "x") || ("six" == "o")) && (("seven" == "x") || ("seven" == "o")) && (("eight" == "x") || ("eight" == "o")) && (("nine" == "x") || ("nine" == "o"))) {
            if(one != " " && two != " " && three != " " && four != " " && five != " " && six != " " && seven != " " && eight != " " && nine != " "){
                alert("It's a tie!");
                createNewResult('tie');
            }
        }
    }
};

function newGame(event){
    player = 'X';
    otherPlayer = 'O';
    one = ' ';
    two = ' ';
    three = ' ';
    four = ' ';
    five = ' ';
    six = ' ';
    seven = ' ';
    eight = ' ';
    nine = ' ';
    changeHTML('one' ,one);
    changeHTML('two' ,two);
    changeHTML('three' ,three);
    changeHTML('four' ,four);
    changeHTML('five' ,five);
    changeHTML('six' ,six);
    changeHTML('seven' ,seven);
    changeHTML('eight' ,eight);
    changeHTML('nine' ,nine);
    changeTurn(player);
}

function winAlert(){
    if(xWin){
        alert("X Wins!!!!!!!");
        createNewResult('x');
    }else if(oWin){
        alert("O Wins!!!!!!!")
        createNewResult('o');
    }
}
function changeHTML(id,value){

    document.getElementById(id).innerHTML = value;
}

function createNewResult(result){
    var mark;

  if(result=='x'){
    mark="X Won!";
  }else if(result=='o'){
    mark="O Won!";
  }else if(result=='tie'){
    mark="You Tied.";
  }


  var winner = document.getElementById('winner-list');
  var node=document.createElement('li');
  var textnode=document.createTextNode(mark);
  node.appendChild(textnode);
  winner.appendChild(node);



}

  // Delegate an event listener to <main> to handle clicks on dismiss buttons.
  var box = document.getElementsByClassName('box');
  for (var i = 0; i < box.length; i++) {
	box[i].addEventListener('click', clickSpace)
  }

  var daButton = document.getElementsByClassName('new-game');
  for (var i =0; i < daButton.length; i++) {
    daButton[i].addEventListener('click', newGame)
  }

