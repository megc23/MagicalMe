function AstronomyAnswer(){
  var password = 
      document.getElementById("AstronomyQuestion");
  var passwordText= password.value;
  if(passwordText=="Astrylis"){
    return true;
  }
  alert("Incorrect! Try again")
  return false
}