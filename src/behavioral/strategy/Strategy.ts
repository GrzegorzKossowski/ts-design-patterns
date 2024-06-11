interface Strategy<T = string> {
  execute(data: T): void;
}

class StrategyA implements Strategy {
  execute(data: string): void {
    console.log(data.toLowerCase());
  }
}
class StrategyB implements Strategy {
  execute(data: string): void {
    console.log(data.toUpperCase());
  }
}
class StrategyC implements Strategy {
  execute(data: string): void {
    console.log(data.split(" ").join(""));
  }
}

class Context {
  constructor(private _strategy: Strategy) {}
  setStrategy(strategy: Strategy) {
    this._strategy = strategy;
  }
  execute = (data: string): void => {
    this._strategy.execute(data);
  };
}

export default class {
  static run() {
    const context = new Context(new StrategyA());
    context.execute("Lorem ipsum sid dolor et mea cupla.");
    context.setStrategy(new StrategyB());
    context.execute("Lorem ipsum sid dolor et mea cupla.");
    context.setStrategy(new StrategyC());
    context.execute("Lorem ipsum sid dolor et mea cupla.");
  }
}
