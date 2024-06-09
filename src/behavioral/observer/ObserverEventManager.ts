// TODO: unsubscribe not implemented yet

enum EventName {
    ERROR = 'error',
    EMAIL = 'email',
}

interface Subscriber<T = string> {
    // main and only method in this interface
    update(data: T): void;
    // for logging purpose only
    id: string;
}

class ConcreteSubscriber implements Subscriber {
    private _id: string = Math.random().toString(16).slice(2, 8);
    update(data: string): void {
        console.log(
            `ConcreteSubscriber ${this.id}: just recived data: ${data}`
        );
    }
    get id() {
        return this._id;
    }
}

interface EventListeners {
    [event: string]: Subscriber[];
}

class EventManager {
    private listeners: EventListeners = {};

    subscribe(event: EventName, subscriber: Subscriber) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        if (this.listeners[event].find(element => element === subscriber)) {
            console.log(
                `EventManager: Subscriber ${subscriber.id} already subscribed...`
            );
            return;
        }
        this.listeners[event].push(subscriber);
        console.log(`EventManager: Subscriber ${subscriber.id} added.`);
    }
    notify(event: EventName, data: string) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(subscriber =>
                subscriber.update(data)
            );
        }
    }
}

class Publisher {
    constructor(private eventManager: EventManager) {}
    doSomeError() {
        this.eventManager.notify(EventName.ERROR, 'Some Error');
    }
    doSomeEmail() {
        this.eventManager.notify(EventName.EMAIL, 'Some Email to our clients!');
    }
}

export default class {
    static run() {
        // some subscribers
        const subscriberOne = new ConcreteSubscriber();
        const subscriberTwo = new ConcreteSubscriber();
        const subscriberThree = new ConcreteSubscriber();

        // ---
        const eventManager = new EventManager();
        eventManager.subscribe(EventName.EMAIL, subscriberOne);
        eventManager.subscribe(EventName.EMAIL, subscriberTwo);
        eventManager.subscribe(EventName.EMAIL, subscriberThree);

        console.log(`Main: try to subscribe again`);
        eventManager.subscribe(EventName.EMAIL, subscriberThree);

        console.log(
            `Main: subscribe ${subscriberThree.id} to other event: ${EventName.ERROR}`
        );
        eventManager.subscribe(EventName.ERROR, subscriberThree);

        const publisher = new Publisher(eventManager);

        publisher.doSomeEmail();
        publisher.doSomeError();
    }
}
