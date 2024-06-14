interface Subject {
  request(): void;
}
class RealSubject implements Subject {
  request(): void {
    setTimeout(() => {
      console.log("RealSubject: handling request.\nDone!");
    }, 1000);
  }
}

class SomeProxy implements Subject {
  constructor(private realSubject: RealSubject) {}

  request(): void {
    console.log("SomeProxy: requesting...");
    this.realSubject.request();
  }
}

export default class {
  static run() {
    const db = new RealSubject();
    const proxy = new SomeProxy(db);
    proxy.request();
  }
}
