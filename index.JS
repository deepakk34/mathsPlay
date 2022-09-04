function setRandom()
{
        
        num1 = document.getElementById("firstNumber").value=Math.floor(Math.random()*10);
        num2 = document.getElementById("secondNumber").value=Math.floor(Math.random()*10);
        
}





function showResult() {
        var x = document.getElementById("result");
        // if (x.style.display === "none") {
        //   x.style.display = "block";
        // } else {
        //   x.style.display = "none";
        // }
        var yourAnswer = document.getElementById("userAnswer").value;
        if( yourAnswer == x.value) {
              alert("correct answer");
       } else {
                alert("wrong answer write answer is "+ x.value);

        }
      }
      


function multiplyBy()
{
        
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").value = num1 * num2;
}

function divideBy()
{ 
        
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").value =  num1 / num2; 

}
function sum() 
{ 
        
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").value = Number(num1) +Number(num2);



}
function subtract() 
{ 
                
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").value = num1 - num2;

}

