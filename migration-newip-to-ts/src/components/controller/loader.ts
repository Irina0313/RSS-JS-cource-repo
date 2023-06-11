import { GetRespObj, ErrorsCodes } from '../../types';
class Loader {
    private baseLink: string;
    private options: { apiKey: string };
    constructor(baseLink: string, options: { apiKey: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }
    protected getResp(
        { endpoint, options = {} }: Partial<GetRespObj>,
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private static errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === ErrorsCodes.Unauthorized || res.status === ErrorsCodes.PaymentRequired)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: object, endpoint: string | undefined): string {
        const urlOptions: object = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: string | undefined, callback: (a: string) => void, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(Loader.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch(<T>(err: T) => console.error(err));
    }
}

export default Loader;
