const burger = document.querySelector('.burger');

const headerNavigationContainer = document.querySelector('.header__navigation');
const navigation = document.querySelector('.navigation');
const navigationContainer = document.querySelector('.navigation-container');
const body = document.querySelector('body');






burger.addEventListener('click', (e) => {
   console.log(e.target)
   if (burger.classList.contains('burger_active')) {
      closeBurgerMenu();
   } else {
      openBurgerMenu();
   }

})

const openBurgerMenu = () => {

   headerNavigationContainer.classList.add('header__navigation_burger');
   navigation.classList.add('navigation__burger-active');
   navigationContainer.classList.add('navigation-container_active');
   body.classList.add('scroll-hidden-burger');
   body.classList.add('scroll-hidden-burger');
   burger.classList.remove('burger_unactive')
   burger.classList.add('burger_active')



   /*window.addEventListener('click', e => {
      const target = e.target;
      if (!target.closest('.navigation-container') && !target.closest('.burger')) {
         closeBurgerMenu();
      }
      if (target.closest('.navigation__link') && !target.closest('.burger')) {
         closeBurgerMenu();
      }

   })*/

}
const closeBurgerMenu = () => {
   burger.classList.remove('burger_active');
   headerNavigationContainer.classList.remove('header__navigation_burger');
   navigation.classList.remove('navigation__burger-active');
   navigationContainer.classList.remove('navigation-container_active');
   body.classList.remove('scroll-hidden-burger');
}

//Прокрутка при клике
const navigationLinks = document.querySelectorAll('.navigation__link>*[data-goto]');
if (navigationLinks.length > 0) {
   navigationLinks.forEach(navigationLink => {
      navigationLink.addEventListener("click", onNavigationLinkClick);
   });

   function onNavigationLinkClick(e) {
      const navigationLink = e.target;
      if (navigationLink.dataset.goto && document.querySelector(navigationLink.dataset.goto)) {
         const gotoSection = document.querySelector(navigationLink.dataset.goto);

         /*if (window.scrollY) {
            window.scroll(0, 0);
         }*/
         const gotoSectionValue = gotoSection.getBoundingClientRect().top + scrollY * 10;
         console.log(gotoSectionValue)
         // const gotoSectionValue = gotoSection.getBoundingClientRect().top + scrollY + scrollY + scrollY + scrollY;

         /*if (burger.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            burger.classList.remove('_active');
            headerNavigation.classList.remove('_active');
         }*/
         closeBurgerMenu();
         window.scrollTo({
            top: gotoSectionValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}