<?php include 'common/common-meta-header.php'; ?>

<div class="container">
	<?php include 'common/navibar.php'; ?>

	<div class="main_content">
		<div class="parking_info">
			<h1>Your Parking Information</h1>

			<p>Date: <span id="date"></span></p>
			<p>Duration: <span id="duration"></span></p>
			<p>Spot: <span id="spot"></span></p>
			<p>Total Paid: <span id="total"></span></p>
			<p>Barcode: <svg id="barcode"></svg></p>
		</div>
	</div>
</div>

<script src="./scripts/JsBarcode.all.min.js"></script>
<script>
	var code;
	firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var userId = user.uid;
        const dbRef = firebase.database().ref();
        dbRef.child("users").child(userId).child("parking_paid")
            .get().then((snapshot) => {
                if (snapshot.exists()) {
                    var parking_obj = snapshot.val();

                    document.getElementById("date").innerHTML = parking_obj["date"];
                    document.getElementById("spot").innerHTML = parking_obj["spot"];
                    document.getElementById("duration").innerHTML = parking_obj["duration"]+" hr";
                    document.getElementById("total").innerHTML = "$"+parking_obj["total_paid"];
                    code = parking_obj["barcode"];

                    //print barcode to page
                    JsBarcode("#barcode", code);
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