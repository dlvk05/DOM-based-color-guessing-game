var numSquares=6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares=3;
    colors = generateRandomColors(numSquares);//generate new colors
    pickedColor = pickColor();//again picking a new goal
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display="none";
        }
        
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    colors = generateRandomColors(numSquares);//generate new colors
    pickedColor = pickColor();//again picking a new goal
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        //adding  colors to squares
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display="block";
    }
});

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);//generate new colors
    pickedColor = pickColor();//again picking a new goal
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        //adding  colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});

for (var i = 0; i < squares.length; i++) {
    //adding  colors to squares
    squares[i].style.backgroundColor = colors[i];
    //click listners for squares
    squares[i].addEventListener("click", function () {
        var clikedColor = this.style.backgroundColor;
        if (clikedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(pickedColor);
            resetButton.textContent = "Play Again"
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.background = color;
}

function pickColor() {
    //Math.random picks a value betwwen 0-1 but not including 1 so it can be .999999..
    //but not one then if we want range from 0-6 we multify it by 6 and add 1
    //which can get us 6.99999.. and we floor it to keep it till 6
    var random = Math.floor(Math.random() * colors.length);//took out +1 in this case
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());//pushing random color in array
    }
    return arr;
}

function randomColor() {
    var red = 0, blue = 0, green = 0;
    red = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    var string = "rgb(" + red + ", " + green + ", " + blue + ")";
    return string;
}