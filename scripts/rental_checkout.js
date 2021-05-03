var rental_obj;


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var userId = user.uid;
        const dbRef = firebase.database().ref();
        dbRef.child("users").child(userId).child("rental_checkout")
            .get().then((snapshot) => {
                if (snapshot.exists()) {
                    rental_obj = snapshot.val();

                    document.getElementById("checkout_type").innerHTML = rental_obj["car_type"];
                    document.getElementById("checkout_make").innerHTML = rental_obj["car_make"];
                    document.getElementById("checkout_year").innerHTML = rental_obj["car_year"];

                    document.getElementById("checkout_date").innerHTML = rental_obj["date"];
                    document.getElementById("checkout_location").innerHTML = rental_obj["location"];
                    document.getElementById("checkout_duration").innerHTML = rental_obj["duration"] + " hr";
                    document.getElementById("checkout_total").innerHTML = "$" + rental_obj["total"];
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    } else {
        alert("Please sign in to check out");
        window.location.href = "login.php";
        console.log("User is logged out");
    }
});

function place_order() {

    // Retrieving the values of form elements 
    var cname = document.getElementById("card_name").value;
    var ccnum = document.getElementById("card_num").value;
    var expmonth = document.getElementById("exp_month").value;
    var expyear = document.getElementById("exp_year").value;
    var cvv = document.getElementById("cvc").value;

    // Defining error variables with a default value
    var isErr = false;


    // Validate first name
    if (cname == "") {
        isErr = true;
    }

    if (ccnum == "") {
        isErr = true;
    }

    if (expmonth == "MM") {
        isErr = true;
    }

    if (expyear == "YY") {
        isErr = true;
    }

    if (cvv == "") {
        isErr = true;
    }

    //After checking, if there is error
    //ask user to refill the form
    if (isErr) {
        alert("Please fill out payment form completely");
        return;
    }

    var rental_paid = {
        car_make: rental_obj["car_make"],
        car_type: rental_obj["car_type"],
        car_year: rental_obj["car_year"],
        confirmation: rental_obj["confirmation"],
        date: rental_obj["date"],
        duration: rental_obj["duration"],
        location: rental_obj["location"],
        total_paid: rental_obj["total"],
        name_on_card: cname,
        card_number: ccnum,
        expmonth: expmonth,
        expyear: expyear
    };

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var userId = user.uid;
            firebase.database().ref('users/' + user.uid + "/rental_paid").set(rental_paid, (error) => {
                if (error) {
                    // The write failed...
                    alert("Please try again");
                } else {
                    // Data saved successfully!
                    alert("Checkout successfully! Thank you");
                    window.location.href = "rental_confirm.php";
                }
            });
        } else {
            alert("Please sign in to check out");
            window.location.href = "login.php";
            console.log("User is logged out");
        }
    });
}