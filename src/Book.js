export default class Book {
  constructor(p) {
    this.p = p;
    this.y = this.p.height/2;
    this.x = 64;

    this.gravity = 0.8;
    this.lift = -15;
    this.velocity = 0;
  }

  show() {
    this.p.noStroke();
    this.p.fill(255);
    this.p.ellipse(this.x, this.y, 32, 32);
  }

  up() {
    this.velocity += this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > this.p.height) {
      this.y = this.p.height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}