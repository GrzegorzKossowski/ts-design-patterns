/**
 * The Handler interface declares a method for building the chain of handlers.
 * It also declares a method for executing a request.
 * It gets two generc arguments, strin as default.
 */
interface Handler<T = string, U = string> {
    setNext(handler: Handler<T, U>): Handler<T, U>;
    handle(request: T): U;
}

abstract class AbstractHandler implements Handler<string, string> {
    private nextHandler: Handler | undefined = undefined;
    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        // Returning a handler lets link handlers in a way like this:
        // someHandler.setNext(fooHandler).setNext(baarHandler);
        return handler;
    }
    public handle(request: string): string {
        // if nextHandler, just let it do it's job
        if (this.nextHandler) return this.nextHandler.handle(request);
        // return last request
        return request;
    }
}

class ValidValueHandler extends AbstractHandler {
    // override parent class to handle with request or pass to parent
    public handle(request: string): string {
        console.log(request);
        if (request !== 'Lorem Ipsum is simply dummy text.') {
            // do sth. with request
            request = 'Lorem Ipsum is simply dummy text.';
        }
        // return request via parent class ()
        console.log(request);
        return super.handle(request);
    }
}

class RemoveSpacesHandler extends AbstractHandler {
    public handle(request: string): string {
        request = request.split(' ').join('').toString();
        // or request = str.replace(/\s+/g, '');
        console.log(request);
        return super.handle(request);
    }
}

class LoremReplacer extends AbstractHandler {
    public handle(request: string): string {
        if (request.includes('Lorem'))
            request = request.replace('Lorem', 'Marem');
        return super.handle(request);
    }
}

class CapitalizeStringHandler extends AbstractHandler {
    public handle(request: string): string {
        request = request.toUpperCase();
        console.log(request);
        return super.handle(request);
    }
}

export default class ChainOrResponsibility {
    run() {
      // links in the chain
        const validValueHandler = new ValidValueHandler();
        const loremReplacer = new LoremReplacer();
        const removeSpacesHandler = new RemoveSpacesHandler();
        const capitalizeStringHandler = new CapitalizeStringHandler();

        console.log('Simple chain of responsibility\n');
        // create some chain, starting from...:
        validValueHandler
            .setNext(removeSpacesHandler)
            .setNext(capitalizeStringHandler);
        validValueHandler.handle('Some very long sentence?');

        console.log('');
        // create other chain
        validValueHandler
            .setNext(loremReplacer)
            .setNext(capitalizeStringHandler);
        validValueHandler.handle('Other very short string.');
    }
}
