
const taxButton = document.getElementById("submitBtn1");

taxButton.addEventListener("click", taxRun );

function taxRun(taxButton){
//line 3 gets the basic salary entered through the web page
const basicSalary = document.getElementById("basicSalary").value;


//iniitializing all declared variables to zero
let payee = 0;
let nhifDeductions = 0;
let nssfDeductions = 0;


//from line 19 to 25 is a set of if else which checks on the basicSalary and determines the payee tax to be charged
if (basicSalary < 24001) {
  payee = basicSalary * 0.1;
} else if (basicSalary > 24000 && basicSalary < 32334) {
  payee = basicSalary * 0.25;
} else if (basicSalary > 32334) {
  payee = basicSalary * 0.3;
}

//from line 28 to 62 the code decides how much nhif to deduct based on kra's standards
if (basicSalary < 6000) {
  nhifDeductions = 150;
} else if (basicSalary < 8000) {
  nhifDeductions = 300;
} else if (basicSalary < 11000) {
  nhifDeductions = 400;
} else if (basicSalary < 15000) {
  nhifDeductions = 500;
} else if (basicSalary < 20000) {
  nhifDeductions = 600;
} else if (basicSalary < 25000) {
  nhifDeductions = 750;
} else if (basicSalary < 30000) {
  nhifDeductions = 850;
} else if (basicSalary < 35000) {
  nhifDeductions = 900;
} else if (basicSalary < 40000) {
  nhifDeductions = 950;
} else if (basicSalary < 45000) {
  nhifDeductions = 1000;
} else if (basicSalary < 50000) {
  nhifDeductions = 1100;
} else if (basicSalary < 60000) {
  nhifDeductions = 1200;
} else if (basicSalary < 70000) {
  nhifDeductions = 1300;
} else if (basicSalary < 80000) {
  nhifDeductions = 1400;
} else if (basicSalary < 90000) {
  nhifDeductions = 1500;
} else if (basicSalary < 100000) {
  nhifDeductions = 1600;
} else {
  nhifDeductions = 1700;
}

// line 68 determines the net salary by deducting all deductions stated
const netSalary = basicSalary - (payee + nhifDeductions + nssfDeductions);


document.getElementById("outPut2").innerHTML = netSalary;
document.getElementById("outPut5").innerHTML = payee;
document.getElementById("outPut6").innerHTML = nhifDeductions;
document.getElementById("outPut7").innerHTML = nssfDeductions;
taxButton.preventDefault(taxButton);



}