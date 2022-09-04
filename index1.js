
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var btnLogin = document.getElementById("loginBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
if(btn) {
  btn.onclick = function() {
    var x = document.getElementById("result");
    var yourAnswer = document.getElementById("userAnswer").value;
    if( yourAnswer == x.value) {
      modal.style.display = "block";
      document.getElementById("correct").style.display = "block";    
  } else {
    modal.style.display = "block";
    document.getElementById("wrong").style.display = "block";    
  }
  Resetinput() 
  }
}

btnLogin.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("wrong").style.display = "none";    
  document.getElementById("correct").style.display = "none";    

}
function Resetinput ()  {
  document.getElementById("firstNumber").value="";
  document.getElementById("secondNumber").value="";
  document.getElementById("userAnswer").value="";
  document.getElementById("result").value="";

  
}