import './index.html';
import './style.scss';

const fly = document.querySelector('.fly') as HTMLElement;
fly.addEventListener('click', (e) => {
    if (e.target !== null) {
        const target = e.target as HTMLElement;
        target.classList.add('fly_away');
    }
});
