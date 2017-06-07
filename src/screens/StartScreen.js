import Screen from './index';
import {$} from '../utils/Bling';

export default class StartScreen extends Screen {
    constructor(el) {
        super(el);

        this.show();
    }

    getStartButton() {
        return $('.start-button');;
    }
}