import AbstractFactory from './creational/AbstractFactory';
import Builder from './creational/Builder';
import FactoryMethod from './creational/FactoryMethod';
import ChainOrResponsibility from './behavioral/ChainOfResponsibility';
import ChainOrResponsibility2 from './behavioral/ChainOfResponsibility2';
import Command from './behavioral/Command';
import Command2 from './behavioral/Command2';

/**
 * Factory Method
 * --------------
 * 
 */
console.log(`\nFactory Method\n--------------------\n`);
FactoryMethod.run()

/**
 * Abstract Factory
 * ------------------
 * 
 */
console.log(`\n========================`);
console.log(`\nAbstract Factory\n--------------------\n`);
AbstractFactory.run()


/**
 * Builder
 * --------------
 * 
 */
console.log(`\n========================`);
console.log(`\nBuilder\n--------------------\n`);
Builder.run()

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

/**
 * Command
 * -----------------------
 * 
 */
console.log(`\n========================`);
console.log(`\nCommand\n--------------------\n`);
const command = new Command();
command.run();

console.log(`\n========================`);
console.log(`\nCommand 2 - Light version\n--------------------\n`);
const remoteControll = new Command2();
remoteControll.run();
