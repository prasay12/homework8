// Variables!
var radius = 5;
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var colorPickerInput = document.querySelector("input");
var isDrawing = true;
// I would add more variables for x, y, radius, and color
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth * 0.75;
canvas.height = window.innerHeight * 0.75;
var line_color = "rgb(255, 0, 0)";

//Listeners!!
//Add a listener for loading the window
//Add a listener for the color picker
//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)


//Event listner for color picker
colorPickerInput.addEventListener("input", function () {
  line_color = colorPickerInput.value;
});

//Event listner for drawing on mouseover
canvas.addEventListener("mousemove", function (e) {
  console.log(this);
  console.log(e);
  draw(e);
});

//Event listner for clearning the canvas on resize and set new width and height of canvas
window.addEventListener("resize", function (e) {
	canvas.width = window.innerWidth * 0.75;
    canvas.height = window.innerHeight * 0.75;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//Add a listener for the keydown
document.addEventListener("keydown", function (e) {
  console.log("Key has been pressed");
  console.log(e);
  var key_pressed = e.code;
  switch (key_pressed) {
    case "KeyB":
      line_color = "rgb(0,0,255)";
      break;
    case "KeyG":
      line_color = "rgb(0,128,0)";
      break;
    case "KeyR":
      line_color = "rgb(255, 0, 0)";
      break;
    case "KeyY":
      line_color = "rgb(255,255,0)";
      break;
    case "Space":
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      break;
    case "ArrowUp":
      if (isDrawing) {
        ctx.closePath();
        isDrawing = false;
      }
      break;
    case "ArrowDown":
      if (!isDrawing) {
        isDrawing = true;
      }
      break;
    default:
      break;
  }
});

// Functions!
// I would add a function for draw
function draw(e) {
  console.log("I am going to draw!!");
  //CHECK OUT beginPath()
  if (isDrawing) {
    ctx.beginPath();
    ctx.fillStyle = line_color;
    ctx.arc(e.x, e.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  e.preventDefault();
}

