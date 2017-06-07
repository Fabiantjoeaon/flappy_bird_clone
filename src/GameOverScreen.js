import Screen from './Screen';
import {$, $$} from './utils/Bling';

export default class GameOverScreen extends Screen {
    constructor(el) {
        super(el);

        this.tryAgainEl = $('.try-again');
        this.tryAgainEl.on('click', () => {
            window.location.reload(false);
        });
    }

    /**
     * @public
     * @param {Integer} score 
     */
    renderScore(score) {
        this.show();
        $('.score').innerText = score;
    }
}