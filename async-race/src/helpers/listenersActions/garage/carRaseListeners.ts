import { Server } from '../../server-requests';
import { IEngineResponse, IRaceResult, IWin } from '../../interfaces';
import { getElementFromDOM, getElementsListFromDOM } from '../../get-DOMEelements';
import { showModalMessage } from '../../showMessage';
import { initCarPosition } from '../../../pages/garage';

const serv = new Server();

export function addCarRaceListeners(): void {
    document.addEventListener('click', (e: MouseEvent): void => {
        //console.log(e.target);
        if (e.target) {
            const targetEl = e.target as HTMLElement;

            /* start engine */
            if (targetEl.innerHTML === 'a') {
                const startBtn = targetEl as HTMLInputElement;
                const carWrapper = targetEl.parentElement?.parentElement?.parentElement as HTMLElement;
                const carId: number = Number(carWrapper.getAttribute('id'));
                startBtn.disabled = true;
                const carImage = targetEl.parentElement?.parentElement?.children[1] as HTMLElement;
                const stopBtn = targetEl.nextSibling as HTMLInputElement;
                startCarEngineBtnAction(carImage, carId, stopBtn);
                stopBtn.disabled = false;
            }
            /* stop engine */
            if (targetEl.innerHTML === 'b') {
                const startBtn = targetEl.previousSibling as HTMLInputElement;
                startBtn.disabled = false;
            }
            /* race */
            if (targetEl.innerHTML === 'race') {
                const raceBtn = targetEl as HTMLInputElement;
                raceBtn.disabled = true;
                const resetBtn = raceBtn.nextSibling as HTMLInputElement;
                resetBtn.disabled = true;
                startCarRace().then((raceResultsArray: IRaceResult[]) => {
                    getWinner(raceResultsArray);
                });
            }
            /* reset */
            if (targetEl.innerHTML === 'reset') {
                //const raceBtn = targetEl as HTMLInputElement;
                returnCars();
            }
        }
    });
}

/* A (start car engine) */

let requestId: number;

// eslint-disable-next-line max-lines-per-function
function getAnimation(
    value: IEngineResponse,
    carImage: HTMLElement,
    carId: number,
    stopBtn: HTMLInputElement
): Promise<IRaceResult> {
    function animateImg(duration: number): Promise<IRaceResult> {
        let stopId: number = 0;
        const start: number = performance.now();
        stopId = requestId = requestAnimationFrame(function animate(time: number) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;
            const stopPoint: number = window.innerWidth - 200;
            carImage.style.left = initCarPosition + timeFraction * stopPoint + 'px';
            if (timeFraction < 1) {
                stopId = requestId = requestAnimationFrame(animate);
            }
        });
        stopBtn.onclick = (): void => {
            stopAnimation(requestId, carImage, initCarPosition, carId);
        };
        const respDrive = serv.startStopEngine(carId, 'drive');
        const resRes: Promise<IRaceResult> = respDrive.then((data) => {
            if (!data.success) {
                carImage.parentElement?.classList.add('broked');
                cancelAnimationFrame(stopId);
                const stop = performance.now();
                const raceResult: IRaceResult = {
                    id: carId,
                    time: +((stop - start) / 1000).toFixed(2),
                    result: 'stopped',
                };
                serv.startStopEngine(carId, 'stopped');
                return raceResult;
            }
            const raceResult: IRaceResult = { id: carId, time: +(duration / 1000).toFixed(2), result: 'finish' };
            return raceResult;
        });
        return resRes;
    }
    let duration: number = 0;
    if (value.distance && value.velocity) {
        duration = value.distance / value.velocity;
    }
    return animateImg(duration);
}

// eslint-disable-next-line max-lines-per-function
async function startCarEngineBtnAction(
    carImage: HTMLElement,
    carId: number,
    stopBtn: HTMLInputElement
): Promise<IRaceResult> {
    const resp = serv.startStopEngine(carId, 'started');
    const value = await resp;
    const data = await getAnimation(value, carImage, carId, stopBtn);
    return data;
}
function stopAnimation(requestId: number, carImage: HTMLElement, initPosition: number, carId: number): void {
    cancelAnimationFrame(requestId);
    const resp = serv.startStopEngine(carId, 'stopped');
    resp.then((data) => {
        if (data.velocity === 0) {
            setTimeout(() => {
                carImage.style.left = `${initPosition}px`;
            }, 100);
        }
    });
    carImage.parentElement?.classList.remove('broked');
}

function startCarRace(): Promise<IRaceResult[]> {
    const cars: NodeListOf<Element> | undefined = getElementsListFromDOM('.car-image');
    const raceResults: Promise<IRaceResult>[] = [];
    if (cars) {
        cars.forEach((car: Element) => {
            const carImage = car as HTMLElement;
            const carMain = carImage.parentElement as HTMLElement;
            const carId: number | null = Number(carMain.parentElement?.id);
            const stopBtn = carImage.previousSibling?.childNodes[1] as HTMLInputElement;
            stopBtn.disabled = false;
            const startBtn = stopBtn.previousSibling as HTMLInputElement;
            startBtn.disabled = true;
            const race: Promise<IRaceResult> = Promise.resolve(startCarEngineBtnAction(carImage, carId, stopBtn));
            raceResults.push(race);
        });
    }
    return Promise.all(raceResults);
}

function getWinner(resultArr: IRaceResult[]): void {
    const fisihedCarsArr: IRaceResult[] = resultArr.filter((car) => car.result === 'finish');
    const winner: IRaceResult = fisihedCarsArr.reduce((curr, next) => {
        if (curr.time < next.time) {
            return curr;
        }
        return next;
    }, fisihedCarsArr[0]);
    const winnerElem = document.getElementById(`${winner.id}`) as HTMLElement;
    const winnerBrand: string = winnerElem.children[0].children[2].innerHTML;
    //console.log(resultArr, fisihedCarsArr, winner)
    if (winnerBrand) {
        showModalMessage(`The first went ${winnerBrand} [${winner.time}]`);
    }
    recordWinner(winner.id, winner.time);
}

function returnCars(): void {
    const raceBtn = getElementFromDOM('.buttons-row')?.children[0] as HTMLInputElement;
    const cars: NodeListOf<Element> | undefined = getElementsListFromDOM('.car-image');
    if (cars) {
        cars.forEach((car) => {
            const carImage = car as HTMLElement;
            carImage.style.left = `${initCarPosition}px`;
        });
    }
    raceBtn.disabled = false;
    const carBtns: NodeListOf<Element> | undefined = getElementsListFromDOM('.car-main-btns .button');
    if (carBtns) {
        carBtns.forEach((btn) => {
            const button = btn as HTMLInputElement;
            button.disabled = false;
            button.parentElement?.parentElement?.classList.remove('broked');
        });
    }
}
/* Record winner */
function recordWinner(winId: number, winTime: number): void {
    serv.getWinner(winId).then((winner: IWin | null) => {
        if (winner) {
            const newWins: number = winner.wins + 1;
            const newWinnerProp: IWin = {
                id: winId,
                wins: newWins,
                time: Math.min(winTime, winner.time),
            };
            serv.updateWinner(newWinnerProp);
        } else {
            const newWinnerProp: IWin = {
                id: winId,
                wins: 1,
                time: winTime,
            };
            serv.createWinner(newWinnerProp);
        }
    });
}
