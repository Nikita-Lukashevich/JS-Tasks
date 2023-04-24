// Изучить внимательно варианты запросов к API из первого задания (https://restcountries.com/). Посмотрите, как можно получить информацию об одной стране по названию, по коду.

// Получить информацию об одной стране, имеющей соседей, например Испании. Отрисовать ее карточку.

// Затем, внутри ответа (во втором then) отправить дополнительный запрос за информацией о ее соседних странах (информация о соседях есть в объекте страны), отрисовать их карточки рядом или ниже, сделать их более мелкими по размеру, добавить заголовок «Соседняя страна» (см. ПРИМЕР).

const win = document.getElementById('card');
const winall = document.getElementById('cardAll');


    fetch('https://restcountries.com/v3.1/name/spain')
    .then((response) => response.json())
    .then((list) => 
    { try{
        for(let i = 0; i < list.length;i += 10){
            const card = document.createElement('div');
            const flag = document.createElement('img');
            const nameOff = document.createElement('h2');
            const nameConti = document.createElement('h4');
            const people = document.createElement('p');
            const lang = document.createElement('p');
            const cur = document.createElement('p');
            card.className = 'col';
            flag.className = 'cardFlag'
            people.className = 'cardPeople';
            lang.className = 'cardLang';
            flag.src = list[i].flags.svg;
            nameOff.append(list[i].name.official);
            nameConti.append(list[i].continents);
            people.append(`${(list[i].population / 1000000).toFixed(1)} млн`)
            let languages = list[i].languages
            for (let key in languages) {
                if (Object.keys(languages).length === 1){
                    lang.append(languages[key])
                }else{
                    lang.append(`${languages[key]}  `)
                }
            }
            let money = list[i].currencies
            for (let key in money) {
                if (Object.keys(money).length === 1){
                    cur.append(`${money[key].symbol} ${money[key].name}`)
                }else{
                    cur.append(`${money[key].symbol} ${money[key].name} `)
                }
            }
            card.append(flag, nameOff, nameConti, people, lang, cur)
            win.append(card);
        }
    }catch{
        alert('Error')
    }
    })
    const url = new URL('https://restcountries.com/v3.1/alpha');

    url.search = new URLSearchParams({
        codes: 'AND,FRA,GIB,PRT,MAR'
    }).toString()

     fetch(url)
    .then((response) => response.json())
    .then((cont) => 
    { try{
        for(let i = 0; i < cont.length; i++){
            const header = document.createElement('div');
            const card = document.createElement('div');
            const flag = document.createElement('img');
            const nameOff = document.createElement('h2');
            const nameConti = document.createElement('h4');
            const people = document.createElement('p');
            const lang = document.createElement('p');
            const cur = document.createElement('p');
            header.className = 'head';
            card.className = 'col';
            flag.className = 'cardFlag'
            people.className = 'cardPeople';
            lang.className = 'cardLang';
            header.innerText = 'Соседняя страна';
            flag.src = cont[i].flags.svg;
            nameOff.append(cont[i].name.official);
            nameConti.append(cont[i].continents);
            people.append(`${(cont[i].population / 1000000).toFixed(1)} млн`)
            let languages = cont[i].languages
            for (let key in languages) {
                if (Object.keys(languages).length === 1){
                    lang.append(languages[key])
                }else{
                    lang.append(`${languages[key]}  `)
                }
            }
            let money = cont[i].currencies
            for (let key in money) {
                if (Object.keys(money).length === 1){
                    cur.append(`${money[key].symbol} ${money[key].name}`)
                }else{
                    cur.append(`${money[key].symbol} ${money[key].name} `)
                }
            }
            card.append(header, flag, nameOff, nameConti, people, lang, cur)
            winall.append(card);
        }
      }catch{
        alert('Error')
    }
    })


