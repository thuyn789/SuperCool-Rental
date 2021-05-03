var parking_obj;


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var userId = user.uid;
        const dbRef = firebase.database().ref();
        dbRef.child("users").child(userId).child("parking_checkout")
            .get().then((snapshot) => {
                if (snapshot.exists()) {
                    parking_obj = snapshot.val();

                    document.getElementById("checkout_date").innerHTML = parking_obj["date"];
                    document.getElementById("checkout_location").innerHTML = parking_obj["spot"];
                    document.getElementById("checkout_duration").innerHTML = parking_obj["duration"] + " hr";
                    document.getElementById("checkout_total").innerHTML = "$" + parking_obj["total"];
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

    var parking_paid = {
        barcode: parking_obj["barcode"],
        date: parking_obj["date"],
        duration: parking_obj["duration"],
        spot: parking_obj["spot"],
        total_paid: parking_obj["total"],
        name_on_card: cname,
        card_number: ccnum,
        expmonth: expmonth,
        expyear: expyear
    };

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var userId = user.uid;
            firebase.database().ref('users/' + user.uid + "/parking_paid").set(parking_paid, (error) => {
                if (error) {
                    // The write failed...
                    alert("Please try again");
                } else {
                    // Data saved successfully!
                    alert("Checkout successfully! Thank you");
                    window.location.href = "parking_confirm.php";
                }
            });
        } else {
            alert("Please sign in to check out");
            window.location.href = "login.php";
            console.log("User is logged out");
        }
    });


    var unavailable_parking = {
        status: "unavailable"
    };

    //set the parking spot unavailable
    firebase.database().ref('parking_spots/' + parking_obj["spot"]).set(unavailable_parking, (error) => {
        if (error) {
            // The write failed...
            alert("Please try again");
        }
    });

}