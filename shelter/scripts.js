const petsButtonBrimary = document.querySelector('.pets__button_primary');
if (petsButtonBrimary) {
   petsButtonBrimary.addEventListener('click', () => {
      window.location.href = 'pages/our-pets.html';
   })
}

const headerLogoPets = document.querySelector('.header__logo-pets');
if (headerLogoPets) {
   headerLogoPets.addEventListener('click', () => {
      window.location.href = '../index.html';
   })
}

const makeFriendLink = document.querySelector('.not-only__button>*[data-goto]');
if (makeFriendLink) {
   makeFriendLink.addEventListener("click", onNavigationLinkClick);
};

function onNavigationLinkClick(e) {
   const navigationLink = e.target;
   if (navigationLink.dataset.goto && document.querySelector(navigationLink.dataset.goto)) {
      const gotoSection = document.querySelector(navigationLink.dataset.goto);
      const gotoSectionValue = gotoSection.getBoundingClientRect().top + scrollY;

      window.scrollTo({
         top: gotoSectionValue,
         behavior: "smooth"
      });
      e.preventDefault();
   }
}
