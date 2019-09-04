const btn = document.querySelector("button");
const section = document.querySelector("section");

const chars = "ABCDEFGHIJK0123456789";

const codesNumber = 5;
const charsNumber = 25;

const codesGenerator = () => {
    for (let i = 0; i < codesNumber; i++) {
        let code = "";
        for (let i = 0; i < charsNumber; i++) {
            const indexChar = Math.floor(Math.random() * chars.length);
            code += chars[indexChar]
        }
        const div = document.createElement("div");
        div.textContent = code;
        section.appendChild(div);
    }
};

btn.addEventListener("click", codesGenerator);
