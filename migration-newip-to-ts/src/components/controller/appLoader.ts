import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '410f18727dc04e5eb572af77a70f1a4e' as string,
        });
    }
}

export default AppLoader;
