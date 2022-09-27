const hamburger = document.querySelector('.hambrger');
const navlist = document.querySelector('.nav-list');


hamburger.addEventListener('click', () => {

    navlist.classList.toggle('show');

});
