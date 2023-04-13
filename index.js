//Estas son mis constantes donde llamo a cada una por su id
const calculos = document.querySelector("#calculos")
const suma = document.querySelector("#suma")
const resta = document.querySelector("#resta")
const multipli = document.querySelector("#multipli")
const limpiar = document.querySelector("#pantalla")
const result = document.querySelector("#resultado")

// esta variable la usare para limpiar
let pantalla = 0


const btns = document.querySelectorAll(".btn")
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (event) => {
        calculos.textContent += event.target.value
    })
}


suma.addEventListener("click", () => {
    calculos.textContent += "+"
})

resta.addEventListener("click", () => {
    calculos.textContent += "-"
})


multipli.addEventListener("click", () => {
    calculos.textContent += "*"
})


// los que ise aqui fue que mi boton limpiara todo
// en la calculadora como lo hace la calculadora normal oh otra.
limpiar.addEventListener("click", () => {
    pantalla = 0
    calculos.textContent = " "
    arreglo = []
})


// aqui lo que hice fue que  que si marcaramos un numero y 3 + y otro numero
// me mostrara en la pantalla negra Expresion mal formada.
result.addEventListener("click", () => {
    try{
        let respuesta = eval(calculos.textContent);
        calculos.textContent = respuesta;
    }catch(error){
        calculos.textContent = "Expresion mal formada"
    }
})


