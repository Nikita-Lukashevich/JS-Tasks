// ЗАДАНИЕ 1

// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

// class Test {
//     constructor(children){
//         this.children = children;
//     }
//     go () {
//         console.log(`Я играю с ${this.children} каждый день.`)
//     }
// };

// const son = new Test ('ребеноком'); 
// son.go();



// ЗАДАНИЕ 2

// Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:

// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств

// class Calculator{
//     constructor() {
//         this.firstnum = +prompt('Введите число:');
//         this.secondnum = +prompt('Введите число:');
//     };
//     sum() {
//         console.log(`Сумма = ${this.firstnum + this.secondnum}`);
//     };
//     mul() {
//         console.log(`Произведение = ${this.firstnum * this.secondnum}`);
//     };
// };

// const test = new Calculator();
// test.sum();
// test.mul();




// Задание 3

// Реализовать следующее мини-приложение

// class Logo {
//     constructor(url) {
//       this.top = 0;
//       this.left = 0;
//       this.width = 200;
//       this.imgUrl = url;
//       this.html = null;
//     };

//     init() {
//       const foto = document.createElement('img');
//       foto.src = this.imgUrl;
//       document.body.appendChild(foto);
//       this.html = foto;
//       this.render();
//       document.body.style.backgroundColor = 'black';
//       foto.style.position = `fixed`;
//     };
    
//     render() {
//       this.html.style.top = `${this.top}px`;
//       this.html.style.left = `${this.left}px`;
//       this.html.style.width = `${this.width}px`;
//     };
//     moveUp() {
//       this.top -= 20;
//       this.render();
//     };
//     moveDown() {
//       this.top += 20;
//       this.render();
//     };
//     moveLeft() {
//       this.left -= 20;
//       this.render();
//     };
//     moveRight() {
//       this.left += 20;
//       this.render();
//     };
//   };

//   class Circle extends Logo{
//     constructor(figh, figw, color){
//       super();
//       this.figh = figh;
//       this.figw = figw;
//       this.color = color;
//     };
//     init(){
//       const circle = document.createElement('div');
//       document.body.appendChild(circle);
//       this.html = circle;
//       this.render();
//       circle.style.borderRadius = `50%`;
//       circle.style.backgroundColor = `${this.color}`;
//       circle.style.height = `${this.figh}px`;
//       circle.style.width = `${this.figw}px`;
//     };
// };


//   const imgUrl = 'https://bit.ly/2tcDito';
//   const mfLogotip = new Logo(imgUrl);
//   const circle = new Circle(100, 100, 'yellow');
//   console.log(mfLogotip);

//   mfLogotip.init();
//   circle.init();
  
//   mfLogotip.moveRight();
//   mfLogotip.moveRight();
//   mfLogotip.moveRight();
//   mfLogotip.moveRight();
//   mfLogotip.moveDown();
//   mfLogotip.moveDown();
//   mfLogotip.moveDown();
//   mfLogotip.moveDown();
