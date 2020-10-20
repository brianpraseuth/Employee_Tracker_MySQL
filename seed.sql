USE employees_db;

-- Department Seeds
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

-- Role Seeds
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 190000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 2);

-- Employee seeds
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John", "Doe", 3, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Mike", "Chan", 1, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Ashley","Rodriguez",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Kevin", "Tupik", 3, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Malia", "Brown", null, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Sarah", "Lourd", null, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tom", "Allen", 7, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Christian", "Eckenrode", 2, 8);