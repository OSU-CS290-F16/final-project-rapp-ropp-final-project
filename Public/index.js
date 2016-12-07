var player = 'x';
var otherPlayer = 'o';
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
            }else if(id=='two' && two == ' '){
                two = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,two);
                changeTurn(player);
            }else if(id=='three' && three == ' '){
                three = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,three);
                changeTurn(player);
            }else if(id=='four' && four == ' '){
                four = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,four);
                changeTurn(player);
            }else if(id=='five' && five == ' '){
                five = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,five);
                changeTurn(player);
            }else if(id=='six' && six == ' '){
                six = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,six);
                changeTurn(player);
            }else if(id=='seven' && seven == ' '){
                seven = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,seven);
                changeTurn(player);
            }else if(id=='eight' && eight == ' '){
                eight = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,eight);
                changeTurn(player);
            }else if(id=='nine' && nine == ' '){
                nine = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,nine);
                changeTurn(player);
            }


}


checkWin = function () { // CHECKS IF X WON
    if (("one" == "four" && "one" == "seven" && ("one" == "x")) || //first column
    ("two" == "five" && "two" == "eight" && ("two" == "x")) || //second column
    ("three" == "six" && "three" == "nine" && ("three" == "x")) || //third column
    ("one" == "two" && "one" == "three" && ("one" == "x")) || //first row
    ("four" == "five" && "four" == "six" && ("four" == "x")) || //second row
    ("seven" == "eight" && "seven" == "nine" && ("seven" == "x")) || //third row
    ("one" == "five" && "one" == "nine" && ("one" == "x")) || //diagonal 1
    ("seven" == "five" && "seven" == "three" && ("seven" == "x")) //diagonal 2
    ) {
        xWin = true;
        winAlert();

    } else { // CHECKS IF O WON
        if (("one" == "four" && "one" == "seven" && ("one" == "o")) || //first column
        ("two" == "five" && "two" == "eight" && ("two" == "o")) || //second column
        ("three" == "six" && "three" == "nine" && ("three" == "o")) || //third column
        ("one" == "two" && "one" == "three" && ("one" == "o")) || //first row
        ("four" == "five" && "four" == "six" && ("four" == "o")) || //second row
        ("seven" == "eight" && "seven" == "nine" && ("seven" == "o")) || //third row
        ("one" == "five" && "one" == "nine" && ("one" == "o")) || //diagonal 1
        ("seven" == "five" && "seven" == "three" && ("seven" == "o")) //diagonal 2
        ) {
            oWin = true;
            winAlert();

        } else { 
            if ((("one" == "x") || ("one" == "o")) && (("two" == "x") || ("two" == "o")) && (("three" == "x") || ("three" == "o")) && (("four" == "x") || ("four" == "o")) && (("five" == "x") || ("five" == "o")) && (("six" == "x") || ("six" == "o")) && (("seven" == "x") || ("seven" == "o")) && (("eight" == "x") || ("eight" == "o")) && (("nine" == "x") || ("nine" == "o"))) {
                alert("It's a tie!");
            }
        }
    }
};

function changeHTML(id,value){

    document.getElementById(id).innerHTML = value;
}



  // Delegate an event listener to <main> to handle clicks on dismiss buttons.
  var box = document.getElementsByClassName('box');
  for (var i = 0; i < box.length; i++) {
	box[i].addEventListener('click', clickSpace)
  }



