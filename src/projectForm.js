import { createDOMElement, addText } from "./factories.js";
import { addProject } from "./projectActions.js";



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

