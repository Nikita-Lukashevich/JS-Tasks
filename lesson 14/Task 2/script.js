<<<<<<< HEAD:lesson 9/script.js
const model = document.querySelector('.btn');
const win = document.querySelector('.popup');
const cont = document.querySelector('.popup-content');
const clo = document.querySelector('.popup-close');
const form = document.getElementById('user-data');
const btnhover = document.querySelectorAll('.btnclick')
const clickFoto = document.querySelectorAll('.fotoclick');
const modwindow = document.querySelector('.window-img');
const popupwin = document.querySelector('.bigfoto');
const appendfoto = document.querySelector('.popup-window img');
const close = document.querySelector('.popup-close-img');
const burger_menu = document.querySelector('.burger-menu');
const  menu = document.querySelector('.burger');
const burger_menu_close = document.querySelector('.burger-menu-close');

model.addEventListener('click', () => { 
    win.classList.add('opened');
});

win.addEventListener('click', (e) => {
    if(e.target === win || e.target === clo) {
        win.classList.remove('opened');
    };
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  for (let i = 0; i < btnhover.length; i++) {
    btnhover[i].addEventListener("click", function() {
        btnhover[i].classList.toggle("active");
    });
}

for (let i = 0; i < clickFoto.length; i++) {
    clickFoto[i].addEventListener("click", function() {
        appendfoto.src = clickFoto[i].getAttribute('src');
        modwindow.classList.add('opened');
    });
}

modwindow.addEventListener('click', (e) => {
    switch(e.target) {
        case close:modwindow.classList.remove('opened');
        case modwindow:modwindow.classList.remove('opened');
        case popupwin:modwindow.classList.remove('opened');
    }
});

burger_menu.addEventListener('click', () => {
    burger_menu_close.style.display = 'block';
    menu.style.display = 'block';
});

burger_menu_close.addEventListener('click', () => {
    burger_menu_close.style.display = 'none';
    menu.style.display = 'none';
});


=======
// Задание 2

// Сверстать любую простую страничку и реализовать смену темы.

// В шапке делаем кнопку «Тёмная тема», при нажатии этой кнопки странице присваивается доп. класс (напр. dark-theme) и начинают работать стили тёмной темы. Сама кнопка меняется на «Светлая тема», при нажатии которой доп. класс со страницы удаляется.

// const dark = document.querySelector('.darks-theme');
const white = document.querySelector('.white-theme');
const body_class = document.querySelector('body');

if (localStorage.getItem('theme')){
    if(localStorage.getItem('theme') === 'dark'){
        body_class.classList.add('dark-theme');
        white.innerText = 'Светлая тема';
    }else{
        body_class.classList.remove('dark-theme');
    }
};


// dark.addEventListener('click', () => {
//     body_class.classList.add('dark-theme');
//     localStorage.setItem('theme', 'dark');
// });

white.addEventListener('click', () => {
    if(white.textContent === 'Темная тема'){
        body_class.classList.add('dark-theme');
        white.innerText = 'Светлая тема';
        localStorage.setItem('theme', 'dark');
    }else if (white.textContent === 'Светлая тема'){
        body_class.classList.remove('dark-theme');
        white.innerText = 'Темная тема';
        localStorage.setItem('theme', 'light');
    }
});
>>>>>>> main:lesson 14/Task 2/script.js
