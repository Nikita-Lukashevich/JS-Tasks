// Задание 2

// Сверстать любую простую страничку и реализовать смену темы.

// В шапке делаем кнопку «Тёмная тема», при нажатии этой кнопки странице присваивается доп. класс (напр. dark-theme) и начинают работать стили тёмной темы. Сама кнопка меняется на «Светлая тема», при нажатии которой доп. класс со страницы удаляется.

const dark = document.querySelector('.darks-theme');
const white = document.querySelector('.white-theme');
const body_class = document.querySelector('body');

if (localStorage.getItem('theme')){
    if(localStorage.getItem('theme') === 'dark'){
        body_class.classList.add('dark-theme');
    }else{
        body_class.classList.remove('dark-theme');
    }
};


dark.addEventListener('click', () => {
    body_class.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
});

white.addEventListener('click', () => {
    body_class.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
});