import ToDo from "./To-Do.js";
// import { myProjects } from "./index.js";

class Project {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.toDos = [];
        this.id = crypto.randomUUID()

    }

    addToDo(title, description, dueDate, priority) {
        this.toDos.push(new ToDo(title, description, dueDate, priority))
    }

    // removeToDo() {
    //     this.toDos.splice(findToDoId, 1)
    // }
}

export default Project