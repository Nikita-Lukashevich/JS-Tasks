// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com/users.

// Вывести имена пользователей на страницу на боковой панели, как вертикальное меню.

// В основной части (справа от бокового меню) изначально показывается информация о первом пользователе.

// При клике на имя пользователя на боковой панели -  в основной части информация меняется на выбранного пользователя.

// Для оформления использовать Bootstrap компонент Card:

// - для списка пользователей - шаблон Links and buttons - вариант с кнопками

// https://getbootstrap.com/docs/5.1/components/card/#list-groups

// - для отображения информации о пользователе - шаблон карточки без изображения.

// Нужно отобразить имя, ник, место проживания, компанию и email (как ссылку вида mailto:)

// ПРИМЕР, как должно получиться.

const win = document.getElementById('card');
const title = document.querySelector('.card-title');
const cardtitle = document.querySelector('.card-title');
const cardsubtitle = document.querySelector('.card-subtitle');
const cardtext = document.querySelector('.card-text');
const cardcompany = document.querySelector('.card-company');
const cardlink = document.querySelector('.card-link');

async function f() {
await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((list) => {
        for(let i = 0; i < list.length; i++){
            const liname = document.createElement('li');
            liname.id = `${i}`;
            liname.className = 'list-group-item';
            liname.append(list[i].name);
            win.append(liname)
        }
    })
    const nameList = document.querySelectorAll('.list-group-item');

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((list) =>{
    nameList.forEach(function(li){
        li.addEventListener('click', function(){
            let activ_li = li;
            let li_id = activ_li.getAttribute('id');
            cardtitle.innerText = list[li_id].name
            cardsubtitle.innerText = list[li_id].username
            cardtext.innerText = `Street: ${list[li_id].address.street}, Suite: ${list[li_id].address.suite}, City: ${list[li_id].address.city}, Zipcode:${list[li_id].address.zipcode}`
            cardcompany.innerText = list[li_id].company.name
            cardlink.href = `mailto:${list[li_id].website}`
            })
        })
    })
}

f();

  
