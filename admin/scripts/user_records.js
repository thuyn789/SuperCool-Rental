//initialize table element and table header
var table = document.createElement("table");
var counter = 0;

var row = document.createElement("tr");

var table_header = document.createElement("th");
table_header.innerHTML = "No.";
row.appendChild(table_header);

table_header = document.createElement("th");
table_header.innerHTML = "First Name";
row.appendChild(table_header);

table_header = document.createElement("th");
table_header.innerHTML = "Last Name";
row.appendChild(table_header);

table_header = document.createElement("th");
table_header.innerHTML = "User Name";
row.appendChild(table_header);

table_header = document.createElement("th");
table_header.innerHTML = "Email Address";
row.appendChild(table_header);

table.appendChild(row);

firebase.database().ref('users').on('value', function(snapshot) {
	var snap = snapshot.val();
	for (i in snap) {
		counter++;
		//console.log(i + "\n");

		//Create user object
		var user_obj = {
			first_name: "",
			last_name: "",
			user_name: "",
			email_address: ""
		};

		for (n in snap[i]) {
			if (n == 'email_address') {
				//console.log(snap[i][n]);
				user_obj["email_address"] = snap[i][n];
			}
			if (n == 'first_name') {
				//console.log(snap[i][n]);
				user_obj["first_name"] = snap[i][n];
			}
			if (n == 'last_name') {
				//console.log(snap[i][n]);
				user_obj["last_name"] = snap[i][n];
			}
			if (n == 'user_name') {
				//console.log(snap[i][n]);
				user_obj["user_name"] = snap[i][n];
			}
		}

		row = document.createElement("tr");

		var cell = document.createElement("td");
		cell.innerHTML = counter;
		row.appendChild(cell);

		cell = document.createElement("td");
		cell.innerHTML = user_obj["first_name"];
		row.appendChild(cell);

		cell = document.createElement("td");
		cell.innerHTML = user_obj["last_name"];
		row.appendChild(cell);

		cell = document.createElement("td");
		cell.innerHTML = user_obj["user_name"];
		row.appendChild(cell);

		cell = document.createElement("td");
		cell.innerHTML = user_obj["email_address"];
		row.appendChild(cell);

		table.appendChild(row);
	}
});

document.getElementById('records_div').appendChild(table);