import bindAll from 'lodash/bindAll';
import Score from './Score';
import Pipe from './Pipe';
import Book from './Book';

export default class Game {
  constructor(w, h) {
    this.w = w;
    this.h = h;

    this.background = '#adecff';

    this.p;
    this.book;
    this.pipes = [];
    this.score = new Score(0);

    bindAll(this, 'init');
  }

  init(p5) {
    this.p = p5;

    this.processSketch();
  }

  processSketch() {
    this.p.setup = () => {
        this.p.createCanvas(this.w, this.h);
        this.p.textFont('Helvetica');

        this.book = new Book(this.p);
        this.pipes.push(new Pipe(this.p));
    }

    this.p.draw = () => {
        this.p.background(this.background);

        this.book.show();
        this.score.show(this.p);
        this.book.update();

        this.handlePipes();
    }

    this.p.keyPressed = () => {
        if(this.p.key = '')
            console.log('efhueh')
            this.book.up();
    }
  }

  showGameOverScreen() {
      this.p.noLoop();
  }

  detectPipeCollision(pipe) {
    if(pipe.hits(this.book))
        this.showGameOverScreen(null);
  }

  handlePipes() {
    if(this.p.frameCount % 100 == 0) 
        this.pipes.push(new Pipe(this.p));

    for (let i = this.pipes.length-1; i >= 0; i--) {
        this.pipes[i].show();
        this.pipes[i].update();

        this.detectPipeCollision(this.pipes[i]);

        if(this.pipes[i].isPast(this.book)) {
            this.score.add(1);
        }

        if(this.pipes[i].isOffScreen()) {
            this.removePipe(i);
        }
    }
  }

  removePipe(i) {
    this.pipes.splice(i, 1);
  }
}