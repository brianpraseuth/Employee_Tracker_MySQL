var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "employees_db"
});

// function runProgram starts the questions
connection.connect(function (err) {
    if (err) throw err;
    runProgram();
});

function runProgram() {
  console.log("Welcome to the Employee Tracker");
  console.log("------------------------------------------------------------------");
    inquirer
      .prompt({
        type: "list",
        choices: [
          "Add a department?",
          "Add a role?",
          "Add an employee?",
          "View departments?",
          "View roles?",
          "View employees?",
          "Update an employee role?",
          "Exit"
        ],
        message: "What would you like to do?",
        name: "options"
      })
      .then(function(result) {
        switch (result.options) {
          case "Add a department?":
            addDepartment();
            break;
          case "Add a role?":
            addRole();
            break;
          case "Add an employee?":
            addEmployee();
            break;
          case "View departments?":
            viewDepartment();
            break;
          case "View roles?":
            viewRoles();
            break;
          case "View employees?":
            viewEmployees();
            break;
          case "Update an employee role?":
            updateEmployee();
            break;
          case "Exit":
            console.log("Thank you! Have a good day!")
            process.exit();
        }
      });
  }



function addDepartment() {
  inquirer.prompt(
    {
      type: "input",
      message: "What is the new department?",
      name: "department"
    }
  ).then(function(answer) {
    connection.query("INSERT INTO department SET ?",
    {
      name: answer.department
    },
    function(err) {
      if(err) throw err;
      console.log("New department " + answer.department + " was added!");
      runProgram();
    });
  });
}

// Fix this function
function addRole() {
  inquirer.prompt(
    {
      type: "input",
      message: "What is the new role?",
      name: "role"
    },
    {
      type: "number",
      message: "What is the salary?",
      name: "salary"
    },
    {
      type: "input",
      message: "What is the department ID?",
      name: "id"
    }
  ).then(function(answer) {
    connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID],
    function(err) {
      if(err) throw err;
      console.log("New role " + answer.role + " was added!");
      runProgram();
    });
  });
}

function addEmployee() {

  inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's first name?",
      name: "firstName"
    },
    {
      type: "input",
      message: "What is the employee's last name?",
      name: "lastName"
    },
    {
      type: "list-input",
      message: "What is the employee's manager's ID?",
      name: "managersID",
      choices: [1, 2, 3, 4, 5, 6, 7, "null"]
    },
    {
      type: "list-input",
      message: "What is the employee's role ID?",
      name: "roleID",
      choices: [1, 2, 3, 4]
    }
  ]
  ).then(function(answer) {
    connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.managersID, answer.roleID],
    function(err) {
      if(err) throw err;
      console.log("New employe " + answer.firstName + answer.lastName + " was added!");
      runProgram();
    });
  });
}

function viewDepartment() {
  connection.query("SELECT * FROM department",
  function(err, res){
    if (err) throw err;
    console.table(res);
    runProgram();
  })
}

function viewRoles() {
  connection.query("SELECT * FROM role",
  function(err, res){
    if (err) throw err;
    console.table(res);
    runProgram();
  })
}

function updateEmployee() {
  connection.query("SELECT * FROM employee",
  function(err, res){
    if (err) throw err;
    console.table(res);
    inquirer.prompt(
      [
       {
         type: "number",
         message: "What is the employees ID?",
         name: "employeeID"
       },
       {
         type: "number",
         message: "What's the employee's new role ID?",
         name: "updateID"
       }
      ]
    ).then(function(answer) {
      connection.query("UPDATE employee SET ? WHERE ?",
      [
        {
          role_id: answer.updateID
        },
        {
          id: answer.employeeID
        }
      ],function(err, res) {
        if (err) throw err;
        console.log("Employee was updated");
        runProgram();
      })
    })
  })
}

function viewEmployees() {
  connection.query("SELECT * FROM employee",
  function(err, res){
    if (err) throw err;
    console.table(res);
    runProgram();
  })
}