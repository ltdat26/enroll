const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const con = canvas.getContext('2d');

// con.fillStyle = 'rgba(255, 0, 0, 0.5)';
// con.fillRect(100, 100, 100, 100);
// con.fillStyle = 'rgba(0, 0, 255, 0.5)';
// con.fillRect(100, 200, 100, 100);
// con.fillStyle = 'rgba(0, 255, 0, 0.5)';
// con.fillRect(100, 300, 100, 100);

// con.beginPath();
// con.moveTo(200, 400);
// con.lineTo(500, 100);
// con.lineTo(600, 400);
// con.strokeStyle = "#005a0f";
// con.lineWidth = 3;
// con.stroke();

// for (let i = 0; i < 50; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     con.beginPath();
//     con.arc(x, y, 30, 0, Math.PI * 2, false);
//     con.strokeStyle = "#" + randomColor;
//     con.lineWidth = 5;
//     con.stroke();
// }

let mouse = {
    x: undefined,
    y: undefined
}

const maxRad = 50;
const minRad = 20;
const lineWidth = 3;
const hoverRad = 30;
const hoverSpeed = 1;
const mountOfCircle = 200;

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
})

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

function Circle(x, y, dx, dy, rad) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.minRad = rad;
    this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);

    this.draw = () => {
        con.beginPath();
        con.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
        con.strokeStyle = this.color;
        con.lineWidth = lineWidth;
        con.fill();
        con.fillStyle = this.color;
        con.stroke();
    }
    this.update = () => {
        if (this.x + this.rad > innerWidth || this.x - this.rad < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.rad > innerHeight || this.y - this.rad < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (mouse.x - this.x < hoverRad
            && mouse.x - this.x > -hoverRad
            && mouse.y - this.y < hoverRad
            && mouse.y - this.y > -hoverRad
        ) {
            if (this.rad < maxRad) {
                this.rad += hoverSpeed;
            }
        } else if (this.rad > this.minRad) {
            this.rad -= hoverSpeed;
        }

        this.draw();
    }
}

let circleArray = [];
for (let i = 0; i < mountOfCircle; i++) {
    let rad = Math.random() * 15 + 5;
    let x = Math.random() * (innerWidth - rad * 2) + rad;
    let y = Math.random() * (innerWidth - rad * 2) + rad;
    let dx = (Math.random() - 0.5 * 2);
    let dy = (Math.random() - 0.5 * 2);
    circleArray.push(new Circle(x, y, dx, dy, rad));
}

function animate() {
    requestAnimationFrame(animate);
    con.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();