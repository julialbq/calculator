const display = document.querySelector('.display')

function cleanDisplay() {
    display.innerText = ""
}

function displayValue(value) {
    if(display.innerText.includes('.') && value == ".") return

    display.innerText += value
    return value
}

function displayResult() {
    let operation = display.innerText
    let result = eval(operation)

    display.innerText = result
    return result
}
