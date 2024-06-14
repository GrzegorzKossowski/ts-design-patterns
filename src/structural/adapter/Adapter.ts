class Target {
  public request(): string {
    return "Target: The default target's behavior.";
  }
}

class Adaptee {
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

class Adapter extends Target {
  constructor(private adaptee: Adaptee) {
    super();
  }
  public request(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

function clientCode(target: Target) {
  console.log(target.request());
}

export default class {
  static run() {
    const target = new Target();
    const adaptee = new Adaptee();
    const adapter = new Adapter(adaptee);

    clientCode(target);
    console.log('Adaptee', adaptee.specificRequest());
    clientCode(adapter);
  }
}
