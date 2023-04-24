const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('click', boxHandler);
});

function boxHandler(e) {
    let currentBox = e.target.closest('.box');
    let currentBoxId = currentBox.id;
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle("active");
    if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
    switch(currentBoxId){
      case 'one':
        const divBackCol = document.querySelector('.color-random'); 
        divBackCol.style.backgroundColor = getColorRandom();
        break;
      case 'two':
        const divBackColLinear = document.querySelector('.color-linear'); 
        divBackColLinear.style.background = getColorLinear();
        break;
      case 'three':
        const divBackColRadial = document.querySelector('.color-radial'); 
        divBackColRadial.style.background = getColorRadial();
        break;
    }
  } else {
    currentContent.style.maxHeight = 0;
  }
}

function getColorRandom(){
  const color = `rgb(${Math.round((Math.random()*256))}, ${Math.round((Math.random()*256))}, ${Math.round((Math.random()*256))}) `;
  return color;
}

function getColorLinear(){
  const color = `linear-gradient(${getColorRandom()}0%,${getColorRandom()}50%,${getColorRandom()}51%,${getColorRandom()}100%)`;
  return color;
}

function getColorRadial(){
  const color = `radial-gradient(${getColorRandom()},${getColorRandom()},${getColorRandom()})`;
  return color;
}