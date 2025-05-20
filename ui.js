function createDOMElement(parentElement, elementType, elementClass, innerText) {
    let elementName = document.createElement(elementType);
    elementName.classList.add(elementClass);
    if (innerText) {
        elementName.textContent = `${innerText}`
    }
    document.querySelector(parentElement).appendChild(elementName)

}

function addText(element, innerText) {
    document.querySelector(`${element}`).textContent = `${innerText}`
}

function createProjects(projects) {
    createDOMElement('body', 'div', 'projects-container', false);
    createDOMElement('.projects-container', 'div', 'display-projects', false)
    projects.forEach(project => {
        createProjectElement(project)
    }
    )

    createDOMElement('.projects-container', 'button', 'create-add-project-form', 'Add project')
    document.querySelector('.create-add-project-form').addEventListener("click", createNewProjectForm(),
    )
}

function createProjectElement(project) {
    createDOMElement('.display-projects', 'div', 'project-container', false);
    createDOMElement('.project-container', 'h2', 'project-title', project.title);
    createDOMElement('.project-container', 'p', 'project-description', project.description);
    createDOMElement('.project-container', 'p', 'project-due', project.dueDate);
    createDOMElement('.project-container', 'p', 'project-priority', project.priority)
    createDOMElement('.project-container', 'button', `remove-project-button-${project.id}`, 'Remove project');
    // createDOMElement('.project-container', 'button', `change-reading-status-button-${project.id}`, 'Toggle reading status')

    document.querySelector(`.remove-project-button-${project.id}`).addEventListener("click", () => removeProject(project.id))
    // document.querySelector(`.change-reading-status-button-${project.id}`).addEventListener("click", () => toggleReadingStatusproject(project.id))


}

function createToDoElement(todo) {
    createDOMElement('.display-projects', 'div', 'todo-container', false);
    createDOMElement('.todo-container', 'h2', 'todo-title', todo.title);
    createDOMElement('.todo-container', 'p', 'todo-author', 'written by ' + todo.author);
    createDOMElement('.todo-container', 'p', 'todo-pages', todo.pages + ' pages');
    createDOMElement('.todo-container', 'p', 'todo-status', `${todo.read ? 'read' : 'not read'}`)
    createDOMElement('.todo-container', 'button', `remove-todo-button-${todo.id}`, 'Remove todo');
    createDOMElement('.todo-container', 'button', `change-reading-status-button-${todo.id}`, 'Toggle reading status')

    document.querySelector(`.remove-todo-button-${todo.id}`).addEventListener("click", () => removetodo(todo.id))
    document.querySelector(`.change-reading-status-button-${todo.id}`).addEventListener("click", () => toggleReadingStatustodo(todo.id))


}

createNewProjectForm(project){

}