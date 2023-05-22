import { ElementBuilder } from './elem-builder';
import { getTime } from './functions';

export function showMessage(option) {
  /* Create HTML */
  const body = document.querySelector('body');
  const theme = localStorage.getItem('theme');

  let popUpWrapper = new ElementBuilder('div', body, 'pop-up-wrapper');
  popUpWrapper = popUpWrapper.createElement();

  let messageContainer = new ElementBuilder('div', popUpWrapper, 'message-container');
  messageContainer = messageContainer.createElement();
  if (theme === 'dark') {
    messageContainer.classList.add('message-container_dark');
  }

  const message = new ElementBuilder('div', messageContainer, 'message');
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

    let timeSpend = new ElementBuilder('p', messageContainer, 'message-text');
    timeSpend = timeSpend.createElement();
    const timeMes = getTime();
    timeSpend.innerText = `Your time: ${timeMes}`;
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

  /* Loser */
  if (option === 'lose') {
    title.innerText = "Oh sorry you are lose!!! \n Let's try again!";
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



  /* Results */
  if (option === 'results') {
    const steps = localStorage.getItem('steps-counter');
    const activeLevel = document.querySelector('.level_active');
    const level = activeLevel.innerText.toLowerCase();

    title.innerText = `Last 10 results of ${activeLevel.innerText} level`;

    if (localStorage.getItem('results')) {



      let resultsObj = JSON.parse(localStorage.results);
      let targetLevelObj = resultsObj[level];
      if (targetLevelObj) {


        let table = new ElementBuilder('div', messageContainer, 'results-table');

        table = table.createElement();
        if (theme === 'dark') {
          table.classList.add('results-table_dark');
        }

        let tableItemHeader = new ElementBuilder('div', table, 'result-steps', 'result-steps_header');

        tableItemHeader = tableItemHeader.createElement();
        if (theme === 'dark') {
          tableItemHeader.classList.add('result-steps_dark');
        }
        tableItemHeader.innerText = 'Steps';

        tableItemHeader = new ElementBuilder('div', table, 'result-time', 'result-time_header');

        tableItemHeader = tableItemHeader.createElement();
        if (theme === 'dark') {
          tableItemHeader.classList.add('result-time_dark');
        }
        tableItemHeader.innerText = 'Time';

        let resultsLength = Object.keys(targetLevelObj).length;
        for (let i = 1; i < resultsLength + 1; i += 1) {

          let tableItem = new ElementBuilder('div', table, 'result-steps');
          tableItem = tableItem.createElement();

          tableItem.innerText = targetLevelObj[i].steps;
          if (theme === 'dark') {
            tableItem.classList.add('result-steps_dark');
          }

          tableItem = new ElementBuilder('div', table, 'result-time');

          tableItem = tableItem.createElement();
          tableItem.innerText = targetLevelObj[i].time;
          if (theme === 'dark') {
            tableItem.classList.add('result-time_dark');
          }

        }

      } else {
        let messageText = new ElementBuilder('p', messageContainer, 'message-text');

        messageText = messageText.createElement();
        if (theme === 'dark') {
          messageText.classList.add('message-text_dark');
        }
        messageText.innerText = `There is no results. You can be first! Start game!`;
      }
    } else {
      let messageText = new ElementBuilder('p', messageContainer, 'message-text');
      messageText = messageText.createElement();
      if (theme === 'dark') {
        messageText.classList.add('message-text_dark');
      }
      messageText.innerText = `There is no results. You can be first! Start game!`;
    }

    let closeBtn = new ElementBuilder('button', messageContainer, 'close-btn');

    closeBtn = closeBtn.createElement();
    if (theme === 'dark') {
      closeBtn.classList.add('close-btn_dark');
    }
    closeBtn.innerText = 'Close';

    document.addEventListener('click', (e) => {
      const popUp = document.querySelector('.pop-up-wrapper');

      if (e.target === closeBtn) {
        popUp.remove();
      }
    });
  }

}
