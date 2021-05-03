<?php include 'common/common-meta-header.php'; ?>

<div class="container">
	<?php include 'common/navibar.php'; ?>

	<div class="main_content">

		<?php include 'common/admin_submenu.php'; ?>

		<div class="parkingtablediv">
			<p>Parking Inventory</p>
			<table class="parkingtable">
				<tr>
					<td id="LO01">LO 01</td>
					<td id="LO11">LO 11</td>
				</tr>
				<tr>
					<td id="LO02">LO 02</td>
					<td id="LO12">LO 12</td>
				</tr>
				<tr>
					<td id="LO03">LO 03</td>
					<td id="LO13">LO 13</td>
				</tr>
				<tr>
					<td id="LO04">LO 04</td>
					<td id="LO14">LO 14</td>
				</tr>
				<tr>
					<td id="LO05">LO 05</td>
					<td id="LO15">LO 15</td>
				</tr>
				<tr>
					<td id="LO06">LO 06</td>
					<td id="LO16">LO 16</td>
				</tr>
				<tr>
					<td id="LO07">LO 07</td>
					<td id="LO17">LO 17</td>
				</tr>
				<tr>
					<td id="LO08">LO 08</td>
					<td id="LO18">LO 18</td>
				</tr>
				<tr>
					<td id="LO09">LO 09</td>
					<td id="LO19">LO 19</td>
				</tr>
				<tr>
					<td id="LO10">LO 10</td>
					<td id="LO20">LO 20</td>
				</tr>
			</table>
		</div>
	</div>
</div>

<script>
	var count = 0;

	firebase.database().ref('parking_spots').on('value', function(snapshot) {
		var snap = snapshot.val();
		for (i in snap) {
			count++;
		//console.log(i + "\n");

		var spot = {
			status: ""
		}

		for (n in snap[i]) {
			//console.log(n + ": " + snap[i][n]);
			spot["status"] = snap[i][n];

			if (spot["status"] == "unavailable") {
				document.getElementById(i).className = "disable";
			}
		}
	}
});
</script>
<!-- shared page bottom HTML -->
<?php include 'common/common-footer.php'; ?>