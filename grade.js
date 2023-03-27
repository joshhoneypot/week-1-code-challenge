//the next line links the submit button on html to a variable on javascript
const studentGradeButton = document.getElementById("submitBtn3");

//javascript listens to an event which is the click then runs the student result function
studentGradeButton.addEventListener("click", studentsResults);


// the following function checks the students marks then assigns a grade
function studentsResults(studentGradeButton) {
   
    //line 12 gets marks input by the user and stores it in the marks variable
    const marks = document.getElementById( "marks").value;
    let result;
   

    if(marks>100 || marks<0){
        result='Invalid marks was provided!';
    }
    //grade individual marks
    else if(marks>79){  
        result="Grade A";
    }
    else if(marks>60){
        result="Grade B";
    }
    else if(marks>49){
        result="Grade C"
    }
    else if(marks>40){
        result= "Grade D";
    }
    else{
        result='Grade E'
    }

    //line 36 takes the grade back to html for display
    document.getElementById( "outPutGrade").innerHTML = result;
    //the last line prevents the button from refreshing the page
    studentGradeButton.preventDefault();
 
}
  
 