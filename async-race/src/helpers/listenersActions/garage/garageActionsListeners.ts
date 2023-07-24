import { ICar, IWin } from '../../interfaces';
import { Server, carsForPageLimit } from '../../server-requests';
import { getElementFromDOM } from '../../get-DOMEelements';
import { createNewCar, addCarOnPage } from '../../../pages/garage';
import { showMessage } from '../../showMessage';
import { checkIfButtonActive } from '../../templates/page';
import { Car } from '../../classes/carClass';
import { CarBrand } from '../../classes/carBrand';

const serv: Server = new Server();

export function addGarageActionsListeners(): void {
    document.addEventListener('click', (e: MouseEvent): void => {
        //console.log(e.target);
        if (e.target) {
            const targetEl = e.target as HTMLElement;

            /* create new car button */
            if (targetEl.innerHTML === 'create') {
                createCarBtnAction();
            }
            /* remove car button */
            if (targetEl.innerHTML === 'remove') {
                removeCarBtnAction(targetEl);
            }
            /* update car */
            if (targetEl.innerHTML === 'select') {
                selectCarBtnAction(targetEl);
            }
            /* generate cars */
            if (targetEl.innerHTML === 'generate cars') {
                generateCarsBtnAction();
            }
        }
    });
}
/* CREATE button */
async function generateNewCar(carTempl: ICar): Promise<void> {
    const resp: Promise<Response> = serv.createCar(carTempl);

    resp.then((value: Response): Promise<ICar> => {
        const newCar: Promise<ICar> = value.json();
        return newCar;
    })
        .then((val: ICar): void => {
            const carsOnPage: number | undefined = getElementFromDOM('.cars-wrapper')?.children.length;

            if (carsOnPage !== undefined && carsOnPage < carsForPageLimit) {
                const newCarId: number | undefined = val.id;
                carTempl.id = newCarId;
                createNewCar(carTempl);
            }
        })
        .then(() => {
            const garageTitle = getElementFromDOM('.garage .title');
            if (garageTitle) {
                const data: Promise<number> = serv.getItemsAmount('garage');
                data.then((value: number) => {
                    const carsAmount: number = value;
                    const titleText = `Garage (${carsAmount})`;
                    garageTitle.innerHTML = titleText;
                });
            }
        });
}
function createCarBtnAction(): void {
    const createInput = getElementFromDOM('.input-row_create .input-text') as HTMLInputElement;
    const colorInput = getElementFromDOM('.input-row_create .input-color') as HTMLInputElement;
    const carColor: string = colorInput.value;
    const carName: string = createInput.value;
    if (carName === '') {
        showMessage('Type Car Brand', createInput);
    } else {
        const carTempl: ICar = {
            name: carName,
            color: carColor,
        };

        generateNewCar(carTempl);
    }
    checkIfButtonActive('garage');
}
/* REMOVE button */
function removeCarBtnAction(targetEl: HTMLElement): void {
    const car = targetEl.parentElement?.parentElement as HTMLElement;
    if (car.getAttribute('id')) {
        const carId: number = Number(car.getAttribute('id'));

        const resp = Promise.resolve(serv.removeCar(carId));
        resp.then((value: Response) => {
            const respStatus: number = value.status;
            if (respStatus === 200) {
                car.remove();
            }
        }).then(() => {
            const garageTitle = getElementFromDOM('.garage .title');
            if (garageTitle) {
                const data: Promise<number> = serv.getItemsAmount('garage');
                data.then((value: number) => {
                    const carsAmount: number = value;
                    const titleText = `Garage (${carsAmount})`;
                    garageTitle.innerHTML = titleText;
                });
            }
            addCarOnPage();
            checkIfButtonActive('garage');
            checkToDeleteFromWinners(carId);
        });
    }
}
/* UPDATE button */
function updateCarBtnAction(car: ICar): void {
    const resp = serv.updateCar(car);
    resp.then((data) => {
        if (data.status === 200) {
            const carClassItem = new Car(car);
            carClassItem.updateCar();
        }
    });
}
/* SELECT button */
function selectCarBtnAction(targetEl: HTMLElement): void {
    const updateBtn = getElementFromDOM('.input-row_update .button') as HTMLElement;
    const car = targetEl.parentElement?.parentElement as HTMLElement;
    const carId = Number(car.getAttribute('id'));
    const updateInputText = getElementFromDOM('.input-row_update .input-text') as HTMLInputElement;
    const updateInputColor = getElementFromDOM('.input-row_update .input-color') as HTMLInputElement;

    const resp: Promise<ICar> = serv.getCar(carId);
    resp.then((car: ICar) => {
        updateInputText.value = car.name;
        updateInputColor.value = car.color;
        function update(): void {
            car.name = updateInputText.value;
            car.color = updateInputColor.value;
            updateCarBtnAction(car);
            updateInputText.value = '';
            updateBtn.removeEventListener('click', update);
        }
        updateBtn.addEventListener('click', update);
    });
}
/* GENERATE CARS button (should generate 100 random cars and add them to API)*/
async function generateCarsBtnAction(): Promise<void> {
    const targetCarsAmount: number = 100;
    const carBrand = new CarBrand();
    for (let i = 0; i < targetCarsAmount; i += 1) {
        const carTempl: ICar = carBrand.getCar();
        const promise = generateNewCar(carTempl);
        await promise;
    }
}

/* check deleted car in winners  */
function checkToDeleteFromWinners(carId: number): void {
    serv.getWinner(carId).then((winner: IWin | null): void => {
        if (winner) {
            serv.deleteWinner(carId);
        }
    });
}
