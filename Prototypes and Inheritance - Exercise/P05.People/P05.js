function solve() {

  const  TASKS = {
        JUNIOR: ["is working on a simple task."],
        SENIOR: [
            "is working on a complicated task.",
            "is taking time off work.",
            "is supervising junior workers."
        ],
        MANAGER: ["scheduled a meeting.",
            " is preparing a quarterly report."
        ]
    };
    class Employee {
        constructor(name, age, tasks) {
            this.name = name,
                this.age = age,
                this.salary = 0,
                this.tasks = tasks
        }
        getSalary() {

        }
        work() {

        }

        collectSalary() {

        }
    }

    class Junior extends Employee {
        constructor(name,age) {
            super(name,age,TASKS.JUNIOR)
        }
    }
}

// Define several classes, that represent a company’s employee records. Every employee has a name and age, a salary and a list of tasks, while every position has specific properties not present in the others. Place all common functionality in a parent abstract class. Follow the diagram below:
