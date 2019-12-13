class Department {
  protected employees: string[] = []

  constructor(private readonly id: string, public name:string) {
  }

  describe(this:Department) {
    console.log('Department ' + this.id + ' ' + this.name)
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

const accounting = new Department('d1', 'Accounting')
console.log(accounting)
accounting.describe();

//61. "private" and "public" Access Modifiers
accounting.addEmployee('Ghita');
accounting.addEmployee('Vasile');
accounting.printEmployeeInformation();

//64 Inheritance
class ITDepartment extends Department {
  constructor(id:string, public admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
}

const development = new ITDepartment('d2',['Ionel'])
console.log(development)
development.describe();
development.addEmployee('Ionela');
development.addEmployee('Marin');
development.printEmployeeInformation();


class AccountingDepartment extends Department {
  constructor(id:string, private reports: string[]) {
    super(id, 'Account')
  }
  addReport(text:string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports)
  }
  addEmployee(name:string) {
    if(name === 'Max') {
      return
    }
    this.employees.push(name)
  }
}

const accounting2 = new AccountingDepartment('d2', [])

accounting2.addReport('somefhing went wrong');
accounting2.printReports();
accounting2.addEmployee('Cristi')
accounting2.addEmployee('Max')
accounting2.printEmployeeInformation();