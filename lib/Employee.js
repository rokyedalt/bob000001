class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }

    getName() {
        console.log(`Name: ${this.name}`);
    };

    getId() {
        console.log(`Id: ${this.id}`);
    }

    getEmail() {
        //console.log(`Id: ${this.id}`);
    }

    getRole() {

    }
}

module.exports = Employee;