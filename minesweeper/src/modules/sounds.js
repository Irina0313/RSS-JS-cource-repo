import click from '../sounds/click.mp3';
import flag from '../sounds/flag.mp3';
import loser from '../sounds/looser.mp3';
import winner from '../sounds/winner.mp3';


export function playSound(option) {
  const soundSetting = localStorage.getItem('sound');

  if (soundSetting === 'on') {
    if (option === 'click') {
      const sound = new Audio(click);
      sound.play();
    }
    if (option === 'flag') {
      const sound = new Audio(flag);
      sound.play();
    }
    if (option === 'loser') {
      const sound = new Audio(loser);
      sound.play();
    }
    if (option === 'winner') {
      const sound = new Audio(winner);
      sound.play();
    }

  } else if (soundSetting === 'off') {
  }

}