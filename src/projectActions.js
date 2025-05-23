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
    createProjects(myProjects)
}