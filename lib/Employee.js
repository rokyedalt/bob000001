//<--This constructor function and the consequent ones are for easily making objects with user input-->
const fs = require("fs")

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.templateURL = null;
    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return `${this.id}`;
    }

    getEmail() {
        return `${this.email}`;
    }

    getRole() {
        return `Employee`;
    }

    serialize() {
      return {
        name: this.name,
        id: this.id,
        email: this.email,
        role: this.getRole()
      }
    }

    getTemplatedHtml() {
      let serializedData = this.serialize()
      try {
          let stringData = fs.readFileSync(this.templateURL, 'utf8')

          for (let k in serializedData) {
            let rgx = new RegExp(`\\{\\{\\s*${k}\\s*\\}\\}`,'gi')
            stringData = stringData.replace(rgx, serializedData[k])
          }

          return stringData
      } catch(e) {
          console.log('Error:', e.stack);
          return ''
      }
    }
}
module.exports = Employee;
