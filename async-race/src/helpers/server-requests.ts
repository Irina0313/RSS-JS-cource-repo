import { ICar, IEngineResponse, IWin } from './interfaces';
export const carsForPageLimit: number = 7;
export const winnersForPageLimit: number = 10;

export class Server {
    private baseUrl = 'http://127.0.0.1:3000';
    private path = {
        garage: '/garage',
        engine: '/engine',
        winners: '/winners',
    };

    public getItemsAmount = async (param: string): Promise<number> => {
        const response: Response = await fetch(`${this.baseUrl}/${param}?_page=1&_limit=${carsForPageLimit}`);
        //const data: ICar[] = await response.json();
        const carrsAmount: number = Number(response.headers.get('X-Total-Count'));
        return carrsAmount;
    };

    public getCars = async (pageNum: number = 1): Promise<ICar[]> => {
        const response: Response = await fetch(
            `${this.baseUrl}${this.path.garage}?_page=${pageNum}&_limit=${carsForPageLimit}`
        );
        const data: ICar[] = await response.json();
        return data;
    };

    public getCar = async (carId: number): Promise<ICar> => {
        const response: Response = await fetch(`${this.baseUrl}${this.path.garage}`);
        const data: ICar[] = await response.json();
        const car = data.find((item: ICar): boolean => item.id === carId);
        if (car) {
            return car;
        }
        throw Error('Car was not finded');
    };

    public createCar = async (carTempl: ICar): Promise<Response> => {
        const response: Response = await fetch(`${this.baseUrl}${this.path.garage}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carTempl),
        });
        return response;
    };
    public removeCar = async (id: number): Promise<Response> => {
        const response: Response = await fetch(`${this.baseUrl}${this.path.garage}/${id}`, {
            method: 'DELETE',
        });
        return response;
    };

    public updateCar = async (carTempl: ICar): Promise<Response> => {
        const response: Response = await fetch(`${this.baseUrl}${this.path.garage}/${carTempl.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carTempl),
        });
        return response;
    };

    public startStopEngine = async (id: number, status: string): Promise<IEngineResponse> => {
        const response: Response = await fetch(`${this.baseUrl}${this.path.engine}?id=${id}&status=${status}`, {
            method: 'PATCH',
        });
        if (response.ok) {
            const data: IEngineResponse = await response.json();
            return data;
        } else {
            const data: IEngineResponse = { success: false };
            return data;
        }
    };

    /* Winners */

    public getWinners = async (pageNum: number = 1): Promise<IWin[]> => {
        const response: Response = await fetch(
            `${this.baseUrl}${this.path.winners}?_page=${pageNum}&_limit=${winnersForPageLimit}`
        );
        const data: IWin[] = await response.json();
        return data;
    };
    public getWinner = async (winId: number): Promise<IWin | null> => {
        const response: Response = await fetch(`${this.baseUrl}${this.path.winners}`);
        const data: IWin[] = await response.json();
        const winner = data.find((item: IWin): boolean => item.id === winId);
        if (winner) {
            return winner;
        }
        return null;
    };
    public updateWinner = async (winProp: IWin): Promise<Response> => {
        const response: Response = await fetch(`${this.baseUrl}${this.path.winners}/${winProp.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                wins: winProp.wins,
                time: winProp.time,
            }),
        });
        return response;
    };
    public createWinner = async (winnerTempl: IWin): Promise<Response> => {
        const response: Response = await fetch(`${this.baseUrl}${this.path.winners}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(winnerTempl),
        });
        return response;
    };
    public deleteWinner = async (id: number): Promise<Response> => {
        const response: Response = await fetch(`${this.baseUrl}${this.path.winners}/${id}`, {
            method: 'DELETE',
        });
        return response;
    };
}
