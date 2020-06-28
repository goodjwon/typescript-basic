class Person {
    private name: string;
    private age: number;
    protected num: number;

    constructor(name: string) {
        this.name = name;
    }
}


const person = new Person('Jwon');
// not use age


class Child extends Person {
    constructor(name: string) {
        super(name);
        this.num = 203040;
    }
}

const child:Child = new Child('Eunseo');
console.log(child)
