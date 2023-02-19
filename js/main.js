//Hamburger menu:
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav-list');

const menuToggle = () => {
    navigation.classList.toggle('unfolded');
    hamburger.classList.toggle('color-change');
};

const menuOff = (event) => {
    if (event.target !== hamburger && hamburger.classList.contains('color-change')) {
        navigation.classList.remove('unfolded');
        hamburger.classList.toggle('color-change');
    }
}

hamburger.addEventListener('click', menuToggle);
window.addEventListener('click', menuOff);

//Preparation section showing:
const peaceHeading = document.querySelector('.prep-img-description.peace');
const eyesHeading = document.querySelector('.prep-img-description.eyes');
const lungsHeading = document.querySelector('.prep-img-description.lungs');

const showHeading = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 1384) {
        peaceHeading.style.opacity = 1;
    }
    if (scrollY >= 1550) {
        eyesHeading.style.opacity = 1;
    }
    if (scrollY >= 1680) {
        lungsHeading.style.opacity = 1;
    }
}

window.addEventListener('scroll', showHeading);