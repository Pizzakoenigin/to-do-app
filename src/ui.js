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

    // createDOMElement('.projects-container', 'button', 'create-add-project-form', 'Add project')
    // document.querySelector('.create-add-project-form').addEventListener("click", createNewProjectForm(),
    // )
}

export function createProjectElement(project) {
    createDOMElement('.display-projects', 'div', `project-container-${project.id}`, false);
    createDOMElement(`.project-container-${project.id}`, 'h2', 'project-title', project.title);
    createDOMElement(`.project-container-${project.id}`, 'p', 'project-description', project.description);
    createDOMElement(`.project-container-${project.id}`, 'p', 'project-due', project.dueDate);
    createDOMElement(`.project-container-${project.id}`, 'p', 'project-priority', project.priority)
    // createDOMElement(`.project-container-${project.id}`, 'button', `remove-project-button-${project.id}`, 'Remove project');
    // createDOMElement(`.project-container-${project.id}`, 'button', `change-reading-status-button-${project.id}`, 'Toggle reading status')

    // document.querySelector(`.remove-project-button-${project.id}`).addEventListener("click", () => removeProject(project.id))
    // document.querySelector(`.change-reading-status-button-${project.id}`).addEventListener("click", () => toggleReadingStatusproject(project.id))
    // console.log(project);
    project.toDos.forEach(todo => {
        createToDoElement(todo, project.id)
    })
}

export function createToDoElement(todo, id) {
    createDOMElement(`.project-container-${id}`, 'div', `todo-container-${id}`, false);
    createDOMElement(`.todo-container-${id}`, 'h3', 'todo-title', todo.title);
    createDOMElement(`.todo-container-${id}`, 'p', 'todo-description', todo.description);
    // createDOMElement(`.todo-container-${id}`, 'p', 'todo-due', todo.dueDate);
    // createDOMElement(`.todo-container-${id}`, 'p', 'todo-priority', todo.priority)
    // createDOMElement(`.todo-container-${id}`, 'button', `remove-todo-button-${id}`, 'Remove To Do');

    // document.querySelector(`.remove-todo-button-${todo.id}`).addEventListener("click", () => removetodo(todo.id))
    // document.querySelector(`.change-reading-status-button-${todo.id}`).addEventListener("click", () => toggleReadingStatustodo(todo.id))


}

export function createNewProjectForm(project) {

}
