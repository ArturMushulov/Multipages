export default class Slider {
    constructor({
        container = null,
        btns = null,
        prev = null,
        next = null,
        nextBtnSecondPage = null,
        prevBtnSecondPage = null,
        activeClass = '',
        animate,
        autoPlay} = {}) {
            this.container = document.querySelector(container);
             try {this.slides = this.container.children;} catch(e) {}
            this.btns = document.querySelectorAll(btns);
            this.prev = document.querySelector(prev);
            this.next = document.querySelector(next);
            this.nextBtnSecondPage = document.querySelectorAll(nextBtnSecondPage);
            this.prevBtnSecondPage = document.querySelectorAll(prevBtnSecondPage);
            this.activeClass = activeClass;
            this.animate = animate;
            this.autoPlay = autoPlay;
            this.slideIndex = 1;
        }
}