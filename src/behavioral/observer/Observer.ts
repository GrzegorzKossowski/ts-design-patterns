// observer, subscriber
interface Observer {
    update(subject: Subject): void;
}

class ConcreteObserverOne implements Observer {
    private subject: Subject | null = null;

    detachMe(): void {
        if(this.subject) {
          this.subject.detach(this)
        }
    }
    update(subject: Subject): void {
      // for detachement purpouse only  
      if (!this.subject) this.subject = subject;

        const condition = subject.state >= 3 && subject.state <= 7;
        if (subject instanceof ConcreteSubject && condition) {
            console.log(`ConcreteObserverONE: reacted to event >=3 & <=7`);
        }
    }
}


class ConcreteObserverTwo implements Observer {
    update(subject: Subject): void {
        const condition = subject.state <= 4 && subject.state <= 6;
        if (subject instanceof ConcreteSubject && condition) {
            console.log(`ConcreteObserverTWO: reacted to event <=4 && <=6`);
        }
    }
}

/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
interface Subject {
    // Attach an observer to the subject.
    attach(observer: Observer): void;
    // Detach an observer from the subject.
    detach(observer: Observer): void;
    // Notify all observers about an event.
    notify(): void;
    state: number;
}

// concrete publisher, subject etc.
class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    // state is public to avoid adding it as getter to interface
    state: number = 0;

    attach(observer: Observer): void {
        const isAttached = this.observers.includes(observer);
        if (isAttached) {
            return console.log(`Subject > Observer already exists.`);
        }
        this.observers.push(observer);
        console.log(`Subject > observer attached`);
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log(`Subject: no such observer`);
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Observer detached');
    }
    notify(): void {
        console.log('Subject: notifying observers...');
        this.observers.forEach(obs => {
            obs.update(this);
        });
    }
    businessLogic(): void {
        console.log('Subject: doing my math...');
        this.state = Math.floor(Math.random() * 10 + 1);
        console.log(`My state is now: ${this.state}`);
        this.notify();
    }
}

export default class {
    static run() {
        const publisher = new ConcreteSubject();

        const observerOne = new ConcreteObserverOne();
        const observerTwo = new ConcreteObserverTwo();

        publisher.attach(observerOne);
        publisher.attach(observerTwo);

        publisher.businessLogic();
        publisher.businessLogic();
        publisher.businessLogic();

        console.log('\nDetaching observer TWO')
        publisher.detach(observerTwo);

        publisher.businessLogic();

        console.log('\nObserver ONE detached itself');
        observerOne.detachMe()
        
        console.log('No subscribes attached?');
        
        publisher.businessLogic();
    }
}
