import { createDOMElement, addText } from "./factories.js";
import { addProject } from "./projectActions.js";
import { myProjects } from "./index.js";

export function createUpdateProjectForm(project) {
    document.querySelector('.projects-container').innerHTML = ''
    // document.querySelector('.create-update-project-form').remove()
    createDOMElement('.projects-container', 'form', 'update-project-form', false)
    createDOMElement('.update-project-form', 'h2', 'update-todo-head', `update the project ${project.title}`)


    createDOMElement('.update-project-form', 'label', 'update-project-title-label', 'Title')
    document.querySelector('.update-project-title-label').htmlFor = 'project_title';
    createDOMElement('.update-project-form', 'input', 'update-project-title-input', false)
    document.querySelector('.update-project-title-input').value = project.title,
        document.querySelector('.update-project-title-input').id = 'project_title'

    createDOMElement('.update-project-form', 'label', 'update-project-description-label', 'description')
    document.querySelector('.update-project-description-label').htmlFor = 'project_description';
    createDOMElement('.update-project-form', 'input', 'update-project-description-input', false)
    document.querySelector('.update-project-description-input').value = project.description,
        document.querySelector('.update-project-description-input').id = 'project_description'

    createDOMElement('.update-project-form', 'label', 'update-project-due-date-label', 'due-date')
    document.querySelector('.update-project-due-date-label').htmlFor = 'project_due-date';
    createDOMElement('.update-project-form', 'input', 'update-project-due-date-input', false)
    document.querySelector('.update-project-due-date-input').value = project.dueDate
    document.querySelector('.update-project-due-date-input').id = 'project_due-date'
    document.querySelector('.update-project-due-date-input').type = 'date'

    createDOMElement('.update-project-form', 'label', 'update-project-priority-label', 'priority')
    document.querySelector('.update-project-priority-label').htmlFor = 'project_priority';
    createDOMElement('.update-project-form', 'input', 'update-project-priority-input', false)
    document.querySelector('.update-project-priority-input').value = project.priority
    document.querySelector('.update-project-priority-input').id = 'project_priority'

    let findID = myProjects.findIndex((projectToDelete) => projectToDelete.id == project.id)
    myProjects.splice(findID, 1)

    // keep index of project in myProject Array

    createDOMElement('.update-project-form', 'button', 'update-project', 'update project')
    document.querySelector('.update-project').addEventListener("click", () => addProject(
        document.querySelector('.update-project-title-input').value,
        document.querySelector('.update-project-description-input').value,
        document.querySelector('.update-project-due-date-input').value,
        document.querySelector('.update-project-priority-input').value
    ))
}