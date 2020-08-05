const burgerButton = document.querySelector('.header__burger');
const closeButton = document.querySelector('.header__close');
const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.logo');

function onBurgerButtonClick() {
    burgerButton.classList.add('close');
    logo.classList.add('close');
    closeButton.classList.remove('close');
    navigation.classList.remove('close');
}

function onCloseButtonClick() {
    logo.classList.remove('close');
    burgerButton.classList.remove('close');
    closeButton.classList.add('close');
    navigation.classList.add('close');
}

burgerButton.addEventListener('click', onBurgerButtonClick);
closeButton.addEventListener('click', onCloseButtonClick);
