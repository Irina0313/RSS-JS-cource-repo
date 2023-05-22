import { ElementBuilder } from './elem-builder';
import { LocalStorageActions } from './functions';

export function createHeaderHTML() {
  const theme = localStorage.getItem('theme');
  const sound = localStorage.getItem('sound');
  const localStor = new LocalStorageActions();

  const body = document.querySelector('body');

  let header = new ElementBuilder('header', body, 'header');
  header = header.createElement();

  let wrapperHeader = new ElementBuilder('div', header, 'wrapper', 'wrapper_header');
  wrapperHeader = wrapperHeader.createElement();

  let h1 = new ElementBuilder('h1', wrapperHeader, 'main-title');
  h1 = h1.createElement();
  h1.innerText = 'Minesweeper';

  /* Best results, Theme, Sound */
  let firstRow = new ElementBuilder('ul', wrapperHeader, 'first-row');
  firstRow = firstRow.createElement();

  let results = new ElementBuilder('li', firstRow, 'results');
  results = results.createElement();
  results.innerText = 'Best results';
  /* Theme */

  let themeSwitherName = new ElementBuilder('li', firstRow, 'swither-name');
  themeSwitherName = themeSwitherName.createElement();
  themeSwitherName.innerText = 'Theme:';


  let themeSwither = new ElementBuilder('label', firstRow, 'swither');
  themeSwither = themeSwither.createElement();


  let switherInput = new ElementBuilder('input', themeSwither, 'swither__input');
  switherInput = switherInput.createElement();
  switherInput.setAttribute('type', 'checkbox');

  const switherSpan = new ElementBuilder('span', themeSwither, 'theme', 'swither__span');
  switherSpan.createElement();

  /*Sound */

  let soundSwitherName = new ElementBuilder('li', firstRow, 'swither-name');
  soundSwitherName = soundSwitherName.createElement();
  soundSwitherName.innerText = 'Sound:';


  let soundSwither = new ElementBuilder('label', firstRow, 'swither');
  soundSwither = soundSwither.createElement();


  let soundInput = new ElementBuilder('input', soundSwither, 'swither__input');
  soundInput = soundInput.createElement();
  soundInput.setAttribute('type', 'checkbox');

  const soundSpan = new ElementBuilder('span', soundSwither, 'sound', 'swither__span');
  soundSpan.createElement();

  const soundSetting = localStorage.getItem('sound');
  if (!soundSetting) {
    localStorage.setItem('sound', 'on');
  } else if (soundSetting === 'off') {
    soundInput.setAttribute('checked', 'true');
  }



  /* Levels */

  let levelsList = new ElementBuilder('ul', wrapperHeader, 'levels');
  levelsList = levelsList.createElement();

  let level = new ElementBuilder('li', levelsList, 'level', 'level_active');
  level = level.createElement();
  level.innerText = 'Beginner';

  level = new ElementBuilder('li', levelsList, 'level');
  level = level.createElement();
  level.innerText = 'Intermediate';

  level = new ElementBuilder('li', levelsList, 'level');
  level = level.createElement();
  level.innerText = 'Expert';

  level = new ElementBuilder('li', levelsList, 'level');
  level = level.createElement();
  level.innerText = 'Custom';

  /* Custom settings */
  let customSettingsList = new ElementBuilder('ul', wrapperHeader, 'custom-settings', 'hidden');
  customSettingsList = customSettingsList.createElement();

  let settingsItem = new ElementBuilder('li', customSettingsList, 'settings-item');
  settingsItem = settingsItem.createElement();
  let label = new ElementBuilder('label', settingsItem, 'settings-item__name');
  label = label.createElement();

  label.innerText = 'Width: ';
  label.htmlFor = 'custom-width';
  let input = new ElementBuilder('input', label, 'settings-item__field');
  input = input.createElement();
  input.setAttribute('type', 'number');
  input.setAttribute('id', 'custom-width');
  input.setAttribute('max', '100');
  input.setAttribute('min', '10');
  if (localStorage['custom-width']) {
    if (!localStor.getItem('custom-width')) {
      localStor.changeValue('custom-width', '10');
      input.value = 10;
    } else {
      input.value = Number(localStor.getItem('custom-width'));
    }
  } else {
    input.value = 10;
    localStor.setItem('custom-width', input.value);
  }

  settingsItem = new ElementBuilder('li', customSettingsList, 'settings-item');
  settingsItem = settingsItem.createElement();
  label = new ElementBuilder('label', settingsItem, 'settings-item__name');
  label = label.createElement();
  label.innerText = 'Height: ';
  label.htmlFor = 'custom-height';
  input = new ElementBuilder('input', label, 'settings-item__field');
  input = input.createElement();
  input.setAttribute('type', 'number');
  input.setAttribute('id', 'custom-height');
  input.setAttribute('max', '100');
  input.setAttribute('min', '10');
  if (localStorage['custom-height']) {
    if (!localStor.getItem('custom-height')) {
      localStor.changeValue('custom-height', '10');
      input.value = 10;
    } else {
      input.value = Number(localStor.getItem('custom-height'));
    }
  } else {
    input.value = 10;
    localStor.setItem('custom-height', input.value);
  }

  settingsItem = new ElementBuilder('li', customSettingsList, 'settings-item');
  settingsItem = settingsItem.createElement();
  label = new ElementBuilder('label', settingsItem, 'settings-item__name');
  label = label.createElement();
  label.innerText = 'Mines: ';
  label.htmlFor = 'custom-mines';
  input = new ElementBuilder('input', label, 'settings-item__field');
  input = input.createElement();
  input.setAttribute('type', 'number');
  input.setAttribute('id', 'custom-mines');
  input.setAttribute('max', '99');
  input.setAttribute('min', '10');
  if (localStorage['custom-mines']) {
    if (!localStor.getItem('custom-mines')) {
      localStor.changeValue('custom-mines', '10');
      input.value = 10;
    } else {
      input.value = Number(localStor.getItem('custom-mines'));
    }
  } else {
    input.value = 10;
    localStor.setItem('custom-mines', input.value);
  }

  settingsItem = new ElementBuilder('li', customSettingsList, 'settings-item', 'update-btn');
  const updateBtn = settingsItem.createElement();
  updateBtn.innerText = 'Update';
}
