// 1. Написать функцию makeCalculator, которая принимает число x и возвращает функцию, которая возвращает произведение x на 2.

// function makeCalculator(x) {
//     const result = function () {
//         return x * 2;
//     };
//     return result;
// };


// let calc = makeCalculator(4);

// console.log(calc());




// 2. Написать функцию makeCounter, которая возвращает функцию, внутри которой увеличивается сохраненный каким-то образом ранее счетчик.

// function makeCounter() {
//     let count = 0;
//     const result = function () {
//         return count++;
//     };
//     return result;
// }
// let counter1 = makeCounter();
// let counter2 = makeCounter();

// console.log(counter1());
// console.log(counter1());

// console.log(counter2());
// console.log(counter2());




// 3. Написать функцию startsWith, которая принимает 2 строки и проверяет, начинается ли первая строка с символов второй строки. Функция возвращает true или false.

// const startWith = (str1, str2) => str1[0] === str2[0];

// console.log(startWith("asd", "awd"));
// console.log(startWith("asd", "qwe"));




// 4* Реализовать функционал модального окошка, которое открывается с затемнением фона при нажатии на кнопку и закрывается по нажатию на кнопку-крестик или на тёмную область вокруг окошка.
// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) HTML, CSS
// Посмотрите видео, как подготовить верстку:https://youtu.be/Zs-DMTCKYlI
// 2) JS
// - Соберите в переменные необходимые элементы: кнопку для открытия окошка, само окошко вместе с фоном, окошко без фона, кнопку закрытия окошка.
// - Повесьте обработчик клика на кнопку открытия - к окошку должен добавляться класс, в котором через CSS задана видимость блока.
// Чтобы добавить класс к DOM-элементу, используется метод *element.classList.add('classname')*
// - Повесьте обработчик клика на кнопку закрытия окошка - при этом должен удаляться класс, который добавляли в предыдущем обработчике.Чтобы удалить класс из DOM-элемента, используется метод *element.classList.remove('classname')*
// - Повесьте обработчик клика на глобальный объект window, чтобы реализовать закрытие окошка по клику на тёмную область. Т.к. эта область является "оболочкой" окошка, мы должны проверить, была ли именно эта область целью клика (не центральная, основная часть окошка, а именно тёмная).
// Для обращения к элементу, на который пришелся клик, можно использовать метод
// *e.target* (e - это параметр функции-обработчика события, и его свойство target точно вказывает на тот элемент, на который кликнул пользователь).

// const model = document.querySelector('.btn');
// const win = document.querySelector('.popup');
// const cont = document.querySelector('.popup-content');
// const clo = document.querySelector('.popup-close');

// model.addEventListener('click', () => { 
//     win.classList.add('opened');
// });

// win.addEventListener('click', (e) => {
//     if(e.target === win || e.target === clo) {
//         win.classList.remove('opened');
//     };
// });