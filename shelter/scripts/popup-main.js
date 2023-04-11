
const htmlContainer = document.querySelector('html');

const createPopup = () => {
   let div = document.createElement('div');
   div.classList.add('popup-container');
   div.classList.add('popup-container_hidden')
   body.prepend(div);

   const popupContainer = document.querySelector('.popup-container');

   div = document.createElement('div');
   div.classList.add('popup');
   popupContainer.append(div);

   const popup = document.querySelector('.popup');

   div = document.createElement('div');
   div.classList.add('popup-btn');
   popup.append(div);


   div = document.createElement('div');
   div.classList.add('popup-img');
   popup.append(div);

   div = document.createElement('div');
   div.classList.add('popup-content');
   popup.append(div);

   const popupContent = document.querySelector('.popup-content');

   let h3 = document.createElement('h3');
   h3.classList.add('popup-name');
   popupContent.append(h3);

   let h4 = document.createElement('h4');
   h4.classList.add('popup-type');
   popupContent.append(h4);


   let p = document.createElement('p');
   p.classList.add('popup-description');
   popupContent.append(p);

   let ul = document.createElement('ul');
   ul.classList.add('popup-list');
   popupContent.append(ul);

   const popupList = document.querySelector('.popup-list');

   for (let i = 0; i < 4; i++) {
      let li = document.createElement('li');
      li.classList.add('popup-list-item');
      popupList.append(li);
   }
   const popupListItem = document.querySelectorAll('.popup-list-item');

   let span = document.createElement('span');
   span.classList.add('popup-list-item-title');
   popupListItem[0].insertAdjacentHTML('afterbegin', '<span class ="popup-title">Age:</span>');
   popupListItem[1].insertAdjacentHTML('afterbegin', '<span class ="popup-title">Inoculations:</span>');
   popupListItem[2].insertAdjacentHTML('afterbegin', '<span class ="popup-title">Diseases:</span>');
   popupListItem[3].insertAdjacentHTML('afterbegin', '<span class ="popup-title">Parasites:</span>');

}

const showPopup = () => {
   const popupContainer = document.querySelector('.popup-container');
   if (popupContainer) {
      popupContainer.classList.remove('popup-container_hidden')
   }
   const popupBtn = document.querySelector('.popup-btn');
   popupBtn.addEventListener('click', closePopup)


}
window.addEventListener('click', e => {
   const target = e.target;
   if (!target.closest('.popup')) {
      closePopup();
      cleanPopup();

   }

})

const cleanPopup = () => {
   const popupContainer = document.querySelector('.popup-container');
   if (popupContainer) {
      popupContainer.remove();
   }
}

const closePopup = () => {
   body.classList.remove('scroll-hidden');
   htmlContainer.classList.remove('body-scroll-hidden');
   const popupContainer = document.querySelector('.popup-container');
   if (popupContainer) {
      popupContainer.classList.add('popup-container_hidden');
   }
}


//Заполняем popup

async function fillPopup(petName) {
   const popupImg = document.querySelector('.popup-img');
   const popupName = document.querySelector('.popup-name');
   const popupType = document.querySelector('.popup-type');
   const popupDescription = document.querySelector('.popup-description');
   const popupListItem = document.querySelectorAll('.popup-list-item');
   const popupListItemTitle = document.querySelectorAll('.popup-list-item-title');
   console.log(popupListItem)

   let pets = 'scripts/pets.json';
   const res = await fetch(pets);
   const data = await res.json();
   for (let i = 0; i < data.length; i++) {

      if (data[i].name === petName) {
         console.log(data[i].name)
         popupImg.style.backgroundImage = `url(${data[i].img})`;
         popupName.innerText = `${data[i].name}`;
         popupType.innerText = `${data[i].type} - ${data[i].breed}`;
         popupDescription.innerText = `${data[i].description}`;
         popupListItem[0].insertAdjacentHTML('beforeend', `  ${data[i].age}`);
         popupListItem[1].insertAdjacentHTML('beforeend', `  ${data[i].inoculations}`);
         popupListItem[2].insertAdjacentHTML('beforeend', `  ${data[i].diseases}`);
         popupListItem[3].insertAdjacentHTML('beforeend', `  ${data[i].parasites}`);
      }
   }
}


window.addEventListener('click', e => {

   const popupContainer = document.querySelector('.popup-container');
   const target = e.target;
   let petName = target.closest('.slider-card').children[1].innerText;
   if (target.closest('.slider-card')) {
      body.classList.add('scroll-hidden');
      htmlContainer.classList.add('body-scroll-hidden');

      if (!popupContainer) {
         createPopup();
      }
      fillPopup(petName);
      showPopup();
   }
})

//console.log(sliderCard)