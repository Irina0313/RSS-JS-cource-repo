const screenWidth = window.screen.width;


const getCardsAmount = () => {

   if (screenWidth > 1197) {
      return 3;
   }
   if (screenWidth > 755 && screenWidth < 1198) {
      return 2;
   }
   if (screenWidth < 756) {
      return 1;
   }
}
let cardsAmount = getCardsAmount();

const firstCard = [];
const secondCard = [];
const thirdCard = [];

const pastArr = [];
const currArr = [];
const nextArr = [];

let array = [];

const getRamdomNum = () => {
   return Math.floor(Math.random() * 8);
}

//функция получения нового массива (newArr) с контролем уникальности значения в baseArr
const getArray = (newArr, baseArr) => {
   ///3 карточки
   if (cardsAmount === 3) {

      const createArr = () => {
         let num = getRamdomNum(8)
         if (!newArr.includes(num) && !baseArr.includes(num) && newArr.length < 3) {
            newArr.push(num);
            if (newArr.length < 3) {
               createArr();
            } else {
               return newArr;
            }
         } else {
            createArr();
         }
      }

      createArr();
   }
   ///2 катрочки
   if (cardsAmount === 2) {

      const createArr = () => {
         let num = getRamdomNum(8)
         if (!newArr.includes(num) && !baseArr.includes(num) && newArr.length < 2) {
            newArr.push(num);
            if (newArr.length < 2) {
               createArr();
            } else {
               return newArr;
            }
         } else {
            createArr();
         }
      }

      createArr();
   }


   /// 1 карточка
   if (cardsAmount === 1) {
      //console.log(pastArr, currArr, nextArr)
      const createArr = () => {
         let num = getRamdomNum(8)
         //if (!baseArr.includes(num) && !pastArr.includes(num)) {
         if (!baseArr.includes(num)) {
            newArr.push(num);
            return newArr;
         } else {
            createArr();
         }
      }
      createArr();
   }
}






//функция обнуления значения массива
const cleanArray = (array) => {
   array.splice(0, array.length);
}

// функция для перемещения из одного массива в другой с обнулением первого массива 
const moveArrOneToArrTwo = (arrOne, arrTwo) => {
   arrOne.forEach((item, i, array) => {
      arrTwo.push(item);
   })
   cleanArray(arrOne);
}



//\\\\\\\\\\\\\\ Инициализация \\\\\\\\\\\\\\ 

function init() {
   //генерируем массив nextArr;
   getArray(nextArr, currArr);
   //console.log('1', pastArr, currArr, nextArr)
   //перемещаем значения из массива nextArr (попутно его обнуляя) в массив currArr;
   moveArrOneToArrTwo(nextArr, currArr);
   //  console.log(pastArr, currArr, nextArr)
   //генерируем массив nextArr (помним про проверку на наличие значений в currArr);
   getArray(nextArr, currArr);
   // console.log(pastArr, currArr, nextArr)
   //перемещаем значения из массива currArr (попутно его обнуляя) в массив pastArr;
   moveArrOneToArrTwo(currArr, pastArr);
   //  console.log(pastArr, currArr, nextArr)
   //перемещаем значения из массива nextArr (попутно его обнуляя) в массив currArr;
   moveArrOneToArrTwo(nextArr, currArr);
   // console.log(pastArr, currArr, nextArr)
   //генерируем массив nextArr (помним про проверку на наличие значений в currArr);
   getArray(nextArr, currArr);
   // console.log(pastArr, currArr, nextArr)
}

init();

//\\\\\\\\\\\\\\ Прокрутка вправо \\\\\\\\\\\\\\ 

function forward() {
   //обнуляем массив pastArr;
   cleanArray(pastArr);

   //перемещаем значения из массива currArr (попутно его обнуляя) в массив pastArr;
   moveArrOneToArrTwo(currArr, pastArr);

   // перемещаем значения из массива nextArr (попутно его обнуляя) в массив currArr;
   moveArrOneToArrTwo(nextArr, currArr);

   //генерируем массив nextArr (помним про проверку на наличие значений в currArr).
   getArray(nextArr, currArr);

}



//\\\\\\\\\\\\\\ Смена направления назад \\\\\\\\\\\\\\

