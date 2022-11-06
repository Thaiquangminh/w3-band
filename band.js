const modal = document.querySelector('.over-lay');
const closeBtns = document.querySelectorAll('.js-close-btn');
const buyBtns = document.querySelectorAll('.js-buyticket-btn');
const notCloseArea = document.querySelector('.js-notclose');
// const closeClickWrapper = document.querySelector

const showTicketBuy = () => {
    modal.classList.add('open');
};

const hideTicketBuy = () => {
    modal.classList.remove('open');
};

[...buyBtns].map((button) => {
    button.addEventListener('click', showTicketBuy);
});

[...closeBtns].map((button) => {
    button.addEventListener('click', hideTicketBuy);
});
modal.addEventListener('click', hideTicketBuy);
notCloseArea.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Show and hide navbar

const addClassHeader = document.querySelector('.header');
const addClassNav = document.querySelector('.bar');
const menuButton = document.querySelector('.header-mobile-menu');
const hideMenu = document.querySelectorAll('.mobile-display');
let stateBarColumn = false;

const navBarRow = () => {
    addClassHeader.classList.remove('showhideNav');
    addClassNav.classList.remove('bar-column');

    [...hideMenu].map((item) => {
        item.classList.add('none');
    });
    stateBarColumn = false;
};

const navBarColumn = () => {
    addClassHeader.classList.add('showhideNav');
    addClassNav.classList.add('bar-column');
    [...hideMenu].map((item) => {
        item.classList.remove('none');
    });
    stateBarColumn = true;
};

const showAndHideNav = () => {
    if (stateBarColumn == false) {
        navBarColumn();
    } else if (stateBarColumn == true) {
        navBarRow();
    }
};
menuButton.addEventListener('click', showAndHideNav);

// Close navbar when click a

const menuItems = document.querySelectorAll('.bar li a[href*="#"]');
[...menuItems].map((item) => {
    item.onclick = () => {
        navBarRow();
    };
});

// Close navbar when click other area (mobile)
var header = document.querySelector('.header');
var mainClearNav = document.querySelector('.main');
header.addEventListener('click', (e) => {
    e.stopPropagation();
});
mainClearNav.addEventListener('click', navBarRow);

// Close subnavbar when click other area (web)
// var clearSubNav = document.querySelector('.sub-nav');
// clearSubNav.addEventListener('click', (clearSubNav.style.display = 'none'));

//  Click More btn will show subnav

// let mediaQuery = window.matchMedia('(max-width: 740px)');
// if (mediaQuery.matches) {
//     openSubNav();
// } else {
// }

const openSubNav = () => {
    let moreBtnOpen = false;
    const moreBtn = document.querySelector('.more-btn');
    const subNav = document.querySelector('.sub-bar');
    moreBtn.onclick = () => {
        if (moreBtnOpen === false) {
            subNav.style.display = 'block';
            moreBtnOpen = true;
        } else if (moreBtnOpen === true) {
            subNav.style.display = 'none';
            moreBtnOpen = false;
        }
    };
};

openSubNav();
