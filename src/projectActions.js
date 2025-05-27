import Project from "./project.js";
import { myProjects } from "./index.js";
import * as ui from "./ui.js"

export function addProject(title, description, dueDate, priority) {
    event.preventDefault()
    let newProject = new Project(title, description, dueDate, priority)
    myProjects.push(newProject)
    localStorage.setItem('projects', JSON.stringify(myProjects))
    document.querySelector('.projects-container').innerHTML = ''
    ui.createProjects(myProjects)
}

export function removeProject(id) {
    let findID = myProjects.findIndex((project) => project.id == id)
    myProjects.splice(findID, 1)
    localStorage.setItem('projects', JSON.stringify(myProjects))
    document.querySelector('.projects-container').innerHTML = ''
    ui.createProjects(myProjects)
}

export function addToDo(){
    
}

export function removeToDo(toDoId, projectId) {
    let findIDProject = myProjects.findIndex((project) => project.id == projectId);
    let findToDoId = myProjects[findIDProject].toDos.findIndex((todo) => todo.id == toDoId);
    myProjects[findIDProject].toDos.splice(findToDoId, 1);
    localStorage.setItem('projects', JSON.stringify(myProjects))
    document.querySelector('.projects-container').innerHTML = ''
    ui.createProjects(myProjects)
}