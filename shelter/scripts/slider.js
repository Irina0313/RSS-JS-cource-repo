const screenWidth = window.screen.width;

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

   if (baseArr.length === 0) {
      let set = new Set([getRamdomNum(), getRamdomNum(), getRamdomNum()]);
      if (set.size < 3) {
         getArray(newArr, baseArr);
      }
      set.forEach(item => {
         newArr.push(item);
      })
   } else {
      let num = getRamdomNum();
      if (!baseArr.includes(num) && !newArr.includes(num)) {
         newArr.push(num);

      } else {
         getArray(newArr, baseArr);
      }
      if (newArr.length < 3) {
         getArray(newArr, baseArr);
      }
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

   //перемещаем значения из массива nextArr (попутно его обнуляя) в массив currArr;
   moveArrOneToArrTwo(nextArr, currArr);

   //генерируем массив nextArr (помним про проверку на наличие значений в currArr);
   getArray(nextArr, currArr);

   //перемещаем значения из массива currArr (попутно его обнуляя) в массив pastArr;
   moveArrOneToArrTwo(currArr, pastArr);

   //перемещаем значения из массива nextArr (попутно его обнуляя) в массив currArr;
   moveArrOneToArrTwo(nextArr, currArr);

   //генерируем массив nextArr (помним про проверку на наличие значений в currArr);
   getArray(nextArr, currArr);
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

/*const getCardsAmount = () => {
   let cardsAmount = 3;
   /*if (screenWidth > 1197) {
      cardsAmount = 3;
   }
   if (screenWidth > 755 && screenWidth < 1198) {
      cardsAmount = 2;
   }
   if (screenWidth < 756) {
      cardsAmount = 1;
   }
   return cardsAmount;
}*/
let cardsAmount = 3;


const sliderContainer = document.querySelector('.pets__slider-container');

//функция генерирования карточек слайдера


const createSliderCard = (cardsAmount) => {
   for (let i = 0; i < cardsAmount; i++) {
      let div = document.createElement('div');
      div.classList.add('slider-card');
      sliderContainer.append(div);

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
createSliderCard(cardsAmount);

const sliderCardImage = document.querySelectorAll('.slider-card__image');
const sliderCardText = document.querySelectorAll('.slider-card__text');

async function getPet() {
   let pets = 'scripts/pets.json';
   const res = await fetch(pets);
   const data = await res.json();

   for (let i = 0; i < sliderCardText.length; i++) {
      sliderCardText[i].innerText = `${data[currArr[i]].name}`;
      sliderCardImage[i].style.backgroundImage = `url(${data[currArr[i]].img})`;

   }

};

getPet();

const sliderBtnRight = document.querySelector('.slider-btn_right');
const sliderBtnLeft = document.querySelector('.slider-btn_left');

let direction = [];

sliderBtnRight.addEventListener('click', () => {
   if (direction[0] === '' || direction[0] === 'right') {
      forward();
      getPet();
   }
   if (direction[0] === 'left') {
      changeToForward();
      getPet();
   }
   direction.shift();
   direction.push('right');

})

sliderBtnLeft.addEventListener('click', () => {
   if (direction[0] === '' || direction[0] === 'left') {
      backward();
      getPet();
   }
   if (direction[0] === 'right') {
      changeToBackward();
      getPet();
   }
   direction.shift();
   direction.push('left');

})




