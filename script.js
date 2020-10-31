
// ------------variables declarations-------------
var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetbtn = document.getElementById("reset");
var p1display = document.querySelector("#p1display");
var p2display = document.getElementById("p2display");
var numinput = document.querySelector("input");
var pchange = document.querySelector("#pch");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;
var hover = document.getElementById("lasth2");

// -----------p1button click function------------
p1button.addEventListener('click', function(){
    if (!gameover) {
    p1score++;
    if (p1score === winningscore) {
        gameover = true;
        p1display.classList.add("winner");
        }
    p1display.textContent = p1score;
    }
});


// -----------p2button click function------------
p2button.addEventListener('click', function(){
    if (!gameover) {
    p2score++;
    if (p2score === winningscore) {
        gameover = true;
        p2display.classList.add("winner");
        }
    p2display.textContent = p2score;
    }
    
});


// -----------resetbutton click function------------
resetbtn.addEventListener('click', function(){
   reset();
});

function reset(){
    p1score = 0; 
    p2score = 0; 
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner")
    p2display.classList.remove("winner")
    gameover = false;
    
}
numinput.addEventListener('change', function(){
    pchange.textContent = this.value;
    winningscore = Number(this.value);
    reset();
});

hover.addEventListener('mouseover', function(){
    hover.textContent = "Don't hover over me";
});
hover.addEventListener('mouseout', function(){
    hover.textContent = "HoverTest";
});