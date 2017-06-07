export default class Score {
    constructor(score) {
        this._score = score;

        this._size = 21;
        this._width = 40;
        this._height = 20;
        this._x = 20;
        this._y = 20;
    }

    add(num) {
        this._score += num;
    }

    show(p5) {
        p5.fill('#ffa731');
        p5.textSize(this._size);
        p5.text(this._score, this._x, this._y, this._width, this._height);
    }

    getScore() {
        return this._score;
    }
}