const Employee = require("./Employee");
const path = require('path')

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.templateURL = path.join(__dirname, '../templates/manager.html')
    }

    getRole() {
        return `Manager`;
    }

    getOfficeNumber() {
        return `${this.office}`;
    }

    serialize() {
      let serialized = super.serialize()

      serialized.office = this.getOfficeNumber()

      return serialized
    }
}

module.exports = Manager;
