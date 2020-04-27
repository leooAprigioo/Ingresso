export class Step {
    public position: number;
    public label: string;
    public route: string;
    public nextRoute: string;
    public previousRoute: string;

    constructor(
        position?: number,
        label?: string,
        route?: string,
        nextRoute?: string,
        previousRoute?: string
    ) {
        this.position = position;
        this.label = label;
        this.route = route;
        this.nextRoute = nextRoute;
        this.previousRoute = previousRoute;
    }

    static createMock() {
        let step = new Step()

        let position = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;

        step.position = position;
        step.label = `Descrição ${step.position}`;
        step.route = 'seat';

        return step;
    }
}