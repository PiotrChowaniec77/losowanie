const btn = document.querySelector('button')
const div = document.querySelector('div')
const names = ["Jagienka", "Dobrawa", 'Daria', "Asia", "Kira", "Marysia", "Anastazja"]
const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczere powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"]

const nameGenerator = ()=>{

    index = Math.floor(Math.random()* names.length)
    indexPrefix = Math.floor(Math.random()* prefixs.length)

    div.textContent = `${prefixs[indexPrefix]}, że najlepsze imię to ${names[index]}`

}

btn.addEventListener('click', nameGenerator)

btn.addEventListener('click', ()=>{
    // console.log("2")

})