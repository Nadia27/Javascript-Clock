var canvas = document.getElementById("myClock");

var ctx = canvas.getContext("2d");

console.log(ctx);
ctx.beginPath();

ctx.arc(200, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
