export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }


    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const siblingMSG = btn.closest('.module__info-show').nextElementSibling;

                siblingMSG.classList.toggle('msg');
                siblingMSG.style.marginTop = '20px';
            });
        })
    }
}