const inputLeft = document.getElementById('inputLeft');
const inputRight = document.getElementById('inputRight');
const secLeft = document.querySelector('.secLeft');
const secRight = document.querySelector('.secRight');
const btn = document.querySelector('button');

async function f(){
    await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
    .then((response) => response.json())
    .then((list) => {
        for (let key in list) {
            const option = document.createElement("option");
            option.innerText = list[key];
            option.value = key;
            secLeft.append(option);
        }
        for (let key in list) {
            const option = document.createElement("option");
            option.innerText = list[key];
            option.value = key;
            option.className = 'listok';
            secRight.append(option);
        }
    })
}

inputLeft.addEventListener('input', () => {
    let leftValue = Number(inputLeft.value);
    secRight.addEventListener('change', () => {
    let keyCur = secRight.value;
    let apiCur = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/${keyCur}.json`
    fetch(apiCur)
    .then((response) => response.json())
    .then((er) => {
        let apiValue = Object.values(er);
        let sum = apiValue[1] * leftValue;
        inputRight.value = sum.toFixed(2);
        })
    })
})

inputLeft.addEventListener('input', () => {
        let keyCur = secRight.value;
        let apiCur = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/${keyCur}.json`
        fetch(apiCur)
        .then((response) => response.json())
        .then((er) => {
            let leftValue = Number(inputLeft.value);
            let apiValue = Object.values(er);
            let sum = apiValue[1] * leftValue;
            inputRight.value = sum.toFixed(2);
        })
})


function getInputRight(){
    let keyCur = secRight.value;
    let apiCur = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/${keyCur}.json`
    fetch(apiCur)
    .then((response) => response.json())
    .then((er) => {
        inputLeft.addEventListener('input', () => {
            let leftValue = Number(inputLeft.value);
            let apiValue = Object.values(er);
            let sum = apiValue[1] * leftValue;
            inputRight.value = sum.toFixed(2);
        })
    })
}

function changeSelect(){
    let valOne = secLeft.value;
    secLeft.value = secRight.value;
    secRight.value = valOne;
    let keyCur = secRight.value;
    let apiCur = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/${keyCur}.json`
    fetch(apiCur)
    .then((response) => response.json())
    .then((er) => {
            let leftValue = Number(inputLeft.value);
            let apiValue = Object.values(er);
            let sum = apiValue[1] * leftValue;
            inputRight.value = sum.toFixed(2);
    })
}

secRight.addEventListener('change', getInputRight)
btn.addEventListener('click', changeSelect)

f();