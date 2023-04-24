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
