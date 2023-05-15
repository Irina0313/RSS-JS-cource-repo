import { ElementBuilder } from './elem-builder';

export function createHeaderHTML() {
  const body = document.querySelector('body');

  let header = new ElementBuilder('header', body, 'header');
  header = header.createElement();

  let wrapperHeader = new ElementBuilder('div', header, 'wrapper', 'wrapper_header');
  wrapperHeader = wrapperHeader.createElement();

  let h1 = new ElementBuilder('h1', wrapperHeader, 'main-title');
  h1 = h1.createElement();
  h1.innerText = 'Minesweeper';

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
}
