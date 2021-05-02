<?php include 'common/common-meta-header.php'; ?>

<div class="container">

	<?php include 'common/navibar.php'; ?>

	<div class="main_content">
		
		<div class="intro">
			<h1>Thank you for using our services</h1> <br/>
			<h2>You can now safely close the window.</h2>
		</div>
	</div>
</div>

<script>
	(function logout() {
    // [START auth_sign_out]
    	firebase.auth().signOut().then(() => {
		// Sign-out successful.

		//var logout_button = document.getElementsByClassName("show")[0];
		//var login_button = document.getElementsByClassName("hide")[0];

		//logout_button.setAttribute("class", "hide");
		//login_button.setAttribute("class", "show");

			alert("Logout successful");

		}).catch((error) => {
			// An error happened.
			var errorCode = error.code;
			var errorMessage = error.message;

			//If error occured, alert user
			alert(errorMessage);
    	});

    		// [END auth_sign_out]
	})();
</script>
<script src="./scripts/signup_login.js"></script>
<?php include 'common/common-footer.php'; ?>