function changeToBackward() {
   //меняем местами значения в массивах pastArr и currArr;

   moveArrOneToArrTwo(currArr, pastArr);
   pastArr.forEach((item, i, array) => {
      if (i < pastArr.length / 2) {
         currArr.push(item);
      }
   })
   pastArr.splice(0, pastArr.length / 2)

   //обнуляем значеничия массива nextArr;
   cleanArray(nextArr);

   //генерируем массив nextArr (помним про проверку на наличие значений в currArr)
   getArray(nextArr, currArr);

}


//\\\\\\\\\\\\\\ Прокрутка влево \\\\\\\\\\\\\\ 
function backward() {
   //обнуляем массив nextArr;
   cleanArray(nextArr);

   //перемещаем значения из массива currArr (попутно его обнуляя) в массив nextArr;
   moveArrOneToArrTwo(currArr, nextArr);

   // перемещаем значения из массива pastArr (попутно его обнуляя) в массив currArr;
   moveArrOneToArrTwo(pastArr, currArr);

   //генерируем массив pastArr (помним про проверку на наличие значений в currArr).
   getArray(pastArr, currArr);

}


//\\\\\\\\\\\\\\ Смена направления вперед \\\\\\\\\\\\\\

function changeToForward() {
   //меняем местами значения в массивах nextArr и currArr;
   moveArrOneToArrTwo(currArr, nextArr);
   nextArr.forEach((item, i, array) => {
      if (i < nextArr.length / 2) {
         currArr.push(item);
      }
   })
   nextArr.splice(0, nextArr.length / 2)

   //обнуляем значеничия массива pastArr;
   cleanArray(pastArr);

   //генерируем массив pastArr (помним про проверку на наличие значений в currArr)
   getArray(pastArr, currArr);

}


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Генерация html
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




const sliderContainer = document.querySelectorAll('.pets__slider-container');
const sliderContainerNext = document.querySelector('.pets__slider-container_next');
const sliderContainerCurr = document.querySelector('.pets__slider-container_curr');
const sliderContainerPrev = document.querySelector('.pets__slider-container_prev');

//функция генерирования карточек слайдера


const createSliderCard = (cardsAmount) => {
   for (let i = 0; i < cardsAmount; i++) {
      let div = document.createElement('div');
      div.classList.add('slider-card');
      sliderContainerCurr.append(div);
   }
   const sliderCard = document.querySelectorAll('.slider-card');
   for (let i = 0; i < cardsAmount; i++) {
      div = document.createElement('div');
      div.classList.add('slider-card__image');
      sliderCard[i].append(div);

      div = document.createElement('div');
      div.classList.add('slider-card__text');
      sliderCard[i].append(div);

      let button = document.createElement('button');
      button.classList.add('button');
      button.classList.add('button_secondary');
      button.classList.add('slider-card__button');
      button.innerText = 'Learn\u00A0more';
      sliderCard[i].append(button);
   }
}


const createSliderCardNext = (cardsAmount) => {
   for (let i = 0; i < cardsAmount; i++) {
      let div = document.createElement('div');
      div.classList.add('slider-card');
      sliderContainerNext.append(div);
   }
   const sliderCard = document.querySelectorAll('.slider-card');
   for (let i = 0; i < cardsAmount; i++) {
      div = document.createElement('div');
      div.classList.add('slider-card__image');
      sliderCard[i].append(div);

      div = document.createElement('div');
      div.classList.add('slider-card__text');
      sliderCard[i].append(div);

      let button = document.createElement('button');
      button.classList.add('button');
      button.classList.add('button_secondary');
      button.classList.add('slider-card__button');
      button.innerText = 'Learn\u00A0more';
      sliderCard[i].append(button);
   }
}
createSliderCardNext(3);
createSliderCard(3);
const createSliderCardPrev = (cardsAmount) => {
   for (let i = 0; i < cardsAmount; i++) {
      let div = document.createElement('div');
      div.classList.add('slider-card');
      sliderContainerPrev.append(div);
   }
   const sliderCard = document.querySelectorAll('.slider-card');
   for (let i = 0; i < cardsAmount; i++) {
      div = document.createElement('div');
      div.classList.add('slider-card__image');
      sliderCard[i].append(div);

      div = document.createElement('div');
      div.classList.add('slider-card__text');
      sliderCard[i].append(div);

      let button = document.createElement('button');
      button.classList.add('button');
      button.classList.add('button_secondary');
      button.classList.add('slider-card__button');
      button.innerText = 'Learn\u00A0more';
      sliderCard[i].append(button);
   }

}
createSliderCardPrev(3);


