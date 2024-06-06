interface Command {
    execute(): void;
    undo(): void;
}

//  Receivers
class Light {
    // simple starting state
    private isOn: boolean = false;
    public turnOn(): void {
        this.isOn = true;
        console.log(`The light is ON`);
    }
    public turnOff(): void {
        this.isOn = false;
        console.log(`The light is OFF`);
    }
}
class Shutter {
    private isOpen: boolean = false;
    public open() {
        this.isOpen = true;
        console.log(`The shutter is OPEN`);
    }
    public close() {
        this.isOpen = false;
        console.log(`The shutter is CLOSE`);
    }
}

// Commands
class LightOnCommand implements Command {
    constructor(private light: Light) {}
    execute(): void {
        this.light.turnOn();
    }
    undo(): void {
        this.light.turnOff();
    }
}
class LightOffCommand implements Command {
    constructor(private light: Light) {}
    execute(): void {
        this.light.turnOff();
    }
    undo(): void {
        this.light.turnOn();
    }
}
class ShutterOpenCommand implements Command {
    constructor(private shutter: Shutter) {}
    execute(): void {
        this.shutter.open();
    }
    undo(): void {
        this.shutter.close();
    }
}
class ShutterCloseCommand implements Command {
    constructor(private shutter: Shutter) {}
    execute(): void {
        this.shutter.close();
    }
    undo(): void {
        this.shutter.open();
    }
}

// Invoker
class RemoteControll {
    private commands: Command[] = [];
    private undoCommands: Command[] = [];

    public setCommand(command: Command): void {
        this.commands.push(command);
        command.execute();
    }
    public undo(): void {
        const command = this.commands.pop();
        if (command) {
            command.undo();
            this.undoCommands.push(command);
        }
    }
    public redo(): void {
        const command = this.undoCommands.pop();
        if (command) {
            this.commands.push(command);
            command.execute();
        }
    }
}

export default class {
    run() {
        const light = new Light();
        const shutter = new Shutter();

        const lightOn = new LightOnCommand(light);
        const lightOff = new LightOffCommand(light);
        const shutterOpen = new ShutterOpenCommand(shutter);
        const shutterClose = new ShutterCloseCommand(shutter);

        const remoteControll = new RemoteControll();

        remoteControll.setCommand(lightOn);
        remoteControll.setCommand(shutterOpen);
        remoteControll.undo();
        remoteControll.undo();
        remoteControll.redo();
        remoteControll.redo();
    }
}
