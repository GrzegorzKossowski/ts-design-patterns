class Singleton {
  static #instance: Singleton;
  private constructor() {}
  public static get instance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }
  public businessLogic() {
    console.log(`Business logic of ${<any>this.constructor.name}`);
  }
}

export default class {
  static run() {
    const p1 = Singleton.instance;
    const p2 = Singleton.instance;

    p1 === p2
      ? console.log("Same instance")
      : console.log("Different instance");
  }
}
