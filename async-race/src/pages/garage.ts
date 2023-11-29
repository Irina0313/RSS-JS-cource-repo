import { Page } from '../helpers/templates/page';
import { IHTMLElement, ICar, ISavedValue } from '../helpers/interfaces';
import { btnType1Templ, btnType2Templ } from '../helpers/templates/buttons';
import { createElement } from '../helpers/build-html-element';
import { car, flag } from '../components/images';
import { getElementFromDOM } from '../helpers/get-DOMEelements';
import { Server, carsForPageLimit } from '../helpers/server-requests';
import { Car } from '../helpers/classes/carClass';

/* Garage  */
const garageSectionTempl: IHTMLElement = {
    tag: 'section',
    class: ['garage'],
};
/* Cars ations section */
const carsActionsSectionTempl: IHTMLElement = {
    tag: 'div',
    class: ['cars-actions-section'],
};
const rowCreateTempl: IHTMLElement = {
    tag: 'div',
    class: ['cars-actions-row', 'input-row_create'],
};
const rowUpdateTempl: IHTMLElement = {
    tag: 'div',
    class: ['cars-actions-row', 'input-row_update'],
};
const rowButtonsTempl: IHTMLElement = {
    tag: 'div',
    class: ['cars-actions-row', 'buttons-row'],
};
const inputTextTempl: IHTMLElement = {
    tag: 'input',
    class: ['input-text'],
    attribute: { type: 'text' },
};

const inputColorTempl: IHTMLElement = {
    tag: 'input',
    class: ['input-color'],
    attribute: { type: 'color' },
};
/* Cars section */
const carsWrapperTempl: IHTMLElement = {
    tag: 'div',
    class: ['cars-wrapper'],
};
const carWrapperTempl: IHTMLElement = {
    tag: 'div',
    class: ['car-wrapper'],
};
const carHeaderTempl: IHTMLElement = {
    tag: 'div',
    class: ['car-header'],
};
const carBrandTempl: IHTMLElement = {
    tag: 'span',
    class: ['car-brand'],
};
const carMainTempl: IHTMLElement = {
    tag: 'div',
    class: ['car-main'],
};
const carMainBtnsTempl: IHTMLElement = {
    tag: 'div',
    class: ['car-main-btns'],
};
const carTempl: IHTMLElement = {
    tag: 'div',
    class: ['car-image'],
    innerHTML: `${car}`,
};
const flagTempl: IHTMLElement = {
    tag: 'div',
    class: ['flag-image'],
    innerHTML: `${flag}`,
};
export let initCarPosition: number = 0;
export class GaragePage extends Page {
    protected static TextObject = {
        title: 'Garage',
        servPath: 'garage',
    };
    constructor(id: string) {
        super(id);
    }

    protected createMainWrapper(templ: IHTMLElement): HTMLElement {
        const mainWrapper: HTMLElement = createElement(templ);
        this.createGarage(mainWrapper);
        return mainWrapper;
    }

    private createGarage(garage: HTMLElement): void {
        this.createCarsActionsSection(garage);
        const carsWrapper = createElement(carsWrapperTempl);
        garage.append(carsWrapper);
        const currPageNumb: number = Number(localStorage.getItem('page-number'));
        const serv: Server = new Server();
        const carsArr: Promise<ICar[]> = Promise.resolve(serv.getCars(currPageNumb));
        carsArr.then((value: ICar[]): void => {
            value.forEach((item: ICar) => {
                createNewCar(item);
            });
        });
    }

    protected createInputs(carsActionsSection: HTMLElement): void {
        /* Row CREATE */
        const rowCreate = createElement(rowCreateTempl);
        carsActionsSection.append(rowCreate);
        const inputTextCreate = createElement(inputTextTempl) as HTMLInputElement;
        //rowCreate.append(inputTextCreate);
        inputTextCreate.classList.add('inputText_light');
        const inputColorCreate = createElement(inputColorTempl) as HTMLInputElement;
        //rowCreate.append(inputColorCreate);
        inputColorCreate.classList.add('inputColor_light');
        const btnCreate = createElement(btnType2Templ);
        btnCreate.innerHTML = 'create';
        rowCreate.append(inputTextCreate, inputColorCreate, btnCreate);
        /* Row UPDATE */
        const rowUpdate = createElement(rowUpdateTempl);
        carsActionsSection.append(rowUpdate);
        const inputTextUpdate = createElement(inputTextTempl) as HTMLInputElement;
        inputTextUpdate.classList.add('inputText_dark');
        const inputColorUpdate = createElement(inputColorTempl) as HTMLInputElement;
        inputColorUpdate.classList.add('inputColor_dark');
        const btnUpdate = createElement(btnType2Templ);
        btnUpdate.innerHTML = 'update';
        rowUpdate.append(inputTextUpdate, inputColorUpdate, btnUpdate);
        if (localStorage.savedGarageState) {
            const savedState: ISavedValue = JSON.parse(localStorage.savedGarageState);
            if (savedState) {
                inputTextCreate.value = savedState.inputTextCr;
                inputColorCreate.value = savedState.inputColorCr;
                inputTextUpdate.value = savedState.inputTextUpd;
                inputColorUpdate.value = savedState.inputColorUpd;
            }
        }
    }

