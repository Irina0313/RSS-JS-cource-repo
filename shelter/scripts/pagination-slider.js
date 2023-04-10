//\\\\\\\\\\\\Генерация "зерна"\\\\\\\\\\\\

//Получаем рандомное число 
const getRamdomNum = (number) => {
   return Math.floor(Math.random() * number);
}

//Собираем массив из 8 уникальных рандомных чисел

const arrayEightNum = [getRamdomNum(8)];
const getArray = () => {

   let num = getRamdomNum(8);
   if (!arrayEightNum.includes(num) && arrayEightNum.length < 8) {
      arrayEightNum.push(num);
      if (arrayEightNum.length < 8) {
         getArray();
      }
   } else if (arrayEightNum.includes(num) && arrayEightNum.length < 8) {
      getArray();
   }
}


//\\\\\\\\\\\\Нарезка "зерна"\\\\\\\\\\\\

//Делим массив на 3 субмассива

let subArrayOne = [];
let subArrayTwo = [];
let subArrayThree = [];

const divideArrayEightNum = () => {
   subArrayOne = subArrayOne.concat(arrayEightNum.slice(0, 3));
   subArrayTwo = subArrayTwo.concat(arrayEightNum.slice(3, 6));
   subArrayThree = subArrayThree.concat(arrayEightNum.slice(6, 8));
}
//\\\\\\\\\\\\Модификация "суб-зерна"\\\\\\\\\\\\

const arrayThreeNum = [];

//создаем массив-модификатор
const getArrayModificator = () => {

   let num = getRamdomNum(3);
   if (!arrayThreeNum.includes(num) && arrayThreeNum.length < 3) {
      arrayThreeNum.push(num);
      if (arrayThreeNum.length < 3) {
         getArrayModificator();
      }
   } else if (arrayThreeNum.includes(num) && arrayThreeNum.length < 3) {
      getArrayModificator();
   }
}

//модифицируем массив

const getModifiedArray = (arr) => {
   arrayThreeNum.splice(0, arrayThreeNum.length - 1);
   getArrayModificator();
   let modifiedArray = [];
   arrayThreeNum.forEach(item => {
      modifiedArray.push(arr[item]);
   })
   return modifiedArray;
}


//\\\\\\\\\\\\Финальная сборка.\\\\\\\\\\\\
let targetArray = [];
const getTargetArray = (arr1, arr2, arr3) => {
   for (let i = 0; i <= 5; i++) {
      targetArray = targetArray.concat(getModifiedArray(subArrayOne));
      targetArray = targetArray.concat(getModifiedArray(subArrayTwo));
      targetArray = targetArray.concat(subArrayThree);

   }

}
//getTargetArray(subArrayOne, subArrayTwo, subArrayThree);


//следим за размером окна и получаем требуемое кооличество страниц по условию при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц
let numberOfPages = 0;
const getPages = () => {

   const width = document.body.clientWidth;
   if (width > 768) {
      numberOfPages = 6;
   }
   if (width <= 768 && width > 320) {
      numberOfPages = 8;
   }
   if (width <= 320) {
      numberOfPages = 16;
   }
   getPagesObject(numberOfPages);
   return numberOfPages;
}

//создаем набор страниц
let pages = [];
const getPagesObject = (num) => {
   pages.splice(0, pages.length - 1);
   let pageNum = 0;
   for (let i = 0; i < targetArray.length; i += (targetArray.length / num)) {
      pageNum += 1;
      pages.push({
         'page-number': pageNum,
         'pets-numbers': targetArray.slice(i, i + (targetArray.length / num))
      });
   }
   return pages;
}

//Получаем и отображаем номер страницы
const paginator = document.querySelector('.slider-btn_paginator-active');
let pageNumber = 0;
const getPageNumber = () => {
   if (pageNumber === 0) {
      pageNumber += 1;
      paginator.innerText = pageNumber;
   } else {
      return pageNumber;
   }


}

const setNextPageNumber = () => {
   pageNumber += 1;
   paginator.innerText = pageNumber;
}

const setPrevPageNumber = () => {
   pageNumber -= 1;
   paginator.innerText = pageNumber;
}

const setFirstPageNumber = () => {
   pageNumber = 1;
   paginator.innerText = pageNumber;
}

const setLastPageNumber = () => {
   pageNumber = numberOfPages;
   paginator.innerText = pageNumber;
}


const nextPageBtn = document.querySelector('.next-page-btn');
const prevPageBtn = document.querySelector('.prev-page-btn');
const firstPageBtn = document.querySelector('.first-page-btn');
const lastPageBtn = document.querySelector('.last-page-btn');