const sliderCardImage = document.querySelectorAll('.slider-card__image');
const sliderCardText = document.querySelectorAll('.slider-card__text');

async function getPet() {
   let pets = 'scripts/pets.json';
   const res = await fetch(pets);
   const data = await res.json();
   //console.log(sliderCardText.length)
   console.log(pastArr, currArr, nextArr)
   if (currArr.length === 3) {
      for (let i = 0; i < 3; i++) {
         console.log(i, currArr, data[currArr[i]].name)
         sliderCardText[3 + i].innerText = `${data[currArr[i]].name}`;
         sliderCardImage[3 + i].style.backgroundImage = `url(${data[currArr[i]].img})`;
      }
   }
   if (currArr.length === 2) {
      for (let i = 0; i < 2; i++) {
         console.log(i, currArr, data[currArr[i]].name)
         sliderCardText[3 + i].innerText = `${data[currArr[i]].name}`;
         sliderCardImage[3 + i].style.backgroundImage = `url(${data[currArr[i]].img})`;
      }
   }
   if (currArr.length === 1) {
      for (let i = 0; i < 1; i++) {
         // console.log(i, currArr, data[currArr[i]].name)
         sliderCardText[3 + i].innerText = `${data[currArr[i]].name}`;
         sliderCardImage[3 + i].style.backgroundImage = `url(${data[currArr[i]].img})`;
      }
   }


};
getPet();


/*async function getPetPrev() {
   let pets = 'scripts/pets.json';
   const res = await fetch(pets);
   const data = await res.json();

   for (let i = 0; i < sliderCardText.length / 3; i++) {

      sliderCardText[i].innerText = `${data[currArr[i]].name}`;
      sliderCardImage[i].style.backgroundImage = `url(${data[currArr[i]].img})`;

   }

};*/
/*async function getPetNext() {
   let pets = 'scripts/pets.json';
   const res = await fetch(pets);
   const data = await res.json();

   for (let i = 0; i < sliderCardText.length / 3; i++) {

      sliderCardText[i + 6].innerText = `${data[currArr[i]].name}`;
      sliderCardImage[i + 6].style.backgroundImage = `url(${data[currArr[i]].img})`;

   }

};*/

const sliderBtnRight = document.querySelector('.slider-btn_right');
const sliderBtnLeft = document.querySelector('.slider-btn_left');
const carusel = document.querySelector('.carusel');
let direction = ['0'];

// кнопки

sliderBtnRight.addEventListener('click', () => {
   carusel.classList.add('transition-right');
   console.log(direction[0])
   if (direction[0] === '0' || direction[0] === 'right') {
      forward();
      getPet();
   }
   if (direction[0] === 'left') {
      changeToBackward();
      //changeToForward();
      //backward();
      getPet();
   }
   direction.shift();
   direction.push('right');
})

sliderBtnLeft.addEventListener('click', () => {
   carusel.classList.add('transition-left');
   console.log(direction[0])
   if (direction[0] === '0' || direction[0] === 'left') {
      backward();
      // forward();
      getPet();
   }
   if (direction[0] === 'right') {
      // changeToForward();
      changeToBackward();
      //forward();
      getPet();
   }
   direction.shift();
   direction.push('left');

})

carusel.addEventListener('animationend', () => {
   carusel.classList.remove('transition-left');
   carusel.classList.remove('transition-right');

})

window.addEventListener('resize', (e) => {
   let numberOfCards = currArr.length;
   if (screenWidth > 1197 && numberOfCards != 3) {
      init();
   }
   if (screenWidth > 755 && screenWidth < 1198 && numberOfCards != 2) {
      init()
      if (screenWidth < 756 && numberOfCards != 1) {
         init();
      }
   }
})
