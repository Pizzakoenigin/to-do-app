import Project from "./project.js";
import { myProjects } from "./index.js";
import { createNewProjectForm } from "./projectForm.js";
import { createUpdateProjectForm } from "./projectUpdateForm.js";
import { createNewToDoForm } from "./toDoForm.js";
import { createDOMElement, addText } from "./factories.js";
import * as projectActions from "./projectActions.js"
import * as toDoActions from "./toDoActions.js"

export function createProjects(projects) {
    createDOMElement('body', 'div', 'projects-container', false);
    createDOMElement('.projects-container', 'h1', 'heading', 'my projects and to dos')
    createDOMElement('.projects-container', 'div', 'display-projects', false)
    projects.forEach(project => {
        createProjectElement(project)
    }
    )

    createDOMElement('.projects-container', 'button', 'create-add-project-form', 'Add project')
    // document.querySelector(`.project-container-${project.id}`).classList.add('project');
    document.querySelector('.create-add-project-form').addEventListener("click", () => createNewProjectForm())
}


export function createProjectElement(project) {
    createDOMElement('.display-projects', 'div', `project-container-${project.id}`, false);
    document.querySelector(`.project-container-${project.id}`).classList.add('project');
    createDOMElement(`.project-container-${project.id}`, 'h2', 'project-title', project.title);
    createDOMElement(`.project-container-${project.id}`, 'p', 'project-description', project.description);
    createDOMElement(`.project-container-${project.id}`, 'p', 'project-due', project.dueDate);
    createDOMElement(`.project-container-${project.id}`, 'p', 'project-priority', project.priority)

    createDOMElement(`.project-container-${project.id}`, 'p', 'project-head', 'To Dos:')
    createDOMElement(`.project-container-${project.id}`, 'div', `project-todos-${project.id}`, false)

    document.querySelector(`.project-todos-${project.id}`).classList.add('project-todos');

    project.toDos.forEach(todo => {
        createToDoElement(todo, project.id)
    })

    createDOMElement(`.project-todos-${project.id}`, 'button', `add-to-do-button-${project.id}`, 'Add To Do')
    createDOMElement(`.project-container-${project.id}`, 'button', `remove-project-button-${project.id}`, 'Remove project');
    createDOMElement(`.project-container-${project.id}`, 'button', `edit-project-button-${project.id}`, `Update project`)

    document.querySelector(`.remove-project-button-${project.id}`).addEventListener("click", () => projectActions.removeProject(project.id))
    document.querySelector(`.add-to-do-button-${project.id}`).addEventListener("click", () => createNewToDoForm(project.id))
    document.querySelector(`.edit-project-button-${project.id}`).addEventListener("click", () => createUpdateProjectForm(project))
}

export function createToDoElement(todo, projectId) {
    createDOMElement(`.project-todos-${projectId}`, 'div', `todo-container-${todo.id}`, false);
    document.querySelector(`.todo-container-${todo.id}`).classList.add('todo');
    createDOMElement(`.todo-container-${todo.id}`, 'h3', 'todo-title', todo.title);
    createDOMElement(`.todo-container-${todo.id}`, 'p', 'todo-description', todo.description);
    createDOMElement(`.todo-container-${todo.id}`, 'p', 'todo-due', todo.dueDate);
    createDOMElement(`.todo-container-${todo.id}`, 'p', 'todo-priority', todo.priority)
    createDOMElement(`.todo-container-${todo.id}`, 'button', `remove-todo-button-${todo.id}`, 'Remove To Do');
    document.querySelector(`.remove-todo-button-${todo.id}`).addEventListener("click", () => projectActions.removeToDo(todo.id, projectId))
}


