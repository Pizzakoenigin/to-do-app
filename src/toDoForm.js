import { createDOMElement, addText } from "./factories.js";
import { addToDo } from "./toDoActions.js";
import { myProjects } from "./index.js";
import * as ui from "./ui.js"

export function createNewToDoForm(id) {
    
    document.querySelector('.display-projects').innerHTML = ''
    document.querySelector('.create-add-project-form').remove()
    createDOMElement('.projects-container', 'form', 'add-todo-form', '')
    createDOMElement('.add-todo-form', 'h2', 'add-todo-head', 'Add To Do')

    createDOMElement('.add-todo-form', 'label', 'add-todo-title-label', 'Title')
    document.querySelector('.add-todo-title-label').htmlFor = 'todo_title';
    createDOMElement('.add-todo-form', 'input', 'add-todo-title-input', false)
    document.querySelector('.add-todo-title-input').id = 'todo_title'

    createDOMElement('.add-todo-form', 'label', 'add-todo-description-label', 'description')
    document.querySelector('.add-todo-description-label').htmlFor = 'todo_description';
    createDOMElement('.add-todo-form', 'input', 'add-todo-description-input', false)
    document.querySelector('.add-todo-description-input').id = 'todo_description'

    createDOMElement('.add-todo-form', 'label', 'add-todo-due-date-label', 'due-date')
    document.querySelector('.add-todo-due-date-label').htmlFor = 'todo_due-date';
    createDOMElement('.add-todo-form', 'input', 'add-todo-due-date-input', false)
    document.querySelector('.add-todo-due-date-input').id = 'todo_due-date'
    document.querySelector('.add-todo-due-date-input').type = 'date'

    createDOMElement('.add-todo-form', 'label', 'add-todo-priority-label', 'priority')
    document.querySelector('.add-todo-priority-label').htmlFor = 'todo_priority';
    createDOMElement('.add-todo-form', 'input', 'add-todo-priority-input', false)
    document.querySelector('.add-todo-priority-input').id = 'todo_priority'

    createDOMElement('.add-todo-form', 'button', 'add-todo', 'Add todo')
    // document.querySelector(`.todo-container-${todo.id}`).classList.add('todo');

    let findIDProject = myProjects.findIndex((project) => project.id == id);

    document.querySelector('.add-todo').addEventListener("click", () => {
        event.preventDefault();
        myProjects[findIDProject].addToDo(
            document.querySelector('.add-todo-title-input').value,
            document.querySelector('.add-todo-description-input').value,
            document.querySelector('.add-todo-due-date-input').value,
            document.querySelector('.add-todo-priority-input').value
        );
            document.querySelector('.projects-container').innerHTML = ''
            ui.createProjects(myProjects)
    }
    )
}