<?php include 'common/common-meta-header.php'; ?>

<div class="container">
	<?php include 'common/navibar.php'; ?>

	<div class="main_content">
		<div class="parkingtablediv">
			<p>Checkout Cart</p>
			<table class="parkingtable">
				<tr>
					<th>Date</th>
					<th>Location</th>
					<th>Duration</th>
					<th>Total</th>
					
				</tr>
				<tr>
					<td id="checkout_date"></td>
					<td id="checkout_location"></td>
					<td id="checkout_duration"></td>
					<td id="checkout_total"></td>
				</tr>
			</table>
		</div>
		<div>
			<div class="payment_form">
				<form>
					<h3>Payment</h3><br/>
					<label for="cname">Name on Card</label><br/>
					<input type="text" id="cname" name="cardname" placeholder="Name On Card"><br/><br/>
					<label for="ccnum">Credit card number</label><br/>
					<input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"><br/><br/>
					<label for="expmonth">Exp Month</label><br/>
					<input type="text" id="expmonth" name="expmonth" placeholder="September"><br/><br/>

					<label for="expyear">Exp Year</label><br/>
					<input type="text" id="expyear" name="expyear" placeholder="2021"><br/><br/>

					<label for="cvv">CVV</label><br/>
					<input type="text" id="cvv" name="cvv" placeholder="352">

					<input id="submit-btn" class="btn" type="button" onclick="place_order()" value="Place Your Order"><br/>
				</form>
			</div>
		</div>
	</div>
</div>

<script src="./scripts/parking_checkout.js"></script>
<!-- shared page bottom HTML -->
<?php include 'common/common-footer.php'; ?>