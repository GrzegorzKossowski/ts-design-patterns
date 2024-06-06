interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): void;
}

abstract class BaseHandler implements Handler {
    private nextHandler: Handler | null = null;
    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }
    handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        } else {
            console.log(`Can't handle request ${request}`);
        }
    }
}

class LvlOneSupport extends BaseHandler {
    public handle(request: string): void {
        if (request === 'reset') {
            console.log('Reseting password');
        } else {
            console.log(
                `Can't handle request ${request} on lvl one, passing on`
            );
            super.handle(request);
        }
    }
}
class LvlTwoSupport extends BaseHandler {
    public handle(request: string): void {
        if (request === 'system') {
            console.log('Reseting system');
        } else {
            console.log(
                `Can't handle request ${request} on lvl two, passing on`
            );
            super.handle(request);
        }
    }
}
class LvlThreeSupport extends BaseHandler {
    public handle(request: string): void {
        if (request === 'network') {
            console.log('Reseting network');
        } else {
            console.log(
                `Can't handle request ${request} on lvl three, passing on`
            );
            super.handle(request);
        }
    }
}

export default class {
    run() {
        const levelOne = new LvlOneSupport();
        const levelTwo = new LvlTwoSupport();
        const levelThree = new LvlThreeSupport();

        levelOne.setNext(levelTwo).setNext(levelThree);

        const requests = ['password', 'system', 'network', 'Lorem ipsum'];

        requests.forEach(req => {
            console.log('Request', req);
            levelOne.handle(req);
            console.log('---\n');
        });
    }
}
