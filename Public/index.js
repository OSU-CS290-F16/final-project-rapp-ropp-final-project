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
function clickSpace(event){

        var clickedElem = event.target;

            var id=clickedElem.id;
            if(id=='one' && one == ' '){
                one = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                changeHTML(id,one);
            }else if(id=='two' && two == ' '){
                two = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                 changeHTML(id,two);
            }else if(id=='three' && three == ' '){
                three = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                 changeHTML(id,three);
            }else if(id=='four' && four == ' '){
                four = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                 changeHTML(id,four);
            }else if(id=='five' && five == ' '){
                five = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                 changeHTML(id,five);
            }else if(id=='six' && six == ' '){
                six = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                 changeHTML(id,six);
            }else if(id=='seven' && seven == ' '){
                seven = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                 changeHTML(id,seven);
            }else if(id=='eight' && eight == ' '){
                eight = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                 changeHTML(id,eight);
            }else if(id=='nine' && nine == ' '){
                nine = player;
                var temp = player;
                player = otherPlayer;
                otherPlayer = temp;
                 changeHTML(id,nine);
            }


}

function changeHTML(id,value){
    console.log(id);
    console.log(value);
    document.getElementById(id).innerHTML = value;
}



  // Delegate an event listener to <main> to handle clicks on dismiss buttons.
  var box = document.getElementsByClassName('box');
  for (var i = 0; i < box.length; i++) {
	box[i].addEventListener('click', clickSpace)
  }



