
const header = document.querySelector('#typing');

let typed = new Typed(header, {
    strings: [
        'Junior Frontend Developer',
        'Problem-Solver',
        'Creative Solutions',
        'Enthusiastic Learner',
    ],
    loop: true,
    typeSpeed: 110,
});

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

window.addEventListener('scroll', function () {
    const desktopNavbar = document.getElementById('desktopNav');
    desktopNavbar.classList.toggle('onscrollNav', window.scrollY > 0);
})