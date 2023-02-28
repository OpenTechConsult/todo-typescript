"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy flowers"),
    new todoItem_1.TodoItem(2, "Get shoes"),
    new todoItem_1.TodoItem(3, "Collect tickets"),
    new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection("Sandro", todos);
console.clear();
console.log(`${collection.userName}'s Todo List (${collection.getItemCounts().incomplete} items to do)`);
collection.removeComplete();
collection.getTodoItems(true).forEach((item) => {
    item.printDetails();
});
