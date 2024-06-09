enum FlyEvent {
    LANDING = 'landing',
    TAKEOFF = 'takeoff',
}
interface Mediator {
    notify(sender: object, event: string): void;
}

class ControlTower implements Mediator {
    private flights: Flight[] = [];

    // Przeciążone sygnatury metod
    public registerFlight(flight: Flight): void;
    public registerFlight(...flights: Flight[]): void;
    public registerFlight(flights: Flight[]): void;

    registerFlight(flightOrFlights: Flight | Flight[], ...flights: Flight[]) {
        if (Array.isArray(flightOrFlights)) {
            flightOrFlights.forEach(flight => this.addFlight(flight));
        } else {
            this.addFlight(flightOrFlights);
            if (flights.length > 0) {
                flights.forEach(flight => this.addFlight(flight));
            }
        }
    }
    addFlight(flight: Flight) {
        this.flights.push(flight);
        flight.setMediator(this);
    }
    notify(sender: object, event: string): void {
        switch (event) {
            case FlyEvent.LANDING:
                this.flights.forEach(flight => {
                    if (flight !== sender)
                        flight.recieveNotification(`A flight is landing`);
                });
                break;
            case FlyEvent.TAKEOFF:
                this.flights.forEach(flight => {
                    if (flight !== sender)
                        flight.recieveNotification(`A flight is taking off`);
                });
                break;
            default:
                break;
        }
    }
}

class BaseComponent {
    // protected mediator: Mediator | null = null
    constructor(protected mediator?: Mediator) {}
    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }
}

class Flight extends BaseComponent {
    constructor(private _name: string) {
        super();
    }
    public land(): void {
        console.log(`${this._name} is landing.`);
        this.mediator?.notify(this, FlyEvent.LANDING);
    }
    public takeoff(): void {
        console.log(`${this._name} is taking off.`);
        this.mediator?.notify(this, FlyEvent.TAKEOFF);
    }
    public recieveNotification(message: string): void {
        console.log(`${this._name} received notification: ${message}`);
    }
}

export default class {
    static run() {
        const controlTowerMediator = new ControlTower();

        const f1 = new Flight('F-231 (single)');
        const f2 = new Flight('LC-543 (multiple)');
        const f3 = new Flight('PL-999 (multiple)');
        const f4 = new Flight('F-231 [array]');
        const f5 = new Flight('LC-543 [array]');

        controlTowerMediator.registerFlight(f1);
        controlTowerMediator.registerFlight(f2, f3);
        controlTowerMediator.registerFlight([f4, f5]);

        f1.land()
        f2.land()
        f3.takeoff()
        f4.land()
        f5.takeoff()
        f1.takeoff()
        f2.takeoff()
    }
}
