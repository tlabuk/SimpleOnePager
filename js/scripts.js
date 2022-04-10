'use strict';

// Menu hamburgerowe jest przechowywane w stałej odwołującej się do klasy w css
const hamburger = document.querySelector('.top .material-icons');

const close = document.querySelector('nav .material-icons');

const nav = document.querySelector('nav');

// Dodajemy nasluchiwacz zdarzen mamy tu dwa argumenty: zdarzenie (event) i callback
// Jako zdarzenie mozemy zamiast 'click' dodac 'mouseenter' albo 'mouseover', który odpowiada hover w css i mouseleave
hamburger.addEventListener('click', () => {

// przez .style przypisujemy nowy styl, który pojawi się w efekcie kliknięcia
// nav.style.display = 'block';

    nav.classList.add('display-block');

});

close.addEventListener('click', () => {

// nav.style.display = 'none';
    nav.classList.remove('display-block');

});