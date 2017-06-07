import bindAll from 'lodash/bindAll';
import Score from './Score';
import Pipe from './Pipe';
import Book from './Book';
import GameOverScreen from './screens/GameOverScreen';
import StartScreen from './screens/StartScreen';
import {$, $$} from './utils/Bling';

export default class Game {
  constructor(w, h) {
    this.w = w;
    this.h = h;

    this._startScreen;
    this._gameOverScree;
    this._isRunning = false;

    this.background = '#adecff';

    this.p;
    this.book;
    this.pipes = [];
    this.score = new Score(0);

    bindAll(this, 'init');
  }

  /**
   * @public
   * @param {Function} p5 
   */
  init(p5) {
    this.p = p5;

    this._processP5Sketch();
  }

  /**
   * @private
   */
  _processP5Sketch() {
    this._handleStart();
    this.p.setup = () => {
        this.p.noLoop();
        this.p.createCanvas(this.w, this.h);
        this.p.textFont('Helvetica');

        this.book = new Book(this.p);
        this.pipes.push(new Pipe(this.p));
    }

    this.p.draw = () => {
        if(this._isRunning) {
            this.p.background(this.background);

            this.book.show();
            this.score.show(this.p);
            this.book.update();

            this._handlePipes();
        }
    }

    this.p.keyPressed = () => {
        if(this.p.key = '')
            console.log('up')
            this.book.up();
    }
  }

  /**
   * @private
   */
  _handleGameOver() {
      setTimeout(() => {
        this.p.noLoop();
        this._gameOverScreen = new GameOverScreen($('.gameover'));
        this._gameOverScreen.renderScore(this.score.getScore());
      }, 10);
  }

  /**
   * @private
   */
  _handleStart() {
    this._startScreen = new StartScreen($('.start'));
    const button = this._startScreen.getStartButton();
    button.on('click', () => {
        this._start();
    });
  }

  _start() {
    this._startScreen.hide();
    this._isRunning = true;
    this.p.loop();
  }

  /**
   * @private
   * @param {Pipe} pipe 
   */
  _detectPipeCollision(pipe) {
    if(pipe.hits(this.book))
        this._handleGameOver();
  }

  /**
   * @private
   */
  _handlePipes() {
    if(this.p.frameCount % 100 == 0) 
        this.pipes.push(new Pipe(this.p));

    for (let i = this.pipes.length-1; i >= 0; i--) {
        this.pipes[i].show();
        this.pipes[i].update();

        this._detectPipeCollision(this.pipes[i]);

        if(this.pipes[i].isPast(this.book)) {
            this.score.add(1);
        }

        if(this.pipes[i].isOffScreen()) {
            this._removePipe(i);
        }
    }
  }

  /**
   * @private
   * @param {Integer} i 
   */
  _removePipe(i) {
    this.pipes.splice(i, 1);
  }
}