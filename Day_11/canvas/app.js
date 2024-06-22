
let canvas = document.querySelector('canvas');

let brush = canvas.getContext('2d'); 

brush.fillStyle = "blue";
// brush.fillRect(10,20,100, 200); // x y h w

brush.strokeStyle = "green";
brush.strokeRect(10,20,200, 100);

//path
// brush.beginPath()
// brush.beginPath();

// brush.moveTo(10,10);

// brush.lineTo(100,100);

// brush.lineTo(100,200);
// brush.stroke();

// triangle 
brush.beginPath();
brush.moveTo(100 , 100);
brush.lineTo(150 , 200);
brush.lineTo(150 , 150);
brush.lineTo(100 , 100);
brush.stroke();
brush.fill();
brush.closePath();

//drawing text

brush.font = "28px sans-sarif";
brush.fillText('Aryan Jain' , 200 , 400)




