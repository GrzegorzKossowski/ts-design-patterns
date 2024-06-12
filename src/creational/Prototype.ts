import { prototype } from "events";

interface Cloneable {
  clone(): Prototype;
}
class Prototype implements Cloneable {
  primitiveValue: any;
  component: object | null = null;
  circularReference: ComponentWithBackRef | null = null;
  setValues(primitive: any, comp: object, circRef: ComponentWithBackRef) {
    this.primitiveValue = primitive;
    this.component = comp;
    this.circularReference = circRef;
  }
  clone(): this {
    // copy primitives and references
    const clone = Object.create(this);
    // copy object via creating new one
    clone.component = Object.create(this.component);
    // copy references
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}

class ComponentWithBackRef {
  constructor(public prototype: Prototype) {}
}

export default class {
  static run() {
    const p1 = new Prototype();
    p1.setValues(245, new Date(), new ComponentWithBackRef(p1));
    const p2 = p1.clone()
    if(p1.primitiveValue === p2.primitiveValue) {
        console.log('Primitives copied!');        
    } else {
        console.log('Primitives NOT copied');
        
    }
    if(p1.component === p2.component) {
        console.log('Component NOT copied!');        
    } else {
        console.log('Component copied');
        
    }
    if(p1.circularReference === p2.circularReference) {
        console.log('Back Ref Comp linked to original...!');        
    } else {
        console.log('Back Ref Comp cloned');
        
    }
  }
}
