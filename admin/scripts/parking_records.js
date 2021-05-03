//initialize table element and table header
var table = document.createElement("table");
var counter = 0;

var row = document.createElement("tr");

var table_header = document.createElement("th");
table_header.innerHTML = "No.";
row.appendChild(table_header);

table_header = document.createElement("th");
table_header.innerHTML = "Date";
row.appendChild(table_header);

table_header = document.createElement("th");
table_header.innerHTML = "Location";
row.appendChild(table_header);

table_header = document.createElement("th");
table_header.innerHTML = "Duration";
row.appendChild(table_header);

table_header = document.createElement("th");
table_header.innerHTML = "Total";
row.appendChild(table_header);

table_header = document.createElement("th");
table_header.innerHTML = "Record Number";
row.appendChild(table_header);

table.appendChild(row);

firebase.database().ref('users').on('value', function(snapshot) {
	snapshot.forEach(function(childSnapshot) {
		var snap = childSnapshot.val();
		for (i in snap) {
			if (i == "parking_paid") {
				counter++;
				console.log(i + "\n");

				//Create user object
				var parking_obj = {
					date: "",
					spot: "",
					duration: "",
					total_paid: "",
					barcode: ""
				};

				for (n in snap[i]) {
					//console.log(snap[i][n]);
					if (n == 'date') {
						//console.log(snap[i][n]);
						parking_obj["date"] = snap[i][n];
					}
					if (n == 'spot') {
						//console.log(snap[i][n]);
						parking_obj["spot"] = snap[i][n];
					}
					if (n == 'duration') {
						//console.log(snap[i][n]);
						parking_obj["duration"] = snap[i][n];
					}
					if (n == 'total_paid') {
						//console.log(snap[i][n]);
						parking_obj["total_paid"] = snap[i][n];
					}
					if (n == 'barcode') {
						//console.log(snap[i][n]);
						parking_obj["barcode"] = snap[i][n];
					}
				}

				row = document.createElement("tr");

				var cell = document.createElement("td");
				cell.innerHTML = counter;
				row.appendChild(cell);

				cell = document.createElement("td");
				cell.innerHTML = parking_obj["date"];
				row.appendChild(cell);

				cell = document.createElement("td");
				cell.innerHTML = parking_obj["spot"];
				row.appendChild(cell);

				cell = document.createElement("td");
				cell.innerHTML = parking_obj["duration"] + "hr";
				row.appendChild(cell);

				cell = document.createElement("td");
				cell.innerHTML = "$" + parking_obj["total_paid"];
				row.appendChild(cell);

				cell = document.createElement("td");
				cell.innerHTML = parking_obj["barcode"];
				row.appendChild(cell);

				table.appendChild(row);
			}
		}
	});

});

document.getElementById('records_div').appendChild(table);