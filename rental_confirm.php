<?php include 'common/common-meta-header.php'; ?>

<div class="container">
	<?php include 'common/navibar.php'; ?>

	<div class="main_content">
		<div class="parking_info">
			<h1>Your Rental Information</h1>

			<p>Date: <span id="date"></span></p>
            <p>Location: <span id="location"></span></p>
            <p>Duration: <span id="duration"></span></p>
            <p>Type: <span id="type"></span></p>
            <p>Make: <span id="make"></span></p>
            <p>Year: <span id="year"></span></p>
            <p>Total Paid: <span id="total"></span></p>
			<p>Confirmation: <svg id="barcode"></svg></p>
		</div>
	</div>
</div>

<script src="./scripts/JsBarcode.all.min.js"></script>
<script>
	var confirmation;
	firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var userId = user.uid;
        const dbRef = firebase.database().ref();
        dbRef.child("users").child(userId).child("rental_paid")
            .get().then((snapshot) => {
                if (snapshot.exists()) {
                    var rental_obj = snapshot.val();

                    document.getElementById("type").innerHTML = rental_obj["car_type"];
                    document.getElementById("make").innerHTML = rental_obj["car_make"];
                    document.getElementById("year").innerHTML = rental_obj["car_year"];

                    document.getElementById("date").innerHTML = rental_obj["date"];
                    document.getElementById("location").innerHTML = rental_obj["location"];
                    document.getElementById("duration").innerHTML = rental_obj["duration"]+" hr";
                    document.getElementById("total").innerHTML = "$"+rental_obj["total_paid"];
                    confirmation = rental_obj["confirmation"];

                    //print barcode to page
                    JsBarcode("#barcode", confirmation);
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

</script>
<!-- shared page bottom HTML -->
<?php include 'common/common-footer.php'; ?>