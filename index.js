const display = document.querySelector('.display')
let newEntry = true
const operators = ['+', '-', '*', '/']

function containsOperator(operator) {
  return display.innerText.includes(operator)
}

function cleanDisplay() {
  display.innerText = ""
}

function displayValue(value) {    
  if(operators.some(containsOperator)) {
    let operatorUsed = display.innerText.split(/\+|\-|\/|\*/)
    if(operatorUsed[1].includes('.') && value == ".") return
  } else if(!operators.some(containsOperator)) {
    if(display.innerText.includes('.') && value == ".") return
  }

  updateDisplay(value)
}

function updateDisplay(value) {
  if(newEntry) {
    display.innerText = value
    newEntry = false
  } else {
    display.innerText += value
  }
}

function displayResult() {
  let operation = display.innerText
  let result = eval(operation)

  let correctDecimals = countDecimals(result)

  if(correctDecimals >= 10){
    display.innerText = result.toFixed(9)
  } else {
    display.innerText = result
  }

  newEntry = true
}

function countDecimals (value) {
  if(value.toString().includes('.')){
    return value.toString().length
  } else {
    return 0
  }
}
