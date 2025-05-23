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