const cleanSliderCards = () => {
   const ourFriendsContent = document.querySelector('.our-friends__content');
   while (ourFriendsContent.firstChild) {
      ourFriendsContent.removeChild(ourFriendsContent.firstChild);
   }
}



window.onload = function () {
   //Генерируем зерно, делим его, модифицируем части, генерируем конечный массив из 48 карточек

   getArray();
   divideArrayEightNum();
   getTargetArray(subArrayOne, subArrayTwo, subArrayThree);
   getPages();

   // получаем номер страницы и показываем на странице
   getPageNumber();


   //отрисовка HTML
   const createSliderCards = () => {

      getPages();

      const ourFriendsContent = document.querySelector('.our-friends__content');
      let cardsAmount = targetArray.length / numberOfPages;
      for (let i = 0; i < cardsAmount; i++) {
         let div = document.createElement('div');
         div.classList.add('slider-card');
         ourFriendsContent.append(div);
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
   createSliderCards();
   const sliderCardImage = document.querySelectorAll('.slider-card__image');
   const sliderCardText = document.querySelectorAll('.slider-card__text');


   async function getPet() {
      const sliderCardImage = document.querySelectorAll('.slider-card__image');
      const sliderCardText = document.querySelectorAll('.slider-card__text');
      getPages();
      let cardsAmount = targetArray.length / numberOfPages;
      getPageNumber();
      let pets = '../scripts/pets.json';
      const res = await fetch(pets);
      const data = await res.json();

      for (let i = 0; i < cardsAmount; i++) {
         sliderCardText[i].innerText = `${data[pages[pageNumber - 1]['pets-numbers'][i]].name}`;
         sliderCardImage[i].style.backgroundImage = `url(../${data[pages[pageNumber - 1]['pets-numbers'][i]].img})`;
      }
   };

   getPet();

   nextPageBtn.addEventListener('click', () => {
      getPageNumber();
      if (pageNumber < numberOfPages) {
         setNextPageNumber();
         getPet();
      }
      if (pageNumber != 1) {
         prevPageBtn.classList.remove('slider-btn_inactive');
         firstPageBtn.classList.remove('slider-btn_inactive');
      }
      if (pageNumber === numberOfPages) {
         nextPageBtn.classList.add('slider-btn_inactive');
         lastPageBtn.classList.add('slider-btn_inactive');
      }

   })



   prevPageBtn.addEventListener('click', () => {
      getPageNumber();
      if (pageNumber != 1) {
         setPrevPageNumber();
         getPet();
      }
      if (pageNumber != numberOfPages) {
         nextPageBtn.classList.remove('slider-btn_inactive');
         lastPageBtn.classList.remove('slider-btn_inactive');
      }
      if (pageNumber === 1) {
         prevPageBtn.classList.add('slider-btn_inactive');
         firstPageBtn.classList.add('slider-btn_inactive');
      }

   })

   lastPageBtn.addEventListener('click', () => {
      setLastPageNumber();
      getPet();

      prevPageBtn.classList.remove('slider-btn_inactive');
      firstPageBtn.classList.remove('slider-btn_inactive');

      nextPageBtn.classList.add('slider-btn_inactive');
      lastPageBtn.classList.add('slider-btn_inactive');
   })

   firstPageBtn.addEventListener('click', () => {
      setFirstPageNumber();
      getPet();

      prevPageBtn.classList.add('slider-btn_inactive');
      firstPageBtn.classList.add('slider-btn_inactive');

      nextPageBtn.classList.remove('slider-btn_inactive');
      lastPageBtn.classList.remove('slider-btn_inactive');
   })


   window.addEventListener('resize', (e) => {


      const width = document.body.clientWidth;
      if (width > 768) {
         numberOfPages = 6;
      }
      if (width < 769 && width > 320) {
         numberOfPages = 8;
      }
      if (width < 321) {
         numberOfPages = 16;
      }
      const sliderCard = document.querySelectorAll('.slider-card')
      if (targetArray.length / numberOfPages != sliderCard.length) {
         cleanSliderCards();
         createSliderCards();
         getPet();
      }

      if (Number(paginator.innerText) < numberOfPages) {
         nextPageBtn.classList.remove('slider-btn_inactive');
         lastPageBtn.classList.remove('slider-btn_inactive');
      }

      if (Number(paginator.innerText) > numberOfPages) {
         setLastPageNumber();
         nextPageBtn.classList.add('slider-btn_inactive');
         lastPageBtn.classList.add('slider-btn_inactive');
      }
   });
}

