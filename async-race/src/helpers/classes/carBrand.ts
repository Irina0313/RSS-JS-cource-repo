import { carsData } from '../../components/carsModels';
import { ICar } from '../interfaces';

export class CarBrand {
    private brand: string;
    private model: string;

    constructor() {
        this.brand = '';
        this.model = '';
    }

    public getCar(): ICar {
        this.getRandomBrand();
        this.getRandomModel();
        const carName: string = `${this.brand} ${this.model}`;
        const carColor: string = this.getRandomColor();
        const car: ICar = {
            name: carName,
            color: carColor,
        };
        return car;
    }

    private getRandomColor(): string {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const colorHex = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue
            .toString(16)
            .padStart(2, '0')}`;

        return colorHex;
    }

    private getRandomNum(maxNum: number): number {
        return Math.floor(Math.random() * (maxNum + 1));
    }

    private getRandomBrand(): void {
        const brandsArr: string[] = Object.keys(carsData);
        const randomInd: number = this.getRandomNum(brandsArr.length - 1);
        const targetBrand: string = carsData[randomInd].brand;
        this.brand = targetBrand;
    }
    private getRandomModel(): void {
        const brandsArray: string[] = [];
        carsData.map((item) => brandsArray.push(item.brand));
        const targetInd: number = brandsArray.indexOf(this.brand);
        if (targetInd !== -1) {
            const modelsArr: string[] = carsData[targetInd].models;
            const randomInd: number = this.getRandomNum(modelsArr.length - 1);
            const targetModel: string = modelsArr[randomInd];
            this.model = targetModel;
        }
    }
}
