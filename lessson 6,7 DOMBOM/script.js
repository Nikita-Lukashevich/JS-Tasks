// 1. Повторите поведение страницы по данному образцу. Координаты должны меняться и зависеть от положения курсора мыши на в области

// document.onclick = function(elem) {
//     redSquare.innerHTML = `X:${elem.clientX} Y:${elem.clientY}`;
// };




// 2. Повторите поведение страницы по данному образцу. При нажатии на область, красный квадрат его верхний левый угол доложен поместиться в ту координату, на которую вы нажали

// document.onclick = function(elem) {
//     redSquare.style.left = elem.clientX + 'px';
//     redSquare.style.top = elem.clientY + 'px';
// };

// 3. По аналогии со вторым заданием сделайте чтобы центр квадрата помещался в координату области

// document.onclick = function(elem) {
//     redSquare.style.left = (elem.clientX - (redSquare.clientWidth / 2)) + 'px';
//     redSquare.style.top = (elem.clientY - (redSquare.clientHeight / 2)) + 'px';
// };




// 4. Создайте инпут который будет выводить код последнего элемента введенного в инпут 



// let input = document.querySelector('input');

// input.addEventListener('keyup', (event) => {
//     document.querySelector(".task4").innerHTML = `Код нажатой клавиши : ${event.keyCode}`
// });




// 5. Создайте инпут который будет выводить последний элемент введенный в инпут 

// let input = document.querySelector('input');

// input.addEventListener('keyup', (event) => {
//     document.querySelector(".task5").innerHTML = `Код нажатой клавиши : ${event.key}`
// });




// 6. Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl.


// let circle = document.querySelector('.redCircle');

// circle.addEventListener('click', (event) =>{ 
//     if (event.ctrlKey) {
//         circle.style.background = 'red';
//     };
// });




// 7. Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'.

// let circle = document.querySelector('.redCircle');
// let list = ''

// circle.addEventListener('click', (event) =>{ 
//     if (event.ctrlKey) {
//         list += '1, ';
//     }else if(event.altKey){
//         list += '2, ';
//     }else if(event.shiftKey){
//         list += '3, ';
//     };
//     document.querySelector(".task7").innerHTML = `Список : ${list}`
// });




// 8. Создайте кнопку и элемент. При нажатии на кнопку, будет скрываться элемент

// let btn = document.querySelector('button');
// let circle = document.querySelector('.redCircle');

// btn.addEventListener('click', () =>{ 
//         circle.style.display = 'none';
// });

// 9. Создайте раскрывающееся меню

let menu = document.querySelector('.menu');
let clickMenu = menu.querySelector('p');

clickMenu.addEventListener('click', () =>{ 
    menu.classList.toggle('open');
});
