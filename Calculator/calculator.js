function operate() {
    validate();
}

function validate() {
    if (document.getElementById('firstNumber').value != "" && document.getElementById('secondNumber').value != "") {
        let firstNumber = parseInt(document.getElementById("firstNumber").value);
        let secondNumber = parseInt(document.getElementById("secondNumber").value);
        if ((Number.isInteger(firstNumber)) && (Number.isInteger(secondNumber))) {
            let operatorSymbol = document.getElementById("operation").value;
            return calculate(firstNumber, secondNumber, operatorSymbol);
        } else {
            alert("Please Enter Number");
        }
    } else {
        alert("Please Enter Number");
    }
}


function calculate(firstNumber, secondNumber, operatorSymbol) {
    let result;
    let symbol;
    if (operatorSymbol == 'add')
        symbol = '+';
    if (operatorSymbol == 'sub')
        symbol = '-'
    if (operatorSymbol == 'mul')
        symbol = '*'
    if (operatorSymbol == 'div')
        symbol = '/'
    result = firstNumber + symbol + secondNumber;
    result = (eval(result));
   return display(result);

}

function display(result) {
    document.getElementById('textresult').className = "show";
    document.getElementById('textInput').className = "show";
    document.getElementById('textInput').value = result;
    document.getElementById('#headingtheme').innerHTML = "Calculation Done";
    document.getElementById('#headingtheme').style.color = "#565ad1";
}

