// indexable type
interface Person {
    name: string;
    hello():void;
    // barthDay?: string;
}

const person: Person = {
    name: 'Mark', hello: () => {
        return ''
    }
}


function hello(p: Person): void {
    console.log(`안녕하세요 ${p.name}`)
}


