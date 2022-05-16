'use strict'

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

#surname = 'Watson';
    say=()=> {
        console.log(`User name: ${this.name}${this.#surname}, age ${this._age}`)
    };

    get age() {
        return this._age;
    };

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age
        } else {
            console.log("Недопустимое значение");
        }
    }
}


const alex = new User('Alex', 30);
console.log(alex.surname);
alex.say();