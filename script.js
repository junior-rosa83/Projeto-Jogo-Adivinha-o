/*Variaveis*/
const screen1 = document.querySelector(".screenOne")
const screen2 = document.querySelector(".screenTwo")
const attention = document.querySelector(".attention")
const rambomNumber = Math.round(Math.random() * 10)
const btnAttempt = document.querySelector("#btnAttempt")
const btnReset = document.querySelector("#btnReset")
let xAttemps = 1

/*Eventos*/
btnAttempt.addEventListener("click", handleBtnAttempt)
btnReset.addEventListener("click", resetClick)

/*Funções*/
function handleBtnAttempt(event) {
  event.preventDefault()
  const inputNumber = document.querySelector("#inputNumber")
  
  if(Number(inputNumber.value) == rambomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".screenTwo h2").innerText = `Você acertou em ${xAttemps} tentativas!`
  }
  
  if(Number(inputNumber.value) > 0 && Number(inputNumber.value) < 11) {
    xAttemps++
    attention.classList.add("hide")
  } else {
    attention.classList.remove("hide")
  }
  
  inputNumber.value = ""
}

function resetClick () {
  location.reload()
}
