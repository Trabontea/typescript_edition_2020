// Code goes here!

class Department {
  private name:string;
  private employees: string[] = []

  constructor(n:string) {
    this.name = n;
  }

  describe(this:Department) {
    console.log('Department ' + this.name)
  }
  
  //61. "private" and "public" Access Modifiers
  addEmployee(employee:string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees)
  }

}

const development = new Department('Development')
console.log(development)

development.describe();

//60
//nu este executata in alt obiect
//const devCopy = {name: 's', describe: development.describe}
///devCopy.describe();

//61. "private" and "public" Access Modifiers
development.addEmployee('Ghita');
development.addEmployee('Vasile');
development.printEmployeeInformation();

//se poate adauga si asa, ceea ce nu e bine
//development.employees[2] = 'Lina'
//development.printEmployeeInformation();
