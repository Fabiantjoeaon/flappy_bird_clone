export default class Pipe {
  constructor(p) {
    this.p = p;
    this.top = this.p.random(this.p.height/2);
    this.bottom = this.p.random(this.p.height/2);
    this.x = this.p.width;
    this.w = 50;
    this.speed = 4;

    this.highlight = false;
  }

  /**
   * @public
   * @param {Book} book 
   */
  hits(book) {
    if (book.y < this.top || book.y > this.p.height - this.bottom) {
      if (book.x > this.x && book.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  /**
   * @public
   */
  show() {
    this.p.noStroke();
    this.p.fill(3, 202, 23);

    if (this.highlight) 
      this.p.fill(255, 0, 0);
    
    this.p.rect(this.x, 0, this.w, this.top);
    this.p.rect(this.x, this.p.height-this.bottom, this.w, this.bottom);
  }

  /**
   * @public
   */
  update() {
    this.x -= this.speed;
  }

  /**
   * @public
   */
  isOffScreen() {
    return this.x < -this.w;
  }

  /**
   * @public
   * @param {Book} book 
   */
  isPast(book) {
    if(!this.hits(book)) 
      return this.x < book.x;
  }
}
