// По данному url расположена задача:

// *https://jsonplaceholder.typicode.com/todos/1*

// В html предусмотреть <div></div>Достать с сервера заголовок задачи и отобразить его в div.
// const divTitle = document.querySelector('.title')

// let httpDiv = new XMLHttpRequest();

// httpDiv.onload = function () {
//     let title = JSON.parse(httpDiv.responseText);
//     divTitle.append(title.title);
// };

// httpDiv.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// httpDiv.send();



// Запросом на сервер по url *https://jsonplaceholder.typicode.com/todos* достать задачи.

// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.

// const ulTask2 = document.querySelector('.task_2')

// let httpDiv = new XMLHttpRequest();

// httpDiv.onload = function () {
//     let title = JSON.parse(httpDiv.responseText);
//     for(let i = 0; i < 20; i++){
//         let li = document.createElement('li');
//         li.innerHTML = title[i].title;
//         ulTask2.append(li);
//     }
// };

// httpDiv.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// httpDiv.send();



// Отобразить на странице 10 первых комментариев с сервера *https://jsonplaceholder.typicode.com/comments*

// Оформить тегами как в [ПРИМЕРЕ](https://ucarecdn.com/f9cf39fd-9f6d-409f-8dd4-51e416480bdc/ScreenshotatNov30170836.png).

// Порядок работы:

// 1) записать в переменную блок для отрисовки результата.

// 2) описать функцию отрисовки результата (напр. addInfo). Функция принимает 3 параметра - тег, содержимое и название класса для CSS. Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу.

// 3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse). Записать этот результат в переменную, т.к. с ним будем дальше работать.

// 4) внутри функции .onload:

// - обойти через цикл первые 10 элементов массива

// - вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.

// 5) прописать CSS для классов.

// const result = document.querySelector('.result');

// let httpDiv = new XMLHttpRequest();

// httpDiv.onload = function () {
//     let title = JSON.parse(httpDiv.responseText);
//     for(let i = 0; i < 10; i++){
//         let h3 = document.createElement('h3');
//         let email = document.createElement('p');
//         let body = document.createElement('p');
//         h3.className = 'name';
//         email.className = 'email';
//         body.className = 'body';
//         h3.innerHTML = (title[i].name);
//         email.innerText =(title[i].email);
//         body.innerText = (title[i].body);
//         result.append(h3, email, body);
//     }
// };

// httpDiv.open('GET', 'https://jsonplaceholder.typicode.com/comments');
// httpDiv.send();




// Создать собственный погодный виджет на основе данных с сервера погоды.

// Оформить, как в примере: [ЗДЕСЬ](https://ucarecdn.com/f15529fb-d05d-47bd-b617-c517db0611f2/weather2.png).

// Документация: [https://openweathermap.org/api...](https://openweathermap.org/api/hourly-forecast)

// *Порядок работы:*

// 1) Проверить, работает ли API-ключ, данный в примере. Для этого открыть url [https://api.openweathermap.org...](https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247)

// Если данные отображаются - можно не получать свой ключ, иначе см. п. 1.1.

// 1.1. Зарегистрироваться и получить собственный API-ключ на сайте [https://home.openweathermap.or...](https://home.openweathermap.org/)

// 2) Создать html-css разметку под данные.

// - общий блок для виджета, внутри него два блока - для текущей погоды и для прогноза (пример см. [ЗДЕСЬ](https://ucarecdn.com/477e6959-b37e-4555-a81c-3b707858b199/layout.png))

// - внутри нижней части виджета через js будут добавляться строки по дням - это дивы, им нужно сразу прописать стили (flex-распределение вставляемых элементов, нижняя граница).

// 3) Написать JS с HTTP-запросом на url.

// - кастомизировать url запроса: указать нужный город, добавить в url параметр отображения градусов по Цельсию (см. на странице документации раздел *Units of measurement*)

// 4) добавить информацию из ответа в виджет на страницу.

// - в верхней части виджета отобразить город и дату (из полученного JSON-объекта).

// Возможно, текущую дату проще получить из встроенной функции Date, примеры работы с ней [ЗДЕСЬ](https://itchief.ru/javascript/date).

// - из JSON-объекта "достать" текущую погоду (.list[0]) - первый объект внутри массива.

// Как узнать url иконки: [https://openweathermap.org/wea...](https://openweathermap.org/weather-conditions#How-to-get-icon-URL)

// - в нижней части добавить необходимую информацию через цикл. Вам понадобится каждый 8-й объект, т.к в ответе приходит погода на каждые 3 часа (8 раз в сутки), а нам нужна погода 1 раз в сутки.

// const country = document.querySelector('.country');
// const time = document.querySelector('.time');
// const temImg = document.querySelector('.temImg');
// const main = document.querySelector('.main');
// const celsius = document.querySelector('.celsius');
// const speed = document.getElementById('speed');
// const forecast = document.querySelector('.forecast');

// let httpDiv = new XMLHttpRequest();

// httpDiv.onload = function () {
//     let title = JSON.parse(httpDiv.responseText);
//     for(let i = 7; i < 40; i += 8){
//         let dateTemp = document.createElement('div');
//         let date = document.createElement('p');
//         let image = document.createElement('img');
//         let tempCelsius = document.createElement('p');
//         date.className = 'date';
//         tempCelsius.className = 'tempCelsius';
//         date.innerHTML = (title.list[i].dt_txt);
//         let temp2 = String(title.list[i].main.temp);
//         tempCelsius.innerText = (`${temp2.split('.')[0]} \xB0С`);
//         forecast.append(dateTemp);
//         image.src = `https://openweathermap.org/img/wn/${title.list[i].weather[0].icon}@2x.png`;
//         dateTemp.append(date, image, tempCelsius);
//     };
//     const timeNow =new Date().toLocaleTimeString().slice(0,-3);
//     country.append(title.city.name);
//     time.append(timeNow);
//     temImg.src = `https://openweathermap.org/img/wn/${title.list[0].weather[0].icon}@2x.png`;
//     main.append(title.list[0].weather[0].main);
//     let temp = String(title.list[0].main.temp);
//     celsius.append(`${temp.split('.')[0]} \xB0С`);
//     speed.append(`${title.list[0].wind.speed} m/s`);
// };

// httpDiv.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric');
// httpDiv.send();

