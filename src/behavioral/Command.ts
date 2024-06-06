/**
 * The Command interface declares a method for executing a command.
 */
interface Command {
    execute(): void;
}
/**
 * Some commands can implement simple operations on their own.
 */
class SimpleCommand implements Command {
    constructor(private payload: string) {}
    execute(): void {
        console.log(`Simple command is running, show payload: ${this.payload}`);
    }
}
/**
 * Complex commands can accept one or several receiver objects along with
 * any context data via the constructor.
 */
class ComplexCommand implements Command {
    constructor(private receiver: Receiver, private baar: string) {}
    execute(): void {
        this.receiver.doSomeStuff(this.baar);
    }
}
/**
 * The Receiver classes contain some important business logic.
 */
class Receiver {
    doSomeStuff(param: string) {
        console.log(`Do sth. with param: ${param}`);
    }
}
class Invoker {
    private onStart: Command | undefined = undefined;
    private onFinish: Command | undefined = undefined;

    /**
     * Initialize commands.
     */
    setOnStart(command: Command) {
        this.onStart = command;
    }
    setOnFinish(command: Command) {
        this.onFinish = command;
    }
    doSthImportant(): void {
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        console.log(`Man in the middle`);

        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }
    // guard method
    private isCommand(object: any): object is Command {
        return object?.execute !== undefined;
    }
}

export default class {
    static run() {
        // create invoker
        const invoker = new Invoker();
        // create simple command object
        const simpleCommand = new SimpleCommand('FooBaar');
        // create receiver for complex command
        const receiver = new Receiver();
        // create complex command
        const complexCommand = new ComplexCommand(
            receiver,
            'CC param: small baar string'
        );
        // set invoker commands
        invoker.setOnStart(simpleCommand);
        invoker.setOnFinish(complexCommand);
        // execute
        invoker.doSthImportant();
    }
}
