const dbRef = firebase.database().ref();
var count = 0;

dbRef.child("parking_spots").child("LO01").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO01").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO02").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO02").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO03").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO03").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO04").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO04").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO05").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO05").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO06").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO06").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO07").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO07").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO08").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO08").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO09").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO09").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO10").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO10").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO11").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO11").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO12").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO12").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO13").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO13").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO14").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO14").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO15").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO15").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO16").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO16").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO17").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO17").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO18").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO18").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO19").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO19").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

dbRef.child("parking_spots").child("LO20").get().then((snapshot) => {
    count++;
    if (snapshot.exists()) {
        var parking_obj = snapshot.val();

        if (parking_obj["status"] == "unavailable") {
            document.getElementById("LO20").className = "disable";
            document.getElementById("location").options[count].disabled = true;
        }
    }
});

function checkout() {

    // Retrieving the values of form elements 
    var spot = document.getElementById("location").value;
    var month = document.getElementById("month").value;
    var date = document.getElementById("date").value;
    var year = document.getElementById("year").value;
    var hour = document.getElementById("hour").value;

    var total = parseInt(hour) * 5;

    var barcode = barcodeGenerator(15);

    if (spot == "") {
        alert("Please choose a parking spot");
        return;
    }

    //Create object with the information from text field
    var parking_checkout = {
        spot: spot,
        date: month + "/" + date + "/" + year,
        duration: hour,
        total: total,
        barcode: barcode
    };

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            firebase.database().ref('users/' + user.uid + "/parking_checkout").set(parking_checkout, (error) => {
                if (error) {
                    // The write failed...
                    alert("Please try again");
                } else {
                    // Data saved successfully!

                    window.location.href = "parking_checkout.php";
                }
            });
        } else {
            alert("Please sign in to check out");
            window.location.href = "login.php";
            console.log("User is logged out");
        }
    });
}

function barcodeGenerator(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}