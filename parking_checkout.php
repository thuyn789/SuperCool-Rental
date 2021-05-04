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
			<div class="credit_container">
				<div class="card_info">
					<h2>Credit Card</h2>
					<br/>
				</div>
				<div class="flip_container">
					<div class="flip" onclick="this.classList.toggle('flipped')">
						<div class="front" id="front">
							<div class="bank">Card Example</div>
							<br/>
							<div class="chip"><img src="./images/chip.png" alt="chip"></div>
							<div class="card_number" id="cardnumber">•••• •••• •••• ••••</div>
							<div class="card_name" id="cardname">CardHolder</div>
							<div class="good_thru">Good Thru</div>
							<div class="exp_date">
								<div id="expmonth">MM</div>
								<div id="expslash">/</div>
								<div id="expyear">YY</div>
							</div>
						</div>

						<div class="back" id="back">
							<div class="back_style"></div>
							<div class="info_style"></div>
							<div class="cvc" id="securitycode">CVC</div>
							<img src="#" id="logo-img" alt="logo">
						</div>
					</div>
				</div>

				<input id="card_num" type="tel" name="cardnumberInput" placeholder="Card Number" onkeyup="cardType(this.value)" maxlength="19">

				<input id="card_name" type="text" name="nameInput" placeholder="Card Holder" onkeyup="cardName()">

				<div id="exp_date">
					<select id="exp_month" name="expmonthInput" onchange="cardMonth()">
						<option selected disabled id="exp-month">MM</option>
						<option value="01">01</option>
						<option value="02">02</option>
						<option value="03">03</option>
						<option value="04">04</option>
						<option value="05">05</option>
						<option value="06">06</option>
						<option value="07">07</option>
						<option value="08">08</option>
						<option value="09">09</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
					</select> 

					<label id="exp_slash">/</label>
					<select id="exp_year" name="expyearInput" onchange="cardYear()">
						<option selected disabled id="exp-year">YY</option>
						<option value="21">21</option>
						<option value="22">22</option>
						<option value="23">23</option>
						<option value="24">24</option>
						<option value="25">25</option>
						<option value="26">26</option>
						<option value="27">27</option>
						<option value="28">28</option>
					</select>
				</div>

				<input id="cvc" type="text" name="cvcInput" placeholder="CVC" onkeyup="cvc()" maxlength="3">

				<div id="card_type">
					<div id="visa" style="display: none">Visa</div>
					<div id="master" style="display: none"><span>Master</span>Card</div>
					<div id="amex" style="display: none">American Express</div>
					<div id="discover" style="display: none">Discover</div>
				</div>

				<input id="submit-btn" class="btn" type="button" onclick="place_order()" value="Place Your Order"><br/>
			</div>
		</div>
	</div>
</div>

<script src="./scripts/credit_card.js"></script>
<script src="./scripts/parking_checkout.js"></script>
<!-- shared page bottom HTML -->
<?php include 'common/common-footer.php'; ?>