    protected createCarsActionsSection(garage: HTMLElement): void {
        const carsActionsSection = createElement(carsActionsSectionTempl);
        garage.append(carsActionsSection);

        this.createInputs(carsActionsSection);

        /* Buttons row */

        const rowButtons = createElement(rowButtonsTempl);
        carsActionsSection.append(rowButtons);
        const btnRace = createElement(btnType1Templ);
        btnRace.innerHTML = 'race';
        const btnReset = createElement(btnType1Templ);
        btnReset.innerHTML = 'reset';
        const btnGenerate = createElement(btnType2Templ);
        btnGenerate.innerHTML = 'generate cars';
        rowButtons.append(btnRace, btnReset, btnGenerate);
    }

    public render(): HTMLElement {
        this.container.classList.add('garage');
        const title = this.createTitle(GaragePage.TextObject.title, GaragePage.TextObject.servPath, this.titleTempl);
        const pageNum = this.createPageNum(this.pageNumTempl);
        const mainWrapper = this.createMainWrapper(garageSectionTempl);

        const paginatorBtns = this.createPaginatorsBtns(this.buttonsPaginatorRowTempl);
        this.container.append(title, pageNum, mainWrapper, paginatorBtns);
        return this.container;
    }
}

export function createNewCar(car: ICar): void {
    const newCar = new Car(car);
    newCar.createCar();
}
export function addCarOnPage(): void {
    const carsWrapper = getElementFromDOM('.cars-wrapper') as HTMLElement;
    const carsAmountOnPage: number | undefined = carsWrapper.children.length;
    const currPageNumber = Number(localStorage.getItem('page-number'));
    if (carsAmountOnPage && carsAmountOnPage < carsForPageLimit) {
        const serv = new Server();
        const resp: Promise<ICar[]> = serv.getCars(currPageNumber);
        resp.then((value: ICar[]) => {
            if (value[carsForPageLimit - 1]) {
                createCars(carsWrapper, value[carsForPageLimit - 1]);
            }
        });
    }
}
export function createCars(carsWrapper: HTMLElement, car: ICar): void {
    const carWrapper: HTMLElement = createElement(carWrapperTempl);
    carsWrapper.append(carWrapper);
    carWrapper.setAttribute('id', `${car.id}`);
    const carHeader: HTMLElement = createElement(carHeaderTempl);
    carWrapper.append(carHeader);
    const selectBtn = createElement(btnType2Templ);
    carHeader.append(selectBtn);
    selectBtn.innerHTML = 'select';
    const removeBtn = createElement(btnType2Templ);
    carHeader.append(removeBtn);
    removeBtn.innerHTML = 'remove';
    const carBrand = createElement(carBrandTempl);
    carHeader.append(carBrand);
    carBrand.innerHTML = car.name; // car brand
    const carMain = createElement(carMainTempl);
    carWrapper.append(carMain);
    const carMainBtns = createElement(carMainBtnsTempl);
    carMain.append(carMainBtns);
    const startBtn = createElement(btnType1Templ);
    carMainBtns.append(startBtn);
    startBtn.innerHTML = 'a';
    const stopBtn = createElement(btnType2Templ) as HTMLInputElement;
    carMainBtns.append(stopBtn);
    stopBtn.innerHTML = 'b';
    stopBtn.disabled = true;
    const carImg = createElement(carTempl);
    carMain.append(carImg);
    initCarPosition = carImg.offsetLeft;
    carImg.style.fill = car.color;
    const flagImg = createElement(flagTempl);
    carMain.append(flagImg);
}
