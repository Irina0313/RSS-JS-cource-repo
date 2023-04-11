const burger = document.querySelector('.burger');
const headerNavigationContainer = document.querySelector('.header__navigation');
const navigation = document.querySelector('.navigation');
const navigationContainer = document.querySelector('.navigation-container');
const body = document.querySelector('body');


burger.addEventListener('click', () => {
   if (burger.classList.contains('burger_active')) {
      closeBurgerMenu();
   } else {
      openBurgerMenu();
   }

})

const openBurgerMenu = () => {
   burger.classList.add('burger_active');
   headerNavigationContainer.classList.add('header__navigation_burger');
   navigation.classList.add('navigation__burger-active');
   navigationContainer.classList.add('navigation-container_active');
   body.classList.add('scroll-hidden');


   window.addEventListener('click', e => {
      const target = e.target;
      if (!target.closest('.navigation-container') && !target.closest('.burger')) {
         closeBurgerMenu();
      }
      if (target.closest('.navigation__link') && !target.closest('.burger')) {
         closeBurgerMenu();
      }

   })

}
const closeBurgerMenu = () => {
   burger.classList.remove('burger_active');
   headerNavigationContainer.classList.remove('header__navigation_burger');
   navigation.classList.remove('navigation__burger-active');
   navigationContainer.classList.remove('navigation-container_active');
   body.classList.remove('scroll-hidden');
}

