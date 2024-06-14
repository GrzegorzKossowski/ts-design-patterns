import AbstractFactory from './creational/abstract-factory/AbstractFactory';
import Builder from './creational/builder/Builder';
import FactoryMethod from './creational/factory-method/FactoryMethod';
import ChainOrResponsibility from './behavioral/chain-of-responsibility/ChainOfResponsibility';
import ChainOrResponsibility2 from './behavioral/chain-of-responsibility/ChainOfResponsibility2';
import Command from './behavioral/command/Command';
import Command2 from './behavioral/command/Command2';
import Iterator from './behavioral/iterator/Iterator';
import Mediator from './behavioral/mediator/Mediator';
import Memento from './behavioral/memento/Memento';
import Observer from './behavioral/observer/Observer';
import ObserverEventManager from './behavioral/observer/ObserverEventManager';
import State from './behavioral/state/State';
import Strategy from './behavioral/strategy/Strategy';
import TemplateMethod from './behavioral/template-method/TemplateMethod';
import Prototype from './creational/prototype/Prototype';
import Singleton from './creational/singleton/Singleton';
import Adapter from './structural/adapter/Adapter';
import Bridge from './structural/bridge/Bridge';
import RemoteDevice from './structural/bridge/RemoteDevice';
import Decorator from './structural/decorator/Decorator';
import Facade from './structural/facade/Facade';
import Proxy from './structural/proxy/Proxy';

//===========================================
console.log('CREATIONAL');
// * Factory Method
console.log(`\nFactory Method\n--------------------\n`);
FactoryMethod.run()

// * Abstract Factory
console.log(`\n========================`);
console.log(`\nAbstract Factory\n--------------------\n`);
AbstractFactory.run()

// * Builder
console.log(`\n========================`);
console.log(`\nBuilder\n--------------------\n`);
Builder.run()

// * nPrototype
console.log(`\n========================`);
console.log(`\nPrototype\n--------------------\n`);
Prototype.run()

// * Singleton
console.log(`\n========================`);
console.log(`\nSingleton\n--------------------\n`);
Singleton.run()

/**/
//===========================================
console.log('STRUCTURAL');
// * Adapter
console.log(`\n========================`);
console.log(`\nAdapter\n--------------------\n`);
Adapter.run()

// * Bridge
console.log(`\n========================`);
console.log(`\nBridge\n--------------------\n`);
Bridge.run()
console.log('------------------ Remote <-> Device');
RemoteDevice.run()

// * Decorator
console.log(`\n========================`);
console.log(`\nDecorator\n--------------------\n`);
Decorator.run()

// * Facade
console.log(`\n========================`);
console.log(`\nFacade\n--------------------\n`);
Facade.run()

// * Flyweight
// TODO: here

// * Proxy
console.log(`\n========================`);
console.log(`\nFacade\n--------------------\n`);
Proxy.run()



/**
//===========================================
console.log('BEHAVIORAL');
// * Chain of Responsibility
console.log(`\n========================`);
console.log(`\nChain of Responsibility\n--------------------\n`);
ChainOrResponsibility.run()
console.log(`\n========================`);
console.log(`\nChain of Responsibility v2\n--------------------\n`);
ChainOrResponsibility2.run()

// * Command
console.log(`\n========================`);
console.log(`\nCommand\n--------------------\n`);
Command.run();
console.log(`\n========================`);
console.log(`\nCommand 2 - Light version\n--------------------\n`);
Command2.run();

console.log(`\n========================`);
console.log(`\nIterator\n--------------------\n`);
Iterator.run()

console.log(`\n========================`);
console.log(`\nMediator\n--------------------\n`);
Mediator.run()

console.log(`\n========================`);
console.log(`\nMemento\n--------------------\n`);
Memento.run()

console.log(`\n========================`);
console.log(`\nObserver\n--------------------\n`);
Observer.run()
console.log(`\n========================`);
console.log(`\nObserver with EventManager\n--------------------\n`);
ObserverEventManager.run()

console.log(`\n========================`);
console.log(`\nState\n--------------------\n`);
State.run()

console.log(`\n========================`);
console.log(`\nStrategy\n--------------------\n`);
Strategy.run()

console.log(`\n========================`);
console.log(`\nTemplate Method\n--------------------\n`);
TemplateMethod.run()
/**/
