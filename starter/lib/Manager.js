// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Employee`'s properties and methods, `Manager` will also have the following:
//       * `officeNumber`
//       * `getRole()`&mdash;overridden to return `'Manager'`
// node toself The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

const Employee = require('../lib/employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
  
    getOfficeNumber() {
      return this.officeNumber;
    }
  
    getRole() {
      return "Manager";
    }
  }
  module.exports = Manager;