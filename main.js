//variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//Função Callback
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        screen2.querySelector("h2").innerText = `Você acertou na ${xAttempts}ª tentativa!`
    }

    if (Number(inputNumber.value)<0|| Number(inputNumber.value)>10|| (!Number(inputNumber.value) && Number(inputNumber.value)!=0)){
        alert('Por favor, insira um número de 1 a 10')
    }
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}