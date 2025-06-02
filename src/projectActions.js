import Project from "./project.js";
import ToDo from "./To-Do.js";
import { myProjects } from "./index.js";
import * as ui from "./ui.js"

export function addProject(title, description, dueDate, priority) {
    event.preventDefault()
    let newProject = new Project(title, description, dueDate, priority)
    myProjects.push(newProject)
    refreshUI()
}

export function updateProject(index, title, description, dueDate, priority) {
    myProjects[index].title = title;
    myProjects[index].description = description;
    myProjects[index].dueDate = dueDate;
    myProjects[index].priority = priority;
    refreshUI()
}

export function removeProject(id) {
    let findID = myProjects.findIndex((project) => project.id == id)
    myProjects.splice(findID, 1)
    refreshUI()
}

export function addToDo(projectIndex, title, description, dueDate, priority) {
    let newToDo = new ToDo(title, description, dueDate, priority)
    myProjects[projectIndex].toDos.push(newToDo);
    refreshUI()
}

export function removeToDo(toDoId, projectIndex) {
    let findIDProject = myProjects.findIndex((project) => project.id == projectIndex);
    let findToDoId = myProjects[findIDProject].toDos.findIndex((todo) => todo.id == toDoId);
    myProjects[findIDProject].toDos.splice(findToDoId, 1);
    refreshUI()
}

function refreshUI(){
    localStorage.setItem('projects', JSON.stringify(myProjects))
    document.querySelector('.projects-container').innerHTML = ''
    ui.createProjects(myProjects)    
}