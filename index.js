import ToDo from "./To-Do.js";
import Project from "./project.js";
import "./ui.js"

const myToDos = new Project('Haushalt', 'nervig', new Date(2025, 6, 6), 'medium')

myToDos.addToDo('Wäsche', 'waschen', new Date(2025, 6, 6), 'high')
myToDos.addToDo('Flur', 'saugen', new Date(2025, 5, 6), 'low' )

console.table(myToDos.toDos);
