class TypescriptDefaultType {
    constructor() {
    }
}

const ss = new TypescriptDefaultType();

let myName = 'mark';



// Union Type

let aa: any;
let bb: string | number;
type StringOrNumber = string | number;

bb = 'string'
bb = 0;

function stringNumberTest(arg: StringOrNumber): StringOrNumber { // 필요할 때 마다 string | numbe 선언 귀찮음
    return arg
}

let input = [1, 2];
let [first, second] = input;

function f([fFirst, fSecond]: [number, number]) {
    console.log(fFirst);
    console.log(fSecond);
}

f([1, 2])

// array type
let [firsts, ...rest] = [1,2,3,4]
console.log(firsts)
console.log(rest)

// tuple type
let tuple: [number, string, boolean] = [7, 'hello', true]
let [a, b, c] = tuple;

console.log('tuple is', tuple)
