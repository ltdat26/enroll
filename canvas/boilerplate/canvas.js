// import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

let touch = 0;

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

addEventListener('click', () => {
  init();
})

//Function
function randomColor() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// Objects
class Circle {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

// Implementation
let circle1;
let circle2;
let circle3;
let circle4;
let circle5;
function init() {
  circle1 = new Circle(450, 450, 100, randomColor());
  circle2 = new Circle(0, 0, 30, randomColor());
  circle3 = new Circle(360, 330, 40, randomColor());
  circle4 = new Circle(450, 300, 40, randomColor());
  circle5 = new Circle(540, 330, 40, randomColor());

  touch = 0;

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  circle1.update();
  circle2.x = mouse.x;
  circle2.y = mouse.y;
  circle2.update();
  let distanceCircle = getDistance(circle1.x, circle1.y, circle2.x, circle2.y);

  if (distanceCircle < circle1.radius + circle2.radius) {
    circle1.color = circle2.color;
    circle3.update();
    circle4.update();
    circle5.update();
  }

  // objects.forEach(object => {
  //  object.update()
  // })
}

init()
animate()
