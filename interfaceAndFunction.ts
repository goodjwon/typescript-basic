interface HelloPerson {
    (name: string, age?: number): void
}

let helloPerson: HelloPerson = (person)=> {
    console.log(person)
}

helloPerson("Pakr", 35)