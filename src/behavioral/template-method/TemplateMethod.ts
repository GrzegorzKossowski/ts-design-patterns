abstract class TemplateMethod {
  public templateMethod(): void {
    this.hook1()
    this.baseOperation1()
    this.requiredOperation1()
    this.baseOperation2()
    this.requiredOperation2()
    this.hook2()
  }
  protected baseOperation1(): void {
    console.log("TemplateMethod: Do base operation 1");
  }
  protected baseOperation2(): void {
    console.log("TemplateMethod: Do base operation 2");
  }
  protected abstract requiredOperation1(): void;
  protected abstract requiredOperation2(): void;
  protected hook1(): void {}
  protected hook2(): void {}
}

class ConcreteClass1 extends TemplateMethod {
    protected requiredOperation1(): void {
        console.log(`ConcreteClass1: implementing requiredOperation1()`);
        
    }
    protected requiredOperation2(): void {
        console.log(`ConcreteClass1: implementing requiredOperation2()`);
    }
    protected hook1(): void {
        console.log(`ConcreteClass1: implementing hook1()`);
    }
}

class ConcreteClass2 extends TemplateMethod {
    protected requiredOperation1(): void {
        console.log(`ConcreteClass2: implementing requiredOperation1()`);
        
    }
    protected requiredOperation2(): void {
        console.log(`ConcreteClass2: implementing requiredOperation2()`);
    }
    protected hook2(): void {
        console.log(`ConcreteClass2: implementing hook2()`);
    }
}

class ClientClass {
    private _template: TemplateMethod | undefined = undefined
    setTemplateClass(template: TemplateMethod){
        this._template = template
    }
    get template(){
        return this._template
    }
}

export default class {
  static run() {
    const client = new ClientClass()

    console.log('\n--- ConcreteClass1 ---');
    client.setTemplateClass(new ConcreteClass1())
    client.template?.templateMethod()
    
    console.log('\n--- ConcreteClass2 ---');    
    client.setTemplateClass(new ConcreteClass2())
    client.template?.templateMethod()
  }
}
