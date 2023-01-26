const allNumbers = Array.from(document.querySelectorAll('.number'))
const display = document.querySelector('.display')
const allOperations = Array.from(document.querySelectorAll('.operation'))
const equalButton = document.querySelector('.equal')


class Calculator {
    constructor(currentNumber){
        this.currentNumber = currentNumber
        this.previousNumber = ""
        this.cleanDisplay()
    }

    cleanDisplay() {
        this.previousNumber = ""
        this.currentNumber = ""
    }

    updateDisplay(){
        this.previousNumber = this.currentNumber
        this.currentNumber = display.innerText
        // console.log(this.previousNumber, this.currentNumber)
    }

    displayNumbers(number){
    
        if(this.currentNumber.includes('.') && number == ".") return
    
        display.innerText = `${this.currentNumber}${number.toString()}`
    }

    displayOperation(operation){

        // if(this.previousNumber != ""){
        //     this.displayResult
        // }

        this.previousNumber = this.currentNumber
        this.currentNumber = ""
        this.operation = operation
        console.log(this.operation)
    }

    displayResult() {
        let result
        if(this.previousNumber != ""){
            const previousNumberFloat = parseFloat(this.previousNumber)
            const currentNumberFloat = parseFloat(this.currentNumber)
    
            if(isNaN(previousNumberFloat) || isNaN(currentNumberFloat)) return
    
            switch (this.operation) {
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
    
            this.currentNumber = result
            display.innerText = result
        }
    }

}

const calculator = new Calculator(display.innerText)

allNumbers.map(numberButton => {
    numberButton.addEventListener('click', (event) => {
        if(event.target == numberButton) {

            calculator.displayNumbers(numberButton.innerText)
        }
    })
})

allOperations.map(operation => {
    operation.addEventListener('click', (event) => {
        if(event.target == operation){
            // console.log(operation.innerText)
             calculator.displayOperation(operation.innerText)
             calculator.displayResult()
        }
    })
})

equalButton.addEventListener('click', () => {
    console.log('click')
    calculator.displayResult()
})