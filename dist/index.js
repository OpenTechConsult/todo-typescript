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
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List (${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(true).forEach((item) => {
        item.printDetails();
    });
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then((answers) => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
    });
}
promptUser();
