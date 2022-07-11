import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, prev, next, activeClass, animate, autoPlay) {
        super(container, prev, next, activeClass, animate, autoPlay);
    }

    decorazeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        this.slides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].classList.add('fadeIn');
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        for (let i = 1; i < this.slides.length; i++) {
            if (this.slides[i].tagName !== "BUTTON") {
                this.container.appendChild(this.slides[0]);
                this.decorazeSlides();
                break;
            } else {
                this.container.appendChild(this.slides[i]);
                i--;
            }
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.nextSlide();
        });

        this.prev.addEventListener('click', () => {
            for (let i = this.slides.length - 1; i > 0; i--) {
                if(this.slides[i].tagName !== "BUTTON") {
                    const active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorazeSlides();
                    break; 
                }
            }
            
        });
    }

    goAutoplay() {
        let autoplay = setInterval(() => {
            this.nextSlide();
        }, 3000);

        this.slides[0].parentNode.addEventListener('mouseenter', () => {
            clearInterval(autoplay);
        });

        this.next.addEventListener('mouseenter', () => {
            clearInterval(autoplay);
        });

        this.prev.addEventListener('mouseenter', () => {
            clearInterval(autoplay);
        });
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTriggers();
        this.decorazeSlides();

        if (this.autoPlay) {
            this.goAutoplay();

            this.slides[0].parentNode.addEventListener('mouseleave', () => {
                this.goAutoplay();
            });

            this.next.addEventListener('mouseleave', () => {
                this.goAutoplay();
            });

            this.prev.addEventListener('mouseleave', () => {
                this.goAutoplay();
            });
        }
        } catch(e) {}
    }
}