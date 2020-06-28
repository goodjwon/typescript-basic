class Person {
    constructor(protected name: string, protected age: number) {}
    hello():void{
        console.log(this.name);
    }
}


const person: Person = new Person('Mark', 34);
person.hello();

class Child extends Person{
    constructor() {
        super('Makr Jr', 5);
    }
}

const child: Child = new Child();
child.hello()