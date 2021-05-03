const rate = 200.99

function checkout() {

	// Retrieving the values of form elements 
	var car_type = document.getElementById("car_type").value;
	var car_make = document.getElementById("car_make").value;
	var car_year = document.getElementById("car_year").value;

	var location = document.getElementById("location").value;
	var month = document.getElementById("month").value;
	var date = document.getElementById("date").value;
	var year = document.getElementById("year").value;
	var hour = document.getElementById("hour").value;

	var total = parseInt(hour) * parseInt(rate);

	var confirmation = barcodeGenerator(20);

	// Defining error variables with a default value
    var isErr = false;

	if (car_type == "") {
		isErr = true;
	}

	if (car_make == "") {
		isErr = true;
	}

	if (car_year == "") {
		isErr = true;
	}

	if (location == "") {
		isErr = true;
	}

	if (month == "") {
		isErr = true;
	}

	if (date == "") {
		isErr = true;
	}

	if (year == "") {
		isErr = true;
	}

	if (hour == "") {
		isErr = true;
	}

	if (isErr) {
        alert("Please fill out payment form completely");
        return;
    }

	//Create object with the information from text field
	var rental_checkout = {
		car_type: car_type,
		car_make: car_make,
		car_year: car_year,
		location: location,
		date: month + "/" + date + "/" + year,
		duration: hour,
		total: total,
		confirmation: confirmation
	};

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			firebase.database().ref('users/' + user.uid + "/rental_checkout").set(rental_checkout, (error) => {
				if (error) {
					// The write failed...
					alert("Please try again");
				} else {
					// Data saved successfully!

					window.location.href = "rental_checkout.php";
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