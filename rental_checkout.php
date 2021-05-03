<?php include 'common/common-meta-header.php'; ?>

<div class="container">
	<?php include 'common/navibar.php'; ?>

	<div class="main_content">
		<div class="rental_info">
			<h1>Checkout Cart</h1>

			<p>Date: <span id="checkout_date"></span></p>
			<p>Location: <span id="checkout_location"></span></p>
			<p>Duration: <span id="checkout_duration"></span></p>
			<p>Type: <span id="checkout_type"></span></p>
			<p>Make: <span id="checkout_make"></span></p>
			<p>Year: <span id="checkout_year"></span></p>
			<p>Total: <span id="checkout_total"></span></p>
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

<script src="./scripts/rental_checkout.js"></script>
<!-- shared page bottom HTML -->
<?php include 'common/common-footer.php'; ?>