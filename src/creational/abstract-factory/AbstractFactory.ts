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

interface AbstractFactory {
    createCavlary(): Cavlaryable;
    createArcher(): Archerable;
    createFootman(): Footmanable;
}
/**
 * Zaimplementuj zestaw konkretnych klas fabrycznych — po jednym
 * dla każdego wariantu produktu.
 */
class HumanFactory implements AbstractFactory {
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
class OrcFactory implements AbstractFactory {
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

class MainFactory{
    constructor(private factory: AbstractFactory){}
    createCavlary = this.factory.createCavlary
    createArcher = this.factory.createArcher
    createFootman = this.factory.createFootman
}

export default class {
    static run() {
        let abstractFactory = new MainFactory(new HumanFactory());
        const humanCavlary = abstractFactory.createCavlary();
        const humanArcher = abstractFactory.createArcher();
        humanCavlary.charge();
        humanArcher.shoot();
        console.log('+');
        abstractFactory = new MainFactory(new OrcFactory());
        const orcCavlary = abstractFactory.createCavlary();
        const orcFootman = abstractFactory.createFootman();
        orcCavlary.charge();
        orcFootman.attack();
    }
}
