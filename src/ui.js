import Project from "./project.js";
import { myProjects } from "./index.js";

export function createDOMElement(parentElement, elementType, elementClass, innerText) {
    let elementName = document.createElement(elementType);
    elementName.classList.add(elementClass);
    if (innerText) {
        elementName.textContent = `${innerText}`
    }
    document.querySelector(parentElement).appendChild(elementName)

}

export function addText(element, innerText) {
    document.querySelector(`${element}`).textContent = `${innerText}`
}

export function createProjects(projects) {
    createDOMElement('body', 'div', 'projects-container', false);
    createDOMElement('.projects-container', 'h1', 'heading', 'Projects')
    createDOMElement('.projects-container', 'div', 'display-projects', false)
    projects.forEach(project => {
        createProjectElement(project)
    }
    )

    createDOMElement('.projects-container', 'button', 'create-add-project-form', 'Add project')
    // document.querySelector(`.project-container-${project.id}`).classList.add('project');
    document.querySelector('.create-add-project-form').addEventListener("click", () => createNewProjectForm())
}

export function createNewProjectForm() {
    document.querySelector('.display-projects').innerHTML = ''
    document.querySelector('.create-add-project-form').remove()
    createDOMElement('.projects-container', 'form', 'add-project-form', '')

    createDOMElement('.add-project-form', 'label', 'add-project-title-label', 'Title')
    document.querySelector('.add-project-title-label').htmlFor = 'project_title';
    createDOMElement('.add-project-form', 'input', 'add-project-title-input', false)
    document.querySelector('.add-project-title-input').id = 'project_title'

    createDOMElement('.add-project-form', 'label', 'add-project-description-label', 'description')
    document.querySelector('.add-project-description-label').htmlFor = 'project_description';
    createDOMElement('.add-project-form', 'input', 'add-project-description-input', false)
    document.querySelector('.add-project-description-input').id = 'project_description'

    createDOMElement('.add-project-form', 'label', 'add-project-due-date-label', 'due-date')
    document.querySelector('.add-project-due-date-label').htmlFor = 'project_due-date';
    createDOMElement('.add-project-form', 'input', 'add-project-due-date-input', false)
    document.querySelector('.add-project-due-date-input').id = 'project_due-date'
    document.querySelector('.add-project-due-date-input').type = 'date'

    createDOMElement('.add-project-form', 'label', 'add-project-priority-label', 'priority')
    document.querySelector('.add-project-priority-label').htmlFor = 'project_priority';
    createDOMElement('.add-project-form', 'input', 'add-project-priority-input', false)
    document.querySelector('.add-project-priority-input').id = 'project_priority'

    createDOMElement('.add-project-form', 'button', 'add-project', 'Add project')
    // document.querySelector(`.project-container-${project.id}`).classList.add('project');
    document.querySelector('.add-project').addEventListener("click", () => addProject(
        document.querySelector('.add-project-title-input').value, 
        document.querySelector('.add-project-description-input').value, 
        document.querySelector('.add-project-due-date-input').value,
        document.querySelector('.add-project-priority-input').value
    ))

    
}

export function addProject(name, description, dueDate, priority) {
    event.preventDefault()
    let newProject = new Project(name, description, dueDate, priority)
    myProjects.push(newProject)
    document.querySelector('.projects-container').innerHTML = ''
    createProjects(myProjects)
}

export function createProjectElement(project) {
    createDOMElement('.display-projects', 'div', `project-container-${project.id}`, false);
    document.querySelector(`.project-container-${project.id}`).classList.add('project');
    createDOMElement(`.project-container-${project.id}`, 'h2', 'project-title', project.title);
    createDOMElement(`.project-container-${project.id}`, 'p', 'project-description', project.description);
    createDOMElement(`.project-container-${project.id}`, 'p', 'project-due', project.dueDate);
    createDOMElement(`.project-container-${project.id}`, 'p', 'project-priority', project.priority)
    createDOMElement(`.project-container-${project.id}`, 'button', `remove-project-button-${project.id}`, 'Remove project');

    document.querySelector(`.remove-project-button-${project.id}`).addEventListener("click", () => removeProject(project.id))

    createDOMElement(`.project-container-${project.id}`, 'div', `project-todos-${project.id}`, false)
    document.querySelector(`.project-todos-${project.id}`).classList.add('project-todos');
    project.toDos.forEach(todo => {
        createToDoElement(todo, project.id)
    })
}

export function removeProject(id) {
    let findID = myProjects.findIndex((project) => project.id == id)
    myProjects.splice(findID, 1)
    document.querySelector('.projects-container').innerHTML = ''
    createProjects(myProjects)
}

export function createToDoElement(todo, id) {
    createDOMElement(`.project-todos-${id}`, 'div', `todo-container-${todo.id}`, false);
    document.querySelector(`.todo-container-${todo.id}`).classList.add('todo');
    createDOMElement(`.todo-container-${todo.id}`, 'h3', 'todo-title', todo.title);
    createDOMElement(`.todo-container-${todo.id}`, 'p', 'todo-description', todo.description);
    // createDOMElement(`.todo-container-${todo.id}`, 'p', 'todo-due', todo.dueDate);
    // createDOMElement(`.todo-container-${todo.id}`, 'p', 'todo-priority', todo.priority)
    // createDOMElement(`.todo-container-${todo.id}`, 'button', `remove-todo-button-${todo.id}`, 'Remove To Do');

    // document.querySelector(`.remove-todo-button-${todo.id}`).addEventListener("click", () => removetodo(todo.id))
    // document.querySelector(`.change-reading-status-button-${todo.id}`).addEventListener("click", () => toggleReadingStatustodo(todo.id))


}


