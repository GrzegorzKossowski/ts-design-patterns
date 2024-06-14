class Abstraction {
  constructor(protected implementation: Implementation) {}

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: operation with:\n${result}\n`;
  }
}
class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: operation with:\n${result}\n`;
  }
}

interface Implementation {
  operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation {
  operationImplementation(): string {
    return "ConcreteImplementationA: operationImplementation";
  }
}
class ConcreteImplementationB implements Implementation {
  operationImplementation(): string {
    return "ConcreteImplementationB: operationImplementation";
  }
}

function clientCode(abstraction: Abstraction) {}

export default class {
  static run() {
    let implementation = new ConcreteImplementationA();
    let abstraction = new Abstraction(implementation);
    console.log(abstraction.operation());

    implementation = new ConcreteImplementationB();
    abstraction = new ExtendedAbstraction(implementation);
    console.log(abstraction.operation());
  }
}
