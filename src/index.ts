import AbstractFactory, {
    HumanFactory,
    OrcFactory,
} from './creational/AbstractFactory';
import Builder, { Director } from './creational/Builder';
import FactoryMethod, {
    RoadLogistic,
    SeaLogistic,
} from './creational/FactoryMethod';
import ChainOrResponsibility from './behavioral/ChainOfResponsibility';
import ChainOrResponsibility2 from './behavioral/ChainOfResponsibility2';
import Command from './behavioral/Command';
import Command2 from './behavioral/Command2';

/**
 * Factory Method
 * --------------
 * Korzystaj z Metody Wytwórczej gdy zamierzasz pozwolić użytkującym twą bibliotekę
 * lub framework rozbudowywać jej wewnętrzne komponenty.
 */
console.log(`\nFactory Method\n--------------------\n`);

let factoryMethod = new FactoryMethod(new RoadLogistic());
const truck = factoryMethod.create();
factoryMethod.send(truck);

factoryMethod = new FactoryMethod(new SeaLogistic());
const ship = factoryMethod.create();
factoryMethod.send(ship);

/**
 * Abstract Factory
 * ------------------
 * W programie umieść kod inicjalizujący fabrykę. Kod ten powinien
 * powołać do życia obiekt jednej z konkretnych klas fabrycznych
 * — zależnie od konfiguracji programu, czy też środowiska, w jakim
 * został uruchomiony.
 */
console.log(`\n========================`);
console.log(`\nAbstract Factory\n--------------------\n`);

let abstractFactory = new AbstractFactory(new HumanFactory());
const humanCavlary = abstractFactory.createCavlary();
const humanArcher = abstractFactory.createArcher();
humanCavlary.charge();
humanArcher.shoot();
console.log('+');
abstractFactory = new AbstractFactory(new OrcFactory());
const orcCavlary = abstractFactory.createCavlary();
const orcFootman = abstractFactory.createFootman();
orcCavlary.charge();
orcFootman.attack();

/**
 * Builder
 * --------------
 * The client code creates a builder object, passes it to the director and then
 * initiates the construction process. The end result is retrieved from the
 * builder object.
 */
console.log(`\n========================`);
console.log(`\nBuilder\n--------------------\n`);
Builder.createCar(new Director());
Builder.createManual(new Director());

//===========================================
// behavioral

/**
 * Chain of Responsibility
 * -----------------------
 * CoR lets you pass requests along a chain of handlers. Upon receiving
 * a request, each handler decides either to process the request or to
 * pass it to the next handler in the chain.
 */
console.log(`\n========================`);
console.log(`\nChain of Responsibility\n--------------------\n`);
const chain = new ChainOrResponsibility();
chain.run();

console.log(`\n========================`);
console.log(`\nChain of Responsibility v2\n--------------------\n`);
const chain2 = new ChainOrResponsibility2()
chain2.run()

console.log(`\n========================`);
console.log(`\nCommand\n--------------------\n`);
const command = new Command();
command.run();

console.log(`\n========================`);
console.log(`\nCommand 2 - Light version\n--------------------\n`);
const remoteControll = new Command2();
remoteControll.run();
