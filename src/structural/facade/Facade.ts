class Facade {
  constructor(private subsystem1: Subsystem1, private subsystem2: Subsystem2) {}
  public operation() {
    this.subsystem1.operation1();
    this.subsystem2.operation1();

    this.subsystem1.operation2();
    this.subsystem2.operation2();
  }
}
class Subsystem1 {
  operation1() {
    console.log(`Subsystem1: Operation1`);
  }
  operation2() {
    console.log(`Subsystem1: Operation2`);
  }
}
class Subsystem2 {
  operation1() {
    console.log(`Subsystem2: Operation1`);
  }
  operation2() {
    console.log(`Subsystem2: Operation2`);
  }
}

export default class {
  static run() {
    const facade = new Facade(new Subsystem1(), new Subsystem2())
    facade.operation()
  }
}
