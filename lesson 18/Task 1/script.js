// Изучите документацию API эмодзи:

// https://github.com/abourtnik/emojis-world

// В разделе Endpoints найдите, по какому url получить, и изучите ответы:

// случайный эмодзи

// массив всех эмодзи

// эмоджи определенной категории

// 1.1. Добавить в html кнопку "Получить эмодзи дня", под ней пустой див для результата. По нажатию кнопки отправлять запрос за рандомным эмодзи, отобразить его в диве под кнопкой, размером примерно 70px (это можно сделать с помощью CSS-свойства font-size).

// 1.2. Отправить запрос за всеми эмодзи, разместить их на странице по категориям (см. образец ЗДЕСЬ).

// ВАЖНО! Не нужно делать отдельные запросы для категорий, необходимо взять результат из одного общего запроса. Вам может быть удобно использовать конструкцию Switch-Case, почитайте о ней ЗДЕСЬ.

const btn = document.querySelector('button');
const emojis = document.querySelector('.emojis');
const smile = document.querySelector('.smile');
const food = document.querySelector('.food');
const travel = document.querySelector('.travel');

btn.addEventListener('click', async () => {
    try{
        await fetch('https://api.emojisworld.fr/v1/random')
        .then((response) => response.json())
        .then((list) => emojis.append(list.results[0].emoji))
    }catch{
        alert('Error')
    }
})


    fetch('https://api.emojisworld.fr/v1/random?&categories=1,5,6&limit=50')
    .then((response) => response.json())
     .then((list) =>{
    try{
    for (let i = 0; i < list.totals; i++){
        switch (list.results[i].category.id) {
            case 1:
                smile.append(list.results[i].emoji);
              break;
            case 5:
                food.append(list.results[i].emoji);
              break;
            case 6:
                travel.append(list.results[i].emoji);
              break;
          }
    }
}catch{
    alert('Error')
    }
})


 