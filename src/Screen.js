export default class Screen {
    constructor(screenEl) {
        this.screenEl = screenEl;
    }

    /**
     * @public
     */
    show() {
        this.screenEl.style.display = 'block';
    }
}