USE employee_tracker;

INSERT INTO department (name)
VALUE ("Quality Assurance"),
      ("Information Technology"),
      ("Accounting"),
      ("Sales"),
      ("General managment");

INSERT INTO role (title, salary, department_id)
VALUE ("Quality Assurance Manager", 55000, 1),
      ("I.T. support technician", 45000, 2),
      ("Accountant", 45000, 3),
      ("Sales representative", 50000, 4),
      ("General manager", 150000, 5);

SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Michael", "Johnson", 1, NULL),
      ("Gary", "McCoy", 2, 5),
      ("Sarah", "Williams", 3, 5),
      ("David", "Hills", 4, 5),
      ("Mikey", "Willis", 5, NULL);