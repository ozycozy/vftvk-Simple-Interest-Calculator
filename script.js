function updateRate() 
{
	//get the value of input with id="rate"
    var rateval = document.getElementById("rate").value;
    //display the current value of the id="rate"
    document.getElementById("rate_val").innerText=rateval+"%";
}

function compute() {
	var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate / 100;
	//get the value of the input with id="principal"
	//check if the input is not empty or zero or negative value
	//if the value is correct then process to compute
  var x = document.getElementById("principal").value;
  if ( x < 1 || x == 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
  } else {
  	document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"% </mark> \<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
  }
}
