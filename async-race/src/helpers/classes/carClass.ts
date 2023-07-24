import { createCars } from '../../pages/garage';
import { getElementFromDOM } from '../get-DOMEelements';
import { ICar } from '../interfaces';

export class Car {
    private carsWrapper: HTMLElement | undefined;
    private car: ICar;

    constructor(car: ICar) {
        this.carsWrapper = getElementFromDOM('.cars-wrapper');
        this.car = car;
    }

    public createCar(): void {
        if (this.carsWrapper) {
            createCars(this.carsWrapper, this.car);
        }
    }

    public updateCar(): void {
        const carWrapper: HTMLElement | null = document.getElementById(`${this.car.id}`);
        if (carWrapper) {
            const carBrand = carWrapper.children[0].children[2] as HTMLElement;
            carBrand.innerHTML = this.car.name;
            const carImage = carWrapper.children[1].children[1] as HTMLElement;
            carImage.style.fill = this.car.color;
        }
    }
}
