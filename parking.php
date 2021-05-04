<?php include 'common/common-meta-header.php'; ?>

<div class="container">
	<?php include 'common/navibar.php'; ?>

	<div class="main_content">
		<div class="parkingtablediv">
			<p>Parking Lots Availabbility</p>
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
		<div class="timepicker">
			<form class="parkingbook">
				<fieldset class="parkingbody">
					<label><strong>Parking Information</strong></label>
					<hr/>
					<label>Choose Location</label>
					<select id="location" class="parkinglist">
						<option label="Select"></option>
						<option value="LO01">LO 01</option>
						<option value="LO02">LO 02</option>
						<option value="LO03">LO 03</option>
						<option value="LO04">LO 04</option>
						<option value="LO05">LO 05</option>
						<option value="LO06">LO 06</option>
						<option value="LO07">LO 07</option>
						<option value="LO08">LO 08</option>
						<option value="LO09">LO 09</option>
						<option value="LO10">LO 10</option>
						<option value="LO11">LO 11</option>
						<option value="LO12">LO 12</option>
						<option value="LO13">LO 13</option>
						<option value="LO14">LO 14</option>
						<option value="LO15">LO 15</option>
						<option value="LO16">LO 16</option>
						<option value="LO17">LO 17</option>
						<option value="LO18">LO 18</option>
						<option value="LO19">LO 19</option>
						<option value="LO20">LO 20</option>
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
					
					<br/>
					

					<br/>
					<hr/>
					<label> *Parking fee: $5/hr </label>
					<br/>
					<br/>
					<input type="button" onclick="checkout()" class="parkingsub" value="Reserve">
				</fieldset>			
			</form>
		</div>
	</div>
</div>

<script src="./scripts/parking.js"></script>
<!-- shared page bottom HTML -->
<?php include 'common/common-footer.php'; ?>