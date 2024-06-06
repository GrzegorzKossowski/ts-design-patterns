class Car {
    parts: string[] = [];
    listParts() {
        this.parts.map(part => {
            console.log(`Car: Make ${part}`);
        });
    }
}
class Manual {
    pages: string[] = [];
    listPages() {
        this.pages.map(page => {
            console.log(`Chapter: ${page}`);
        });
    }
}

interface Builder {
    makeChassis(): void;
    makeInterior(): void;
    makeBody(): void;
}

class CarBuilder implements Builder {
    private product: Car = new Car();
    reset() {
        this.product = new Car();
    }

    makeChassis(): void {
        this.product?.parts.push('Chassis');
    }
    makeInterior(): void {
        this.product?.parts.push('Interior');
    }
    makeBody(): void {
        this.product?.parts.push('Body');
    }
    getCar(): Car {
        const car = this.product;
        this.reset();
        return car;
    }
}
class ManualBuilder implements Builder {
    private product: Manual = new Manual();
    reset() {
        this.product = new Manual();
    }
    makeChassis(): void {
        this.product?.pages.push('Describe Chassis');
    }
    makeInterior(): void {
        this.product?.pages.push('Describe Interior');
    }
    makeBody(): void {
        this.product?.pages.push('Describe Body');
    }
    getManual(): Manual {
        const manual = this.product;
        this.reset();
        return manual;
    }
}
export class Director {
    private builder: Builder | null = null;
    setBuilder(builder: Builder) {
        this.builder = builder;
    }
    /**
     * The Director can construct several product variations using the same
     * building steps.
     */
    createSmallProduct(): void {
        this.builder?.makeChassis();
    }
    createFullProduct(): void {
        this.builder?.makeChassis();
        this.builder?.makeInterior();
        this.builder?.makeBody();
    }
}
/**
 * The client code creates a builder object, passes it to the director and then
 * initiates the construction process. The end result is retrieved from the
 * builder object.
 */
export default class {
    static run() {
        const director = new Director();
        const carBuilder = new CarBuilder();
        director.setBuilder(carBuilder);
        director.createFullProduct();
        carBuilder.getCar().listParts();
        console.log('+');
        const manBuilder = new ManualBuilder();
        director.setBuilder(manBuilder);
        director.createSmallProduct();
        manBuilder.getManual().listPages();
    }
}
