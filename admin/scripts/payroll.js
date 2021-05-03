//initialize table element and table header
document.write("<table>");
document.write("<tr>");
document.write("<th>" + "No." + "</th>");
document.write("<th>" + "Number of Hours Worked" + "</th>");
document.write("<th>" + "Employee's Pay for the Week" + "</th>");
document.write("</tr>");

//initialize counter
var counter = 1;

//initialize total worked hours and total wages
var totalHours = totalWage = 0;

//initialize 1st worked hours
var hours = prompt("Please enter hours worked: (-1 to terminate)", "");

if (hours < 0) {
	if (confirm("Do you want to cancel entering first employee hours?")) {
		alert("Cancellation successful. Thank you");
	} else {
		hours = prompt("Please enter hours worked: (-1 to terminate)", "");
	}
}

while (hours != -1 && hours >= 0) {

	//calculate payroll for current employee
	if (hours <= 40 && hours >= 0) {
		var wage = hours * 15;
	} else if (hours > 40) {
		var wage = (40 * 15) + ((hours - 40) * 15 * 1.5);
	}

	//calculate total hours and total wage of all employee
	totalHours += parseInt(hours);
	totalWage += wage;

	//write records for payroll
	document.write("<tr>");
	document.write("<td>" + counter + "</td>");
	document.write("<td>" + hours + "</td>");
	document.write("<td>" + wage + "</td>");
	document.write("</tr>");
	counter++;

	//prompt for another employee hours
	hours = prompt("Please enter another hours worked: (-1 to terminate)", "");
}

//write the total and closing table elements
document.write("<tr>");
document.write("<th>" + "Total" + "</th>");
document.write("<th>" + totalHours + "</th>");
document.write("<th>" + totalWage + "</th>");
document.write("</tr>");
document.write("</table>");