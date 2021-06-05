function display(data)
         {
             let displayValue=document.getElementById("inputData").value;
             displayValue+=data;
             document.getElementById("inputData").value=displayValue;
         }
         function calculate()
         {
             let calculateString = document.getElementById("inputData").value
             let result = eval(calculateString)
             document.getElementById("inputData").value = result
         }

var result=eval(1+2);
if(result==3){
    console.log(result);
}
