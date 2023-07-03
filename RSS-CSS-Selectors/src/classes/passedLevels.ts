export class PassedLevels {
    private passedLevels: number[];

    constructor() {
        this.passedLevels = [];
    }

    public addPassed(levelNum: number): void {
        if (localStorage.passedLevelsWithHelp) {
            if (localStorage.passedLevelsWithHelp.includes(levelNum)) {
                return;
            }
        }
        if (localStorage.passedLevels) {
            this.passedLevels = this.passedLevels.concat(JSON.parse(localStorage.passedLevels));
            if (this.passedLevels.includes(levelNum)) {
                return;
            } else {
                this.passedLevels.push(levelNum);
                localStorage.passedLevels = JSON.stringify(this.passedLevels);
            }
        } else {
            this.passedLevels.push(levelNum);
            localStorage.passedLevels = JSON.stringify(this.passedLevels);
        }
    }
    public getPassed(): number[] {
        if (localStorage.passedLevels) {
            return JSON.parse(localStorage.passedLevels);
        }
        return this.passedLevels;
    }
    public resetPassed(): void {
        localStorage.passedLevels = [];
    }
}

export class PassedLevelsWithHelp {
    private passedLevelsWithHelp: number[];

    constructor() {
        this.passedLevelsWithHelp = [];
    }

    public addPassed(levelNum: number): void {
        if (localStorage.passedLevelsWithHelp) {
            this.passedLevelsWithHelp = this.passedLevelsWithHelp.concat(JSON.parse(localStorage.passedLevelsWithHelp));
            if (this.passedLevelsWithHelp.includes(levelNum)) {
                return;
            } else {
                this.passedLevelsWithHelp.push(levelNum);
                localStorage.passedLevelsWithHelp = JSON.stringify(this.passedLevelsWithHelp);
            }
        } else {
            this.passedLevelsWithHelp.push(levelNum);
            localStorage.passedLevelsWithHelp = JSON.stringify(this.passedLevelsWithHelp);
        }
    }

    public getPassed(): number[] {
        if (localStorage.passedLevelsWithHelp) {
            return JSON.parse(localStorage.passedLevelsWithHelp);
        }
        return this.passedLevelsWithHelp;
    }
    public resetPassed(): void {
        localStorage.passedLevelsWithHelp = [];
    }
}
