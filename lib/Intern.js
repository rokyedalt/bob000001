const Employee = require("./Employee");
const path = require('path')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.templateURL = path.join(__dirname, '../templates/intern.html')
    }

    getSchool() {
        return `${this.school}`;
    }

    getRole() {
        return `Intern`;
    }

    serialize() {
      let serialized = super.serialize()

      serialized.school = this.getSchool()

      return serialized
    }
}

// school

// * getSchool()

// * getRole() // Overridden to return 'Intern'

module.exports = Intern;
