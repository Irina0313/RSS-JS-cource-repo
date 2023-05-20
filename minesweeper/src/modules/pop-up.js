import { ElementBuilder } from './elem-builder';

export function showMessage(option) {
  /* Create HTML */
  const body = document.querySelector('body');

  let popUpWrapper = new ElementBuilder('div', body, 'pop-up-wrapper');
  popUpWrapper = popUpWrapper.createElement();

  let messageContainer = new ElementBuilder('div', popUpWrapper, 'message-container');
  messageContainer = messageContainer.createElement();

  let message = new ElementBuilder('div', messageContainer, 'message');
  message.createElement();

  let title = new ElementBuilder('h1', messageContainer, 'message-title');
  title = title.createElement();

  /* Winner */
  if (option === 'win') {
    const steps = localStorage.getItem('steps-counter');

    title.innerText = "Congratulations, you're a winner!!!";

    let messageText = new ElementBuilder('p', messageContainer, 'message-text');
    messageText = messageText.createElement();
    messageText.innerText = `Steps amount: ${steps}`;

    let time = new ElementBuilder('p', messageContainer, 'message-text');
    time = time.createElement();
    time.innerText = 'Your time: ';
  }

  /* Loser */
  if (option === 'lose') {
    title.innerText = "Oh sorry you are lose!!! \n Let's try again!";
  }

  let closeBtn = new ElementBuilder('button', messageContainer, 'close-btn');
  closeBtn = closeBtn.createElement();
  closeBtn.innerText = 'Close';

  document.addEventListener('click', (e) => {
    const popUp = document.querySelector('.pop-up-wrapper');
    if (e.target === closeBtn) {
      popUp.remove();
    }
  });
}
