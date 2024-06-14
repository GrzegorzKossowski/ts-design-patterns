interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  operation(): string {
    return "ConcreteComponent: operation()";
  }
}

class Decorator implements Component {
  constructor(private component: Component) {}
  operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecorator extends Decorator {
  public operation(): string {
    return `ConcreteDecorator: ${super.operation()}`;
  }
}

export default class {
  static run() {
    const component = new ConcreteComponent();
    console.log(`Simple component: ${component.operation()}`);
    const decorator = new ConcreteDecorator(component);
    console.log(decorator.operation());
  }
}
