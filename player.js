window.addEventListener("load",init);

var move = 10;
var moveBoard1 = 10;
var count = 100;
function init(){

    screen = document.getElementById("screen");
    screen_bg = document.getElementById("background");
    player = document.getElementById("player");
    board1 = document.getElementById("board1");
    focus = document.getElementById("focus");
    stand = document.getElementById("name");
    hemant = document.getElementById("hemant");
    direction = document.getElementById("direction");
    screen.addEventListener("keydown",check_key);
    screen.addEventListener("keyup",change_image);
    
}

function check_key(){
    key = event.keyCode;
    if(key == 39){
        player.style.transform = 'rotateY(0deg)';
        player.innerHTML = ' <img src="pictures/mariorun.gif" alt="">';
       
        changepos();
    }
    else if(key==37){
        player.style.transform = 'rotateY(180deg)';
        player.innerHTML = ' <img src="pictures/mariorun.gif" alt="">';
        if(count<101){
        changeposback();
        }
    }
}
function change_image(){
    player.innerHTML  = '<img src="pictures/153185578878303419.gif"alt="">';
}
function changeposback(){
     screen_bg.style.transform = 'translateX('+(-move)+"px"+')';
    stand.style.transform = 'translateX('+(-move)+"px"+')';
     hemant.style.transform = 'translateX('+(-move)+"px"+')';
    move = move - 10;
     if(count<=80){
        board1.style.transform = 'translateX('+(-moveBoard1)+"px"+')';
       moveBoard1 = moveBoard1 - 10;
   }
    if(count>80)
         board1.style.visibility = "hidden";
    count++;
}
function changepos(){
    
     screen_bg.style.transform = 'translateX('+(-move)+"px"+')';
     stand.style.transform = 'translateX('+(-move)+"px"+')';
     hemant.style.transform = 'translateX('+(-move)+"px"+')';
     
    if(count<=80){
   board1.style.visibility = "visible";
        board1.style.transform = 'translateX('+(-moveBoard1)+"px"+')';
       moveBoard1 = moveBoard1 + 10;
    }
       move = move + 10;
if(count<101)
    direction.style.visibility = "hidden";
    count--;
}