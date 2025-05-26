import Project from "./project.js";
import { myProjects } from "./index.js";
import * as ui from "./ui.js"

export function addProject(name, description, dueDate, priority) {
    event.preventDefault()
    let newProject = new Project(name, description, dueDate, priority)
    myProjects.push(newProject)
    document.querySelector('.projects-container').innerHTML = ''
    ui.createProjects(myProjects)
}

export function removeProject(id) {
    let findID = myProjects.findIndex((project) => project.id == id)
    myProjects.splice(findID, 1)
    document.querySelector('.projects-container').innerHTML = ''
    ui.createProjects(myProjects)
}

export function removeToDo(toDoId, projectId) {
    let findIDProject = myProjects.findIndex((project) => project.id == projectId);
    let findToDoId = myProjects[findIDProject].toDos.findIndex((todo) => todo.id == toDoId);
    myProjects[findIDProject].toDos.splice(findToDoId, 1);
    document.querySelector('.projects-container').innerHTML = ''
    ui.createProjects(myProjects)
}