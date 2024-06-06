/**
 * The Product interface declares the operations that all concrete
 * products must implement.
 */
interface Transportable {
    deliver(): void;
}
/**
 * Concrete Products provide various implementations of the Product interface.
 */
class Truck implements Transportable {
    deliver(): void {
        console.log(`deliver with Truck using boxes`);
    }
}
class Ship implements Transportable {
    deliver(): void {
        console.log(`deliver with SHIP using containers`);
    }
}
/**
 * The Logistic class declares the (abstract) factory method that is
 * supposed to return an object of a Product class. The Creator's 
 * subclasses usually provide the implementation of this method.
 */
abstract class Logistic {
    abstract create(): Transportable;
    sendCargo(meansOfTransport: Transportable): void {
        meansOfTransport.deliver();
    }
}

export class RoadLogistic extends Logistic {
    create(): Transportable {
        return new Truck();
    }
}
export class SeaLogistic extends Logistic {
    create(): Transportable {
        return new Ship();
    }
}

export default class FactoryMethod {
    constructor(private logistic: Logistic) {}
    create = this.logistic.create;
    send = this.logistic.sendCargo;
}
