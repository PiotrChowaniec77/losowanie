let arr = [];

const addBtn = document.querySelector(".add");
const input = document.querySelector("input");
const cleanBtn = document.querySelector(".clean");
const showAdviceBtn = document.querySelector(".showAdvice");
const showOptionsBtn = document.querySelector(".showOptions");
const div = document.querySelector("div");

addAdvice = e => {
    e.preventDefault();
    newAdvice = input.value;
    if (newAdvice) {
        arr.push(newAdvice);
        input.value = "";
    }
};
showAdvice = () => {
    indexAdvice = Math.floor(Math.random() * arr.length);
    div.textContent = arr[indexAdvice];
};

showOption = () => {
    div.textContent = arr.join(", ");
};

showAdviceBtn.addEventListener("click", showAdvice);
showOptionsBtn.addEventListener("click", showOption);
addBtn.addEventListener("click", addAdvice);
cleanBtn.addEventListener("click", e => {
    e.preventDefault();
    arr = [];
});
