<?php include 'common/common-meta-header.php'; ?>

<div class="container">
	<?php include 'common/navibar.php'; ?>

	<div class="main_content">
		<div class="timepicker">
			<form class="parkingbook">
				<fieldset class="parkingbody">
					<label><strong>Rental Car</strong></label>
					<hr/>
					<br/>

					<label>Choose Your Car</label>
					<hr/>
					<br/>
					<label>Type</label>
					<select id="car_type" class="parkinglist">
						<option label="Select"></option>
						<option value="compact">Compact</option>
						<option value="midsize">Mid Size</option>
						<option value="fullsize">Full Size</option>
						<option value="intersuv">Intermediate SUV</option>
						<option value="midpickup">Mid-Size Pickup</option>
						<option value="fullpickup">Full Size Pickup</option>
						<option value="elitesuv">Standard Elite SUV</option>
						<option value="luxury">Luxury</option>
						<option value="passengervan">15 Passenger Van</option>
						<option value="premelitesuv">Premium Elite SUV</option>
					</select>
					<label>Make</label>
					<select id="car_make" class="parkinglist">
						<option label="Select"></option>
						<option value="Audi">Audi</option>
						<option value="Bentley">Bentley</option>
						<option value="BMW">BMW</option>
						<option value="Maserati">Maserati</option>
						<option value="Ferrari">Ferrari</option>
						<option value="Lamborghini">Lamborghini</option>
					</select>

					<label>Year</label>
					<select id="car_year" class="parkinglist">
						<option label="Select"></option>
						<option value="2021">2021</option>
						<option value="2020">2020</option>
						<option value="2019">2019</option>
						<option value="2018">2018</option>
						<option value="2017">2017</option>
						<option value="2016">2016</option>
						<option value="2015">2015</option>
					</select>
					
					<br/>
				</fieldset>
			</form>
		</div>
		<div class="timepicker">
			<form class="parkingbook">
				<fieldset class="parkingbody">
					<label><strong>Date</strong></label>
					<hr/>
					<label>Choose Location</label>
					<select id="location" class="parkinglist">
						<option label="Select"></option>
						<option value="ATLAir">Atlanta Airport</option>
						<option value="ATLCity">Atlanta City</option>
						<option value="ATLSandy">Sandy Springs</option>
						<option value="ATLMarie">Marietta</option>
						<option value="ATLDun">Dunwoody</option>
					</select>
					<br/>

					<label>Choose Date</label>
					<hr/>
					<br/>
					<label>Month</label>
					<select id="month" class="parkinglist">
						<option value="01">January</option>
						<option value="02">February</option>
						<option value="03">March</option>
						<option value="04">April</option>
						<option value="05">May</option>
						<option value="06">June</option>
						<option value="07">July</option>
						<option value="08">August</option>
						<option value="09">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
					<label>Date</label>
					<select id="date" class="parkinglist">
						<option value="01">1</option>
						<option value="02">2</option>
						<option value="03">3</option>
						<option value="04">4</option>
						<option value="05">5</option>
						<option value="06">6</option>
						<option value="07">7</option>
						<option value="08">8</option>
						<option value="09">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
						<option value="22">22</option>
						<option value="23">23</option>
						<option value="24">24</option>
						<option value="25">25</option>
						<option value="26">26</option>
						<option value="27">27</option>
						<option value="28">28</option>
						<option value="29">29</option>
						<option value="30">30</option>
						<option value="31">31</option>
					</select>

					<label>Year</label>
					<select id="year" class="parkinglist">
						<option value="2021">2021</option>
						<option value="2022">2022</option>
						<option value="2023">2023</option>
						<option value="2024">2024</option>
					</select>

					<label>Hour</label>
					<select id="hour" class="parkinglist">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
						<option value="22">22</option>
						<option value="23">23</option>
						<option value="00">00</option>
					</select>
					
					<br/><br/>
					<hr/>
					<label> *Rate: $200.99/hr </label>
					<br/>
					<br/>
					<input type="button" onclick="checkout()" class="parkingsub" value="Reserve">
				</fieldset>
			</form>
		</div>
	</div>
</div>

<script src="./scripts/rental.js"></script>
<!-- shared page bottom HTML -->
<?php include 'common/common-footer.php'; ?>