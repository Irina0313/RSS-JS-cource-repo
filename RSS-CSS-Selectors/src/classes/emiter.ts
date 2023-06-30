type strObj = { [key: string]: string };
type func = (param: strObj) => void;

export class EventEmitter {
    public events: { [key: string]: func[] };
    constructor() {
        this.events = {};
    }

    public emit(eventName: string, data: strObj): void {
        const event = this.events[eventName];
        if (event) {
            event.forEach((fn: func) => {
                fn(data);
            });
        }
    }

    public subscribe(eventName: string, fn: func): void {
        if (!this.events[eventName]) {
            this.events[eventName] = [fn];
        }
        this.events[eventName].push(fn);
        /*return () => {
            this.events[eventName] = this.events[eventName].filter((eventFn) => fn !== eventFn);
        };*/
    }
}

// eslint-disable-next-line max-lines-per-function
export function getEmitterMouseMove(
    elemEmiter: HTMLElement | Element,
    emiterName: string,
    elemListener: HTMLElement | Element,
    listenerName: string
): void {
    const emitter = new EventEmitter();

    elemEmiter.addEventListener('mouseover', () => {
        emitter.emit(`event:mouse-over-${emiterName}`, { class: 'active' });
        elemEmiter.classList.add('active');
        elemEmiter.children[1].classList.remove('hidden');
    });
    elemEmiter.addEventListener('mouseout', () => {
        emitter.emit(`event:mouse-out-${emiterName}`, { class: 'active' });
        elemEmiter.classList.remove('active');
        elemEmiter.children[1].classList.add('hidden');
    });
    elemListener.addEventListener('mouseover', () => {
        emitter.emit(`event:mouse-over-${listenerName}`, { class: 'active' });
        elemListener.classList.add('active');
        elemEmiter.children[1].classList.remove('hidden');
    });
    elemListener.addEventListener('mouseout', () => {
        emitter.emit(`event:mouse-out-${listenerName}`, { class: 'active' });
        elemListener.classList.remove('active');
        elemEmiter.children[1].classList.add('hidden');
    });

    emitter.subscribe(`event:mouse-over-${emiterName}`, (data) => {
        elemListener.classList.add(`${data.class}`);
        elemEmiter.children[1].classList.remove('hidden');
    });
    emitter.subscribe(`event:mouse-out-${emiterName}`, (data) => {
        elemListener.classList.remove(`${data.class}`);
        elemEmiter.children[1].classList.add('hidden');
    });

    emitter.subscribe(`event:mouse-over-${listenerName}`, (data) => {
        elemEmiter.classList.add(`${data.class}`);
        elemEmiter.children[1].classList.remove('hidden');
    });
    emitter.subscribe(`event:mouse-out-${listenerName}`, (data) => {
        elemEmiter.classList.remove(`${data.class}`);
        elemEmiter.children[1].classList.add('hidden');
    });
}
