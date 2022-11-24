# Todo-TypeScript

A simple ToDo  application built in TypeScript.

This is a command line application that will keep the focus on TypeScript.
We will avoid the complexity of a web application framework for now.

The application will display a list of tasks, allow new tasks to be created, 
and allow existing tasks to be marked as complete.

There will be a filter to include already completed tasks in the list.
Once the the core features are in place, we will add support for storing
data persistently so that changes are not lost when the application is terminated.

## Defining the Data Model

The application will manage a list of to-do items.
The user will be able to:

- see the list
- add new items
- mark item as complete
- filter the items

We'll start defining the data model that describes the application's data
and the operations that can be performed on it.
