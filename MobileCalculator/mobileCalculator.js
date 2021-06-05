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