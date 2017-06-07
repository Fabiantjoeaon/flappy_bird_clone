import p5 from 'p5';
import Game from './Game';

export default class RenderHandler {
  constructor(element) {
    this.p5;
    this.element = element;

    this.gameInstance = new Game(
      window.innerWidth,
      window.innerHeight
    );
    this.game = this.gameInstance.init;

    this.setup();
  }

  setup() {
    this.p5 = new p5(this.game, this.element);
  }
}