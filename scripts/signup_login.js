//Initialize Firebase variable
var auth = firebase.auth();
var database = firebase.database();

//Define Users object
class Users {
    constructor(firstname, lastname,
        username, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
    }
}

// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function signup() {

    // Retrieving the values of form elements 
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    // Defining error variables with a default value
    var isErr = false;

    // Validate first name
    if (fname == "") {
        printError("fnameErr", "Please enter your first name");
        isErr = true;
    } else {
        printError("fnameErr", "");
        isErr = false;
    }

    // Validate last name
    if (lname == "") {
        printError("lnameErr", "Please enter your last name");
        isErr = true;
    } else {
        printError("lnameErr", "");
        isErr = false;
    }

    // Validate username
    if (username == "") {
        printError("usernameErr", "Please enter your username");
        isErr = true;
    } else {
        printError("usernameErr", "");
        isErr = false;
    }

    // Validate email
    if (email == "") {
        printError("emailErr", "Please enter your email");
        isErr = true;
    } else {
        printError("emailErr", "");
        isErr = false;
    }

    // Validate password
    if (password == "") {
        printError("passwordErr", "Please enter your password");
        isErr = true;
    } else {
        printError("passwordErr", "");
        isErr = false;
    }

    // Validate password confirmation
    if (confirm_password == "") {
        printError("confPasswordErr", "Please confirm your password");
        isErr = true;
    } else {
        if (password.localeCompare(confirm_password) !== 0) {
            printError("passwordErr", "Your password does not match");
            printError("confPasswordErr", "Your password does not match");
            isErr = true;
        } else {
            printError("passwordErr", "");
            printError("confPasswordErr", "");
            isErr = false;
        }
    }

    //After checking, if there is error
    //ask user to refill the form
    if (isErr) {
        return;
    }

    //Create user object with the information from text field
    const user = new Users(fname, lname, username, email);

    //Check if user is login
    auth.onAuthStateChanged(function(user) {
        if (user) {
            // User is already signed in.
            // return
            var logout_button = document.getElementsByClassName("hide")[0];
            logout_button.setAttribute("class", "shown");

            //The difference between href and replace()
            //replace() removes the URL of the current document from 
            //the document history, meaning that it is not possible to 
            //use the "back" button to navigate back to the original document.
            window.location.replace("index.php");
            return;
        } else {
            // [START auth_signin_password]
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;

                    if (user !== null) {
                        alert("Sign up successful. Thank you");
                    }

                    //On success, take user back to index page
                    window.location.replace("index.php");
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    //If email address is used, alert user
                    alert(errorMessage);
                });
            // [END auth_signin_password]
        }
    });
    return;
}

function login() {

    // Retrieving the values of form elements 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Defining error variables with a default value
    var isErr = false;

    // Validate email
    if (email == "") {
        printError("emailErr", "Please enter your email");
        isErr = true;
    } else {
        printError("emailErr", "");
        isErr = false;
    }

    // Validate password
    if (password == "") {
        printError("passwordErr", "Please enter your password");
        isErr = true;
    } else {
        printError("passwordErr", "");
        isErr = false;
    }

    //After checking, if there is error
    //ask user to refill the form
    if (isErr) {
        return;
    }

    //Check if user is login
    auth.onAuthStateChanged(function(user) {
        if (user) {
            // User is already signed in.
            // return

            var logout_button = document.getElementsByClassName("hide")[0];
            logout_button.setAttribute("class", "shown");

            window.location.replace("index.php");

            return;
        } else {
            // No user is signed in.
            // Sign in users with the provided login credential 

            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(() => {
                    // Existing and future Auth states are now persisted in the current
                    // session only. Closing the window would clear any existing state even
                    // if a user forgets to sign out.
                    // ...
                    // New sign-in will be persisted with session persistence.
                    return firebase.auth().signInWithEmailAndPassword(email, password)
                        .then((userCredential) => {
                            // Signed in 
                            var user = userCredential.user;
                            alert("Login successful");
                            window.location.replace("index.php");
                            // ...
                        });
                })
                .catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    //If error occured, alert user
                    alert(errorMessage);
                });
        }
    });
}

function logout() {
    // [START auth_sign_out]
    auth.signOut().then(() => {
        // Sign-out successful.

        var logout_button = document.getElementsByClassName("shown")[0];
        logout_button.setAttribute("class", "hide");

        window.location.replace("index.php");

    }).catch((error) => {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;

        //If error occured, alert user
        alert(errorMessage);
    });
    // [END auth_sign_out]
}