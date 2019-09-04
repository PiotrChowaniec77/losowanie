const btn = document.querySelector("button");
const names = [];
const div = document.querySelector('div')

const addName = e => {
    e.preventDefault();
    const input = document.querySelector("input");
    const newName = input.value;
    if (newName.length && names.indexOf(newName) == -1) {
        names.push(newName)
        input.value = ""
        div.textContent += `${newName}, `
    } else {
        alert("zmień imię")
        throw new Error("to samo")
    }
};

btn.addEventListener("click", addName);
