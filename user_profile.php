<?php include 'common/common-meta-header.php'; ?>

<div class="container">
	<?php include 'common/navibar.php'; ?>

	<div class="main_content">
		<div class="user_menu">
			<h1>User Menu</h1><br/>
			<ul>
				<li><a href="user_profile.php">Profile</a></li>
				<li><a href="rental_confirm.php">Rental</a></li>
				<li><a href="parking_confirm.php">Parking</a></li>
			</ul>

		</div>
		<div class="sub_content">
			<div class="register_form">
				<form>
					<img src="./images/user_icon.png" alt="user icon">
					<h2>Update User Info</h2>
					<div class="error" id="fnameErr"></div>
					<input id="first_name" class="input_box" type="text" size="16" placeholder="First Name"><br/>

					<div class="error" id="lnameErr"></div>
					<input id="last_name" class="input_box" type="text" size="16" placeholder="Last Name"><br/>

					<div class="error" id="usernameErr"></div>
					<input id="username" class="input_box" type="text" size="16" placeholder="Username"><br/>

					<div class="error" id="emailErr"></div>
					<input id="email" class="input_box" type="text" size="16" placeholder="Email"><br/>

					<input id="submit-btn" class="btn" type="button" onclick="updateInfo()" value="Update Info"><br/>
				</form>
			</div>
		</div>
	</div>
</div>


<script src="./scripts/signup_login.js"></script>
<script>
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
	    // User is signed in.
	    var userId = user.uid;
	    const dbRef = firebase.database().ref();
	    dbRef.child("users").child(userId).get().then((snapshot) => {
	    	if (snapshot.exists()) {
	    		var user_obj = snapshot.val();

	    		document.getElementById("first_name").value = user_obj["first_name"];
	    		document.getElementById("last_name").value = user_obj["last_name"];
	    		document.getElementById("username").value = user_obj["user_name"];
	    		document.getElementById("email").value = user_obj["email_address"];
	    	} else {
	    		console.log("No data available");
	    	}
	    }).catch((error) => {
	    	console.error(error);
	    });
	}else{
		console.log("User is logged out");
	}
});
</script>
<!-- shared page bottom HTML -->
<?php include 'common/common-footer.php'; ?>
