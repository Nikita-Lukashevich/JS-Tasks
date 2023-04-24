// Есть API с информацией о 120 странах мира. URL (запросы на FULL NAME):

// https://restcountries.com

// Получить данные с помощью fetch и сформировать разметку карточек стран (например каждую 10-ю из массива) по ОБРАЗЦУ.

// ВАЖНО: Для разметки используйте сетку bootstrap, шаблоны смотрите ЗДЕСЬ.
const win = document.getElementById('card');
const slice = document.querySelector('.cardLang');


    fetch('https://restcountries.com/v3.1/all')
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


