const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super("", "", manager);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "manager"
    }