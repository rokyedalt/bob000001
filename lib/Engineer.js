const Employee = require("./Employee");
const path = require('path')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.templateURL = path.join(__dirname, '../templates/engineer.html')
    }


    getGithub() {
        return `${this.github}`;
    }

    getRole() {
        return `Engineer`;
    }

    serialize() {
      let serialized = super.serialize()

      serialized.github = this.getGithub()

      return serialized
    }
}

module.exports = Engineer;
