interface Cavlaryable {
    charge(): void;
}
interface Archerable {
    shoot(): void;
}
interface Footmanable {
    attack(): void;
}

/**
 * Stwórz mapę poszczególnych typów produktów z uwzględnieniem wariantów 
 * w jakich mogą one być dostępne. Dla każdego typu produktu zaimplementuj
 * abstrakcyjny interfejs. 
 */
class HumanCavlary implements Cavlaryable {
    charge(): void {
        console.log(`Human Cavlary Attacks!!!`);
    }
}
class HumanArcher implements Archerable {
    shoot(): void {
        console.log(`Archers ready? Steady? Loooooose! (ava Fire)`);
    }
}
class HumanFootman implements Footmanable {
    attack(): void {
        console.log(`Footmen forward! Keep formation! Attaaaaccckkk!!!`);
    }
}
class OrcCavlary implements Cavlaryable {
    charge(): void {
        console.log(`Orc Cavlary attacks in disarray!!!`);
    }
}
class OrcArcher implements Archerable {
    shoot(): void {
        console.log(`Orks ready? Steady? Throw!`);
    }
}
class OrcFootman implements Footmanable {
    attack(): void {
        console.log(
            `Footmen forward! Keep formation! Whera are yo goin' moron!!!`
        );
    }
}

/**
 * Zadeklaruj interfejs fabryki abstrakcyjnej zawierający zestaw metod
 * kreacyjnych wszystkich produktów abstrakcyjnych.
 */
interface IAbstractFactory {
    createCavlary(): Cavlaryable;
    createArcher(): Archerable;
    createFootman(): Footmanable;
}
/**
 * Zaimplementuj zestaw konkretnych klas fabrycznych — po jednym 
 * dla każdego wariantu produktu.
 */
export class HumanFactory implements IAbstractFactory {
    createCavlary(): Cavlaryable {
        return new HumanCavlary();
    }
    createArcher(): Archerable {
        return new HumanArcher();
    }
    createFootman(): Footmanable {
        return new HumanFootman();
    }
}
export class OrcFactory implements IAbstractFactory {
    createCavlary(): Cavlaryable {
        return new OrcCavlary();
    }
    createArcher(): Archerable {
        return new OrcArcher();
    }
    createFootman(): Footmanable {
        return new OrcFootman();
    }
}

export default class AbstractFactory {
    constructor(private _factory: IAbstractFactory) {}
    createCavlary = this._factory.createCavlary;
    createArcher = this._factory.createArcher;
    createFootman = this._factory.createFootman;
}
