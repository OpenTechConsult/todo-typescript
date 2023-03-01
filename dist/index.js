"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy flowers"),
    new todoItem_1.TodoItem(2, "Get shoes"),
    new todoItem_1.TodoItem(3, "Collect tickets"),
    new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection("Sandro", todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List (${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach((item) => {
        item.printDetails();
    });
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add a New Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter task:"
    }).then((answers) => {
        if (answers["add"] !== "") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then((answers) => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            default:
                break;
        }
    });
}
promptUser();
