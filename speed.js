const speedButton = document.getElementById( "submitBtn2" );


speedButton.addEventListener("click", speedCalculator );


function speedCalculator (speedButton ){
  let comments;
  
  const speed = document.getElementById( "speed" ).value;

  var demeritPoints = ((speed - 70) / 5) // declares demeritPoints variable as well as calculating the demerit points
  

  //the first if checks whether the speed recorded gains more than 12 points
  if (speed > (70 + (12 * 5))) {
    comments = "Liscence suspended";
   

  }

  // the second is returns "Ok" if the speed recorded is agreable
  if (speed <= 70) {
    comments = "Ok"


  // the third if checks whether the speed recorded exceeds 70km/hr but does not gain more than 12 points
  } else if (speed > 70 && speed < 131) {
    comments = (`${demeritPoints}`) ;
    
    
  } 

  document.getElementById( "outPut11").innerHTML = comments;
  speedButton.preventDefault();

}



