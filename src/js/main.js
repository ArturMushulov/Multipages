import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";

import Form from "./modules/form";
import Difference from "./modules/difference";
import VideoPlayer from "./modules/videoPlayer";
import ShowInfo from "./modules/showInfo";
import Download from "./modules/download";

document.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        btns: '.next', 
        container: '.page'
    });
    slider.render();

    const modulePageSlider = new MainSlider({
        btns: '.next', 
        container: '.moduleapp',
        nextBtnSecondPage: '.nextmodule',
        prevBtnSecondPage: '.prevmodule'
    });
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true,
        autoPlay: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoPlay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();
    
    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Form('.form').init();

    new ShowInfo('.plus').init();

    new Download('.download').init();
});