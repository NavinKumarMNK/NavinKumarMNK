class NameField {
    constructor(name){
        const field = "Hello";
        this.name = name;
        this.sayHello = () => {
            console.log(field + " " + this.name);
        }
    }
}

class NameGenerator {
    constructor() {
        this.names = [];
        console.log(this);
        console.log(this.addName); 
        this.print.bind(this);
    }

    addName(name) {
        const namef = new NameField(name);
        console.log(this);
        this.names.push(namef);
    }

    print = () => {
        console.log(this);
        this.names.forEach((name) => {
            name.sayHello();
        }
        );
    }
}


const gen = new NameGenerator();