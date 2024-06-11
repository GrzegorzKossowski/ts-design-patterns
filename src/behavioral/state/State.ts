/**
 * The Context defines the interface of interest to clients. It also maintains a
 * reference to an instance of a State subclass, which represents the current
 * state of the Context.
 */
class Context {
  constructor(private _state: State) {
    this._state.setContext(this);
  }
  changeState(state: State) {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this._state = state;
    this._state.setContext(this);
  }
  workHard = () => {
    this._state.workHard();
  };
  rest() {
    this._state.rest();
  }
}

abstract class State {
  protected context: Context | null = null;
  setContext(context: Context) {
    this.context = context;
  }
  abstract workHard(): void;
  abstract rest(): void;
}

class StateA extends State {
  workHard(): void {
    console.log("StateA: I work hard with a shovel.");
  }
  rest(): void {
    console.log("StateA: I rest in the shade of a birch tree");
    console.log("StateA: Pass my work to sth. better than me. I can do that.");
    console.log(`StateA: change to ${StateB.name}`);
    this.context?.changeState(new StateB());
  }
}

class StateB extends State {
  workHard(): void {
    console.log("StateB: I work smart on the tractor.");
  }
  rest(): void {
    console.log("StateB: I relax at the spa.");
  }
}

export default class {
  static run() {
    const context = new Context(new StateA());
    context.workHard();
    context.rest();
    context.workHard();
    context.rest();
    console.log("Main: context can change state");
    context.changeState(new StateA());
    context.workHard();
    context.changeState(new StateB());
    context.workHard();
  }
}
