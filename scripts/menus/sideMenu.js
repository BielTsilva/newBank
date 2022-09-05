const CHECKINPUT = document.getElementById('checkInput');
const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('button');

CHECKINPUT.addEventListener('click', check);
BUTTON.addEventListener('click', closeOptions);
MENU.addEventListener('mouseleave', closeOptions);

function check(){
        MENU.classList.add('menuOn');
        MENU.classList.remove('menuOff');
}

function closeOptions(){
    MENU.classList.add('menuOff');
}