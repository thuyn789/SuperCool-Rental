var count = 0;

firebase.database().ref('parking_spots').on('value', function(snapshot) {
	var snap = snapshot.val();
	for (i in snap) {
		count++;
		//console.log(i + "\n");

		var spot = {
			status: ""
		};

		for (n in snap[i]) {
			//console.log(n + ": " + snap[i][n]);
			spot["status"] = snap[i][n];

			if (spot["status"] == "unavailable") {
				document.getElementById(i).className = "disable";
				document.getElementById("location").options[count].disabled = true;
			}
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