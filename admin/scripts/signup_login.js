//Initialize Firebase variable
var auth = firebase.auth();
var database = firebase.database();

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

    var user_obj = {
        first_name: fname,
        last_name: lname,
        user_name: username,
        email_address: email
    };

    // [START auth_signin_password]
    auth.createUserWithEmailAndPassword(email, password)
        .then(function(user) {
            var user = auth.currentUser;

            database.ref('admin/' + user.uid).set(user_obj, (error) => {
                if (error) {
                    // The write failed...
                    alert("Failed upload data");
                } else {
                    // Data saved successfully!
                    alert("Sign up successful. Thank you");

                    //On success, take user back to index page
                    //The difference between href and replace()
                    //replace() removes the URL of the current document from 
                    //the document history, meaning that it is not possible to 
                    //use the "back" button to navigate back to the original document.
                    window.location.replace("admin_login.php");
                }
            });

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            //If email address is used, alert user
            alert(errorMessage);
            return;
        });
    // [END auth_signin_password]
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

    // Sign in users with the provided login credential
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
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
                    window.location.replace("admin_menu.php");
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

function updateInfo() {
    // Retrieving the values of form elements 
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

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

    var user_obj = {
        first_name: fname,
        last_name: lname,
        user_name: username,
        email_address: email
    };

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var userId = user.uid;
            const dbRef = firebase.database().ref();
            dbRef.child("admin").child(userId).set(user_obj, (error) => {
                if (error) {
                    // The write failed...
                    alert("Failed update user info");
                } else {
                    // Data saved successfully!
                    alert("Update successful");
                }
            });
        } else {
            console.log("User is logged out");
        }
    });
}
