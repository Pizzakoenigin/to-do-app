import ToDo from "./To-Do.js";

class Project {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.toDos = [];
    }

    addToDo(title, description, dueDate, priority){
    this.toDos.push(new ToDo(title, description, dueDate, priority))

    // removeToDo
}
}

export default Project