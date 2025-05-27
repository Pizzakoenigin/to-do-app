import "./styles.css"
import ToDo from "./To-Do.js";
import Project from "./project.js";
import * as ui from "./ui.js"

export let myProjects = []


if ('projects' in localStorage) {
    myProjects = JSON.parse(localStorage.getItem('projects'));
} else {
    const myToDos = new Project('Haushalt', 'Text', new Date(2025, 6, 6), 'medium')
    const secondProject = new Project('Buch schreiben', 'Das wird ein Bestseller', new Date(2026, 1, 1), 'low')


    myToDos.addToDo('Wäsche', 'waschen', new Date(2025, 6, 6), 'high')
    myToDos.addToDo('Flur', 'saugen', new Date(2025, 5, 6), 'low')

    secondProject.addToDo('Text ausdenken', 'balbala', new Date(2025, 6, 6), 'medium')
    secondProject.addToDo('Hauptcharakter beschreiben', 'balbala', new Date(2025, 6, 6), 'medium')

    myProjects.push(myToDos, secondProject)

}


    ui.createProjects(myProjects)


// console.log(ui);



