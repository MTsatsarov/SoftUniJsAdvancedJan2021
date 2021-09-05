class Person {
    constructor(firstName, lastName, age, email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }

    toString() {
        return `${firstName} ${lastName} (age: ${age}, email: ${email})`
    }
}


var person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
