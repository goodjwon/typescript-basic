interface IPerson {
    name: string;

    hello(): void;
}

class Person implements IPerson {
    name: string = ""


    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`안녕하세요 ${this.name}`)
    }

}

const person: IPerson = new Person('Kaia');

person.hello()
