// Получили круг
const circle = document.querySelector('.progress__ring-circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
// Счётчик
const counter = document.querySelector('.conscription__counter-number');
// Считаем количество дней до конца призыва
const finish_date = new Date("July 15 2021");
const start_date = new Date("April 1 2021");
let date = Date.now();

let total_time = Math.round((finish_date - start_date) / 1000 / 60 / 60 / 24);
let remaining = Math.round((finish_date - date) / 1000 / 60 / 60 / 24);
// Выводим дни на страницу в счётчик
counter.textContent = "0" + remaining;

let percents = (remaining / total_time) * 100;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

setProgress(percents);

// Меню

const burger = document.querySelector('.header__top-burger');
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.header__menu-close');

burger.onclick = () => {
    if (screen.width < 992) {
        burger.style.display = "none";
        menu.style.display = "block";
    }
};
close.onclick = () => {
    if (screen.width < 992) {
        burger.style.display = "block";
        menu.style.display = "none";
    }
};

// Колокольчик

const bell = document.querySelector('.header__notifications-img');
const bell_counter = document.querySelector('.header__notifications-counter');
const small_menu_counter = document.querySelector('.header__menu-list__counter');

small_menu_counter.textContent = bell_counter.textContent;

if ((bell_counter.textContent).trim() != "") {
    bell.setAttribute('src', "img/header/bell-active.svg");
    bell_counter.style.display = "block";
    small_menu_counter.style.display = "block";
} else if ((bell_counter.textContent).trim() == "") {
    bell.setAttribute('src', "img/header/bell.svg");
    bell_counter.style.display = "none";
    small_menu_counter.style.display = "none";
}

// Слайдер

$('.advantages__slider').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    infinite: false,
    responsive: [
        {
            breakpoint: 568,
            settings: 'unslick'
        }
    ]
});

$(window).resize(function () {
    if (screen.width > 992) {
        burger.style.display = "none";
    } else {
        burger.style.display = "block";
    }
});