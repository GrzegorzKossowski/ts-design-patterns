/**
 * The Concrete Memento contains the infrastructure for storing
 * the Originator's state. Snapshot of state
 */
interface Memento<T = string> {
    getState(): T;
    getName(): string;
    getDate(): string;
}
class ConcreteMemento implements Memento {
    private date: string;
    constructor(private state: string) {
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    getState(): string {
        return this.state
    }
    getName(): string {
        return `${this.date} / (${this.state.substring(0,9)}...)`
    }
    getDate(): string {
        return this.date
    }
}

/**
 * The Originator class can produce snapshots of its own state,
 * as well as restore its state from snapshots when needed. *
 * It can be Editor or anything
 */
interface Originator {
    createSnapshot(): Memento;
    restore(memento: Memento): void;
}
class ConcreteOriginator implements Originator {
    constructor(private state: string) {
        console.log(`Initial state is ${state}`);
    }
    doSomething():void{
      this.state = Math.random().toString(16).slice(2,12)
      console.log(`Originator: My state changed to: ${this.state}`);
    }

    createSnapshot(): Memento<string> {
        return new ConcreteMemento(this.state);
    }
    restore(memento: Memento): void {
      console.log(`Originator: Restoring state to ${memento.getName()}`);
      this.state = memento.getState()      
    }
}
/**
 * The Caretaker doesn't depend on the Concrete Memento class.
 * Therefore, it doesn't have access to the originator's state,
 * stored inside the memento. It works with all mementos via the
 * base Memento interface.
 */
interface Caretaker {
    backup(): void;
    undo(): void;
    showHistory(): void;
}
class ConcreteCaretaker implements Caretaker {
    private mementos: Memento[] = [];
    constructor(private originator: Originator) {}
  backup(): void {
    const snapshot = this.originator.createSnapshot();
    this.mementos.push(snapshot)
    console.log(`Saving originator's state to: ${snapshot.getName()}`);
    
  }
  undo(): void {
    if(!this.mementos.length) return
    const memento = this.mementos.pop()
    console.log(`Caretaker: Restoring state to ${memento?.getName()}`);
    this.originator.restore(memento!)
  }
  showHistory(): void {
    console.log(`History:`);
    
    this.mementos.forEach(el => {
      console.log(el.getName(), el.getDate());
      
    })
  }
}

export default class {
    static run() {
        // object that changes it's state, and wants to save it (źródło, edytor)
        const originator = new ConcreteOriginator(
            'This is initial state START'
        );
        // object that manages saved state (zarządca, caretaker)
        const caretaker = new ConcreteCaretaker(originator);

        caretaker.backup()
        caretaker.showHistory()
        originator.doSomething()
        originator.doSomething()
        caretaker.backup()
        caretaker.backup()
        caretaker.showHistory()
        caretaker.undo()

    }
}
