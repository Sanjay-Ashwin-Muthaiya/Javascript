function operate() {
    validate();
}
function getValues() {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    let operatorSymbol = document.getElementById("operation").value;
    validate(firstNumber,secondNumber,operatorSymbol);
}
function validate(firstNumber,secondNumber,operatorSymbol) {
    if(firstNumber!=""&&secondNumber!=""){
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        if((Number.isInteger(firstNumber))&&(Number.isInteger(secondNumber))){
            return "Validate Success";
        }else{
            return "Enter Number";
        }
    }else{
        return "Enter Number";
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
    return result;
}

function display(result) {
    document.getElementById('textresult').className = "show";
    document.getElementById('textInput').className = "show";
    document.getElementById('textInput').value = result;
    document.getElementById('#headingtheme').innerHTML = "Calculation Done";
    document.getElementById('#headingtheme').style.color = "#565ad1";
}

function calculateAddTest() {
    let add = calculate(1, 5, "add");
    if (add == 6) {
        console.log("Add Test Passed");
    } else {
        console.log("Add Test Failed");
    }
}

function calculateAddNegativeTest() {
    let add = calculate(-1, 5, "add");
    if (add == 4) {
        console.log("Add Negative Test Passed");
    } else {
        console.log("Add Negative Test Failed");
    }
}
function calculateSubtractTest() {
    let sub = calculate(10, 4, "sub");
    if (sub == 6) {
        console.log("Subract Test Passed");
    } else {
        console.log("Subtract Test Failed");
    }
}
function calculateMultiplyTest() {
    let mul = calculate(10, 4, "mul");
    if (mul == 40) {
        console.log("Multiply Test Passed");
    } else {
        console.log("Multiply Test Failed");
    }
}

function calculateDivideTest() {
    let div = calculate(10, 2, "div");
    if (div == 5) {
        console.log("Divide Test Passed");
    } else {
        console.log("Divide Test Failed");
    }
}

function validateNumberTest(){
    let val=validate(1,2,"add");
    if(val=="Validate Success"){
        console.log("Validate Number Test Passed")
    }else{
        console.log("Validate Number Test Failed");
    }
}
function validateCharacterTest(){
    let val=validate(1,"","add");
    if(val=="Enter Number"){
        console.log("Validate Character Test Passed")
    }else{
        console.log("Validate Character Test Failed");
    }
}
calculateAddTest();
calculateSubtractTest();
calculateMultiplyTest();
calculateDivideTest();
validateNumberTest();
validateCharacterTest();
calculateAddNegativeTest()