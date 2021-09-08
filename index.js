
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("transform");
});

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
