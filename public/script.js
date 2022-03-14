eruda.init();

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

points = [
  new Point(),
  new Point(),
  new Point(),
]

let p = new Point();

function Start() {
  Update();
}

function Update() {
  requestAnimationFrame(Update);
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0;i < 100;i++) {
    let rand = Math.floor(Math.random() * points.length);
    p.moveToward(points[rand].x, points[rand].y, 2);
    p.draw("limegreen");
  }
}

function Lerp(start, end, amount) {
  return start+(end-start)*amount;
}

window.onload = () => {
  Start();
}