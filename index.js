const allNumbers = Array.from(document.querySelectorAll('.number'))
const display = document.querySelector('.display')
const allOperations = Array.from(document.querySelectorAll('.operation'))
const equalButton = document.querySelector('.equal')

let previousNumber = ''
let currentNumber = ''
let operation = ''

function displayNumbers(number) {    
    if(currentNumber.includes('.') && number == ".") return

    display.innerText = `${currentNumber}${number.toString()}`
}

function updateDisplay(){
    previousNumber = currentNumber
    currentNumber = display.innerText
    console.log(previousNumber, currentNumber)
}
    

function displayOperation(operation){

    // if(this.previousNumber != ""){
    //     this.displayResult
    // }

    previousNumber = currentNumber
    currentNumber = ""
    operation = operation
    console.log(operation)
}

function displayResult() {
    let result
    if(previousNumber != ""){
        const previousNumberFloat = parseFloat(previousNumber)
        const currentNumberFloat = parseFloat(currentNumber)

        if(isNaN(previousNumberFloat) || isNaN(currentNumberFloat)) return

        switch (operation) {
            case '+':
                result = previousNumberFloat + currentNumberFloat
                break
            case '-':
                result = previousNumberFloat - currentNumberFloat
                break
            case 'X':
                result = previousNumberFloat * currentNumberFloat
                break
            case '÷':
                result = previousNumberFloat / currentNumberFloat
                break
            default: 
                return
        }

        console.log(this.operation) 

        currentNumber = result
        display.innerText = result
    }
}

allNumbers.map(numberButton => {
    numberButton.addEventListener('click', (event) => {
        if(event.target == numberButton) {
            displayNumbers(numberButton.innerText)
            updateDisplay()
        }
    })
})

allOperations.map(operation => {
    operation.addEventListener('click', (event) => {
        if(event.target == operation){
            // console.log(operation.innerText)
             displayOperation(operation.innerText)
             displayResult()
        }
    })
})

equalButton.addEventListener('click', () => {
    console.log('click')
    displayResult()
})