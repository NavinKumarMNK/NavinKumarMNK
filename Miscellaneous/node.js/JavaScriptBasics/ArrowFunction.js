const helloWorld = (name, string) => {
    console.log(string + name);
}
helloWorld("Mega", "Hello ");

const add = (a, b) => a + b;
console.log(add(1, 2));

const person = {firstName : "Mega", lastName : "MNK"};
const printPerson = ({firstName, lastName}) => {
    return firstName + " " + lastName;
}

const printPerson1 = (person) => {
    return person.firstName + " " + person.lastName;
}

console.log(printPerson(person));

// new syntax
const person1 = {
    firstName : "Mega",
    lastName : "MNK",
    print : () => {
        console.log(this.firstName + " " + this.lastName);
    },
    print_new() {
        console.log(this.firstName + " " + this.lastName);
    }
};
person1.print();
person1.print_new();