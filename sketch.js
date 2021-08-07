var n1,n2;
var b1,b2,b3,b4;
var num1,num2;

function setup() {
  createCanvas(400, 400);

  n1=createInput();
  n1.position(5,60);

  n2=createInput();
  n2.position(200,60);

  b1=createButton("ADD");
  b1.position(10,200);
  b1.mousePressed(add);

  b2=createButton("SUB");
  b2.position(100,200);
  b2.mousePressed(sub);
}

function draw() {
  background(220);
  text("Number 1",70,50);
  text("Number 2",270,50);

  num1=parseInt(n1.value());
  num2=parseInt(n2.value());
}

//Creating Addition Function
function add(){
  console.log(num1+num2);
}

function sub(){
  console.log(num1-num2);
}