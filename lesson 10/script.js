// Задание 2

// 1)

// Задать объект с полем name.

// Задать переменную, которая будет хранить JSON упомянутого объекта.

// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

// let obj = {name: 'nick'};
// let task = JSON.stringify(obj);
// console.log(task)
// let tasktest = JSON.parse(task);
// console.log(tasktest);




// 2)

// Создать переменную user, в которой хранится объект.

// Записать переменную в localStorage.

// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

// let user = {name: 'Nikita', dom: 13, email: 'asdddf'};
// localStorage.test = JSON.stringify(user);
// let newUser = JSON.parse(localStorage.test);
// console.log(newUser);




// Задание 3

// Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.

// const img = document.querySelectorAll('.foto');
// const bg = document.querySelector('body');


// if (localStorage.getItem('bg-img')){
//     bg.style.backgroundImage = `url(${localStorage.getItem('bg-img')})`;
// }else{
//     bg.style.backgroundImage = `url(${img[1].getAttribute('src')})`;
// };

// for (let i = 0; i < img.length; i++) {
//     img[i].addEventListener("click", () => {
//         bg.style.backgroundImage = `url(${img[i].getAttribute('src')})`;
//         localStorage.setItem('bg-img', img[i].getAttribute('src'));
//     });
// }
// console.log(localStorage.getItem('bg-img'))