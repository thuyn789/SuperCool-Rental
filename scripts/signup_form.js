
// Defining a function to display error message
function printError(elemId, hintMsg) {
	document.getElementById(elemId).innerHTML = hintMsg;
}

    // Defining a function to validate form 
    function validateForm() {

        // Retrieving the values of form elements 
        var fname = document.getElementById("first_name").value;
        var lname = document.getElementById("last_name").value;
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirm_password = document.getElementById("confirm_password").value;

        //Initialize error message for alert box
        var errorMsg = "";
        
        // Defining error variables with a default value
        var isErr = false;
        
        // Validate first name
        if(fname == "") {
        	printError("fnameErr", "Please enter your first name");
        	isErr = true;
        }else{
        	printError("fnameErr", "");
        	isErr = false;
        }
        
        // Validate last name
        if(lname == "") {
        	printError("lnameErr", "Please enter your last name");
        	isErr = true;
        }else{
        	printError("lnameErr", "");
        	isErr = false;
        }

        // Validate first username
        if(username == "") {
        	printError("usernameErr", "Please enter your username");
        	isErr = true;
        }else{
        	printError("usernameErr", "");
        	isErr = false;
        }

        // Validate first name
        if(email == "") {
        	printError("emailErr", "Please enter your email");
        	isErr = true;
        }else{
        	printError("emailErr", "");
        	isErr = false;
        }

        // Validate first name
        if(password == "") {
        	printError("passwordErr", "Please enter your password");
        	isErr = true;
        }else{
        	printError("passwordErr", "");
        	isErr = false;
        }

        // Validate first name
        if(confirm_password == "") {
        	printError("confPasswordErr", "Please enter confirm your password");
        	isErr = true;
        }else{
        	printError("confPasswordErr", "");
        	isErr = false;
        }  

        if(password.localeCompare(confirm_password) !== 0){
        	printError("passwordErr", "Your password does not match");
        	printError("confPasswordErr", "Your password does not match");
        	isErr = true;
        }else{
        	printError("passwordErr", "");
        	printError("confPasswordErr", "");
        	isErr = false;
        }

        //After checking, if there is no error
        //Save user data to firebase
        if(!isErr){
        		
        }else{

        }
    }
