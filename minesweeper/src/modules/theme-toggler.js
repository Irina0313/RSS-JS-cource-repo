export function themeToggler() {


  const body = document.querySelector('body');
  body.classList.toggle('body_dark');

  const title = document.querySelector('.main-title');
  title.classList.toggle('main-title_dark');


  const results = document.querySelector('.results');
  results.classList.toggle('results_dark');

  const SwitherName = document.querySelector('.swither-name');
  SwitherName.classList.toggle('swither-name_dark');


  const SwitherSpan = document.querySelector('.swither__span');
  SwitherSpan.classList.toggle('swither__span_dark');

  const level = document.querySelectorAll('.level');
  level.forEach(item => {
    item.classList.toggle('level_dark');
  })

  const custom = document.querySelector('.custom-settings');
  if (custom && !custom.classList.contains('hidden')) {
    const settingsItem = document.querySelectorAll('.settings-item');

    settingsItem.forEach(item => {
      item.classList.toggle('settings-item_dark')
      if (item.children[0]) {
        item.children[0].classList.toggle('settings-item__name_dark')
      }

    })
  }
}