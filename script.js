// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let keepGoing = true;
  let employee = [];

  while (keepGoing) {

    let firstName = window.prompt(`Enter First Name: `);
    if (!firstName) {
      return;
    }
    let lastName = window.prompt(`Enter Last Name: `);
    if (!lastName) {
      return;
    }
    let salaryNum = window.prompt(`Enter Salary: `);
    if (!salaryNum) {
      return;
    }
    if (isNaN(salaryNum)) {
      salaryNum = 0;
    }
    let salary = parseInt(salaryNum);

  let employeeInfo = {firstName, lastName, salary};
  




    employee.push(employeeInfo);
    
    keepGoing = window.prompt(`Do you want to add another employee?`);
    


  }
  return employee;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let total = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    total += employeesArray[i].salary;
  }
  total = total / employeesArray.length;
  console.log('The average salary for the employees in the company is: $' + total);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  const randNum = Math.floor(Math.random()*employeesArray.length);
  console.log("The randomly chosen employee is " + employeesArray[randNum].firstName + " " + employeesArray[randNum].lastName + "!");
  
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table([employees]);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
