import p5 from 'p5';
import Game from './Game';

export default class RenderHandler {
  constructor(element) {
    this.element = element;

    this.gameInstance = new Game(
      window.innerWidth,
      window.innerHeight
    );
    this.game = this.gameInstance.init;

    this.p5 = new p5(this.game, this.element);
  }
}