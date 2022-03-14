class Point {
  constructor(x, y) {
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
  }
  moveToward(x, y, fraction) {
    this.x = Lerp(this.x, x, 1/fraction);
    this.y = Lerp(this.y, y, 1/fraction);
  }
  draw(color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 1, 0, Math.PI*2);
    ctx.fill();
  }
}