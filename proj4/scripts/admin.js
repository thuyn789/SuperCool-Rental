var firebaseConfig = {
	apiKey: "AIzaSyCAN6ltkh5UO6UYwLF3FmJrHt73bCfLgj8",
	authDomain: "supercool-rental.firebaseapp.com",
	databaseURL: "https://supercool-rental-default-rtdb.firebaseio.com",
	projectId: "supercool-rental",
	storageBucket: "supercool-rental.appspot.com",
	messagingSenderId: "138927912921",
	appId: "1:138927912921:web:4a28b2011ffb2605464bc8"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

retrieveInfo();

var suv_data = [];
var compact_data = [];
var midsize_data = [];
var luxury_data = [];
var parking_data = [];

function retrieveInfo() {
    var admin_table = document.getElementById("admin_table"); //grab the table from the rent page.
    removeAllChildNodes(admin_table); //clear admin table


    //get rental car data first

    //retrieve SUV Data
    firebase.database().ref('rentals/SUV').on('value', function(snapshot) { 
        var snap = snapshot.val();
        for(i in snap) {
            console.log(i + "\n");

            var car = { //definition of car object
                type: "",
                name: "",
                id: "",
                img_path: "",
                rental_rate: ""
            }

            for(n in snap[i]) {
                //console.log(n + ": " + snap[i][n]);
                if(n == 'rental_id') {
                    car.id = snap[i][n];
                }
                if(n == 'rental_img') {
                    car.img_path = snap[i][n];;
                }
                if(n == 'rental_name') {
                    car.name = snap[i][n];;
                }
                if(n == 'rental_rate') {
                    car.rental_rate = snap[i][n];;
                }
                if(n == 'rental_type') {
                    car.type = snap[i][n];;
                }
        }

        suv_data.push(car);
        
    }
    console.log("rental_cars array: \n" + JSON.stringify(suv_data,null,4));
    });

//retrieve Compact Data
    firebase.database().ref('rentals/Compact').on('value', function(snapshot) { 
    var snap = snapshot.val();
    for(i in snap) {
        console.log(i + "\n");

        var car = { //definition of car object
            type: "",
            name: "",
            id: "",
            img_path: "",
            rental_rate: ""
        }

        for(n in snap[i]) {
            //console.log(n + ": " + snap[i][n]);
            if(n == 'rental_id') {
                car.id = snap[i][n];
            }
            if(n == 'rental_img') {
                car.img_path = snap[i][n];;
            }
            if(n == 'rental_name') {
                car.name = snap[i][n];;
            }
            if(n == 'rental_rate') {
                car.rental_rate = snap[i][n];;
            }
            if(n == 'rental_type') {
                car.type = snap[i][n];;
            }
    }

    compact_data.push(car);
    
}
console.log("rental_cars array: \n" + JSON.stringify(compact_data,null,4));
    });

//retrieve Midsize Data
    firebase.database().ref('rentals/Midsize').on('value', function(snapshot) { 
    var snap = snapshot.val();
    for(i in snap) {
        console.log(i + "\n");

        var car = { //definition of car object
            type: "",
            name: "",
            id: "",
            img_path: "",
            rental_rate: ""
        }

        for(n in snap[i]) {
            //console.log(n + ": " + snap[i][n]);
            if(n == 'rental_id') {
                car.id = snap[i][n];
            }
            if(n == 'rental_img') {
                car.img_path = snap[i][n];;
            }
            if(n == 'rental_name') {
                car.name = snap[i][n];;
            }
            if(n == 'rental_rate') {
                car.rental_rate = snap[i][n];;
            }
            if(n == 'rental_type') {
                car.type = snap[i][n];;
            }
    }

    midsize_data.push(car);
    
}
console.log("rental_cars array: \n" + JSON.stringify(midsize_data,null,4));
    });


//retrieve Luxury Data
    firebase.database().ref('rentals/Luxury').on('value', function(snapshot) { 
    var snap = snapshot.val();
    for(i in snap) {
        console.log(i + "\n");

        var car = { //definition of car object
            type: "",
            name: "",
            id: "",
            img_path: "",
            rental_rate: ""
        }

        for(n in snap[i]) {
            //console.log(n + ": " + snap[i][n]);
            if(n == 'rental_id') {
                car.id = snap[i][n];
            }
            if(n == 'rental_img') {
                car.img_path = snap[i][n];;
            }
            if(n == 'rental_name') {
                car.name = snap[i][n];;
            }
            if(n == 'rental_rate') {
                car.rental_rate = snap[i][n];;
            }
            if(n == 'rental_type') {
                car.type = snap[i][n];;
            }
    }

    luxury_data.push(car);
    
}
    console.log("rental_cars array: \n" + JSON.stringify(luxury_data,null,4));
});

    //get parking data
    firebase.database().ref('parking_spots').on('value',function(snapshot) {
        var snap = snapshot.val();

        for(i in snap) {
            console.log(i + "\n");

            var parking_spot = {
                status: "",
                name:""
            };

            parking_spot.name = i;

            for(n in snap[i]) {
                console.log(snap[i][n] + "\n");
                parking_spot.status = snap[i][n];

            }

            parking_data.push(parking_spot);

        }

        console.log("parking_data array: \n" + JSON.stringify(parking_data,null,4));
    });


setTimeout(() => {populateTable();},  500); //wait one second to allow for data to be collected then populate the table.

}

function populateTable() {
    var admin_table = document.getElementById("admin_table"); //grab the table from the rent page.

    //make car titlerow.
    var car_row = document.createElement("tr");
    car_row.setAttribute("class", "admin_table_row");
    admin_table.appendChild(car_row);


    var car_row_cell = document.createElement("td");
    car_row_cell.setAttribute("id", "car_title_cell");
    car_row_cell.setAttribute("class", "admin_table_cell title_cell");
    car_row_cell.setAttribute("colspan", "5");

    car_row.appendChild(car_row_cell);

    var para = document.createElement("p");
    var text = document.createTextNode("Rental Cars");

    para.appendChild(text);
    car_row_cell.appendChild(para);

    //call addSUVs
    addSUVs();
    /*
    //add SUV title row
    var suv_title_row = document.createElement("tr");
    suv_title_row.setAttribute("class", "admin_table_row");
    admin_table.appendChild(suv_title_row);


    var suv_row_cell = document.createElement("td");
    suv_row_cell.setAttribute("id", "suv_title_cell");
    suv_row_cell.setAttribute("class", "admin_table_cell title_cell");
    suv_row_cell.setAttribute("colspan", "5");

    suv_title_row.appendChild(suv_row_cell);

    var para = document.createElement("p");
    var text = document.createTextNode("SUVs");

    para.appendChild(text);
    suv_row_cell.appendChild(para);

    var suv_rental_cell_id = 0;
    //add data for SUV rentals
    for(var i = 0; i <suv_data.length; i++) {
        //add row for suv rental
        var suv_rental_row = document.createElement("tr");
        var suv_rental_row_id = i + 1;
        suv_rental_row.setAttribute("id", "suv_rental_row_" + suv_rental_row_id);
        suv_rental_row.setAttribute("class", "admin_table_row");
        admin_table.appendChild(suv_rental_row);

        //add cells for suv rental row
        for(var j = 0; j < 5; j++) {
            //order of attributes name, id, type, rental rate, img_path
            var suv_rental_cell = document.createElement("td");
            suv_rental_cell.setAttribute("id", "suv_rental_cell_" + suv_rental_cell_id);
            var curr_cell_id = suv_rental_cell_id;
            suv_rental_cell_id = suv_rental_cell_id + 1;
            suv_rental_cell.setAttribute("class", "admin_table_cell suv_rental_cell");
            document.getElementById("suv_rental_row_" + suv_rental_row_id).appendChild(suv_rental_cell);

            

            if(j == 0) { //If j equals 0, we add car name
                var para = document.createElement("p");
                var text = document.createTextNode(suv_data[i].name);
                para.appendChild(text);

                document.getElementById("suv_rental_cell_" + curr_cell_id).appendChild(para);
                
               


            } else if(j == 1) { //id
                var rental_id = document.createElement("p");
                var node = document.createTextNode(suv_data[i].id);
                rental_id.appendChild(node);
                document.getElementById("suv_rental_cell_" + curr_cell_id).appendChild(rental_id);

            } else if(j == 2) { //type
                var rental_type = document.createElement("p");
                var node = document.createTextNode(suv_data[i].id);
                rental_type.appendChild(node);
                document.getElementById("suv_rental_cell_" + curr_cell_id).appendChild(rental_type);


            } else if(j == 3) { //rental rate
                var rental_rate = document.createElement("p");
                var node = document.createTextNode(suv_data[i].rental_rate);
                rental_rate.appendChild(node);
                document.getElementById("suv_rental_cell_" + curr_cell_id).appendChild(rental_rate);


            } else if(j == 4) { //img_path
                var rental_img_path = document.createElement("p");
                var node = document.createTextNode(suv_data[i].img_path);
                rental_img_path.appendChild(node);
                document.getElementById("suv_rental_cell_" + curr_cell_id).appendChild(rental_img_path);

            }

        }
        
    }
    */
   
}

function addSUVs() {
    var admin_table = document.getElementById("admin_table"); //grab the table from the rent page.
    
    //add SUV title row
    var suv_title_row = document.createElement("tr");
    suv_title_row.setAttribute("class", "admin_table_row");
    admin_table.appendChild(suv_title_row);


    var suv_row_cell = document.createElement("td");
    suv_row_cell.setAttribute("id", "suv_title_cell");
    suv_row_cell.setAttribute("class", "admin_table_cell title_cell");
    suv_row_cell.setAttribute("colspan", "5");

    suv_title_row.appendChild(suv_row_cell);

    var para = document.createElement("p");
    var text = document.createTextNode("SUVs");

    para.appendChild(text);
    suv_row_cell.appendChild(para);

    var suv_rental_cell_id = 0;
    //add data for SUV rentals
    for(var i = 0; i <suv_data.length; i++) {
        //add row for suv rental
        var suv_rental_row = document.createElement("tr");
        var suv_rental_row_id = i + 1;
        suv_rental_row.setAttribute("id", "suv_rental_row_" + suv_rental_row_id);
        suv_rental_row.setAttribute("class", "admin_table_row");
        admin_table.appendChild(suv_rental_row);

        //add cells for suv rental row
        for(var j = 0; j < 5; j++) {
            //order of attributes name, id, type, rental rate, img_path
            var suv_rental_cell = document.createElement("td");
            suv_rental_cell.setAttribute("id", "suv_rental_cell_" + suv_rental_cell_id);
            var curr_cell_id = suv_rental_cell_id;
            suv_rental_cell_id = suv_rental_cell_id + 1;
            suv_rental_cell.setAttribute("class", "admin_table_cell suv_rental_cell");
            document.getElementById("suv_rental_row_" + suv_rental_row_id).appendChild(suv_rental_cell);

            

            if(j == 0) { //If j equals 0, we add car name
                var para = document.createElement("p");
                var text = document.createTextNode(suv_data[i].name);
                para.appendChild(text);

                document.getElementById("suv_rental_cell_" + curr_cell_id).appendChild(para);
                
               


            } else if(j == 1) { //id
                var rental_id = document.createElement("p");
                var node = document.createTextNode(suv_data[i].id);
                rental_id.appendChild(node);
                document.getElementById("suv_rental_cell_" + curr_cell_id).appendChild(rental_id);

            } else if(j == 2) { //type
                var rental_type = document.createElement("p");
                var node = document.createTextNode(suv_data[i].type);
                rental_type.appendChild(node);
                document.getElementById("suv_rental_cell_" + curr_cell_id).appendChild(rental_type);


            } else if(j == 3) { //rental rate
                var rental_rate = document.createElement("p");
                var node = document.createTextNode(suv_data[i].rental_rate);
                rental_rate.appendChild(node);
                document.getElementById("suv_rental_cell_" + curr_cell_id).appendChild(rental_rate);


            } else if(j == 4) { //img_path
                var rental_img_path = document.createElement("p");
                var node = document.createTextNode(suv_data[i].img_path);
                rental_img_path.appendChild(node);
                document.getElementById("suv_rental_cell_" + curr_cell_id).appendChild(rental_img_path);

            }

        }
        
    }


    setTimeout(() => {addCompacts()}, 500); //wait before adding compact info
    
}

//add Compacts
function addCompacts() {
    var admin_table = document.getElementById("admin_table"); //grab the table from the rent page.
    
    //add compacts title row
    var compact_title_row = document.createElement("tr");
    compact_title_row.setAttribute("class", "admin_table_row");
    admin_table.appendChild(compact_title_row);


    var compact_row_cell = document.createElement("td");
    compact_row_cell.setAttribute("id", "compacts_title_cell");
    compact_row_cell.setAttribute("class", "admin_table_cell title_cell");
    compact_row_cell.setAttribute("colspan", "5");

    compact_title_row.appendChild(compact_row_cell);

    var para = document.createElement("p");
    var text = document.createTextNode("Compacts");

    para.appendChild(text);
    compact_row_cell.appendChild(para);

    var compact_rental_cell_id = 0;
    //add data for SUV rentals
    for(var i = 0; i <compact_data.length; i++) {
        //add row for suv rental
        var compact_rental_row = document.createElement("tr");
        var compact_rental_row_id = i + 1;
        compact_rental_row.setAttribute("id", "compact_rental_row_" + compact_rental_row_id);
        compact_rental_row.setAttribute("class", "admin_table_row");
        admin_table.appendChild(compact_rental_row);

        //add cells for compact rental row
        for(var j = 0; j < 5; j++) {
            //order of attributes name, id, type, rental rate, img_path
            var compact_rental_cell = document.createElement("td");
            compact_rental_cell.setAttribute("id", "compact_rental_cell_" + compact_rental_cell_id);
            var curr_cell_id = compact_rental_cell_id;
            compact_rental_cell_id = compact_rental_cell_id + 1;
            compact_rental_cell.setAttribute("class", "admin_table_cell compact_rental_cell");
            document.getElementById("compact_rental_row_" + compact_rental_row_id).appendChild(compact_rental_cell);

            

            if(j == 0) { //If j equals 0, we add car name
                var para = document.createElement("p");
                var text = document.createTextNode(compact_data[i].name);
                para.appendChild(text);

                document.getElementById("compact_rental_cell_" + curr_cell_id).appendChild(para);
                
               


            } else if(j == 1) { //id
                var rental_id = document.createElement("p");
                var node = document.createTextNode(compact_data[i].id);
                rental_id.appendChild(node);
                document.getElementById("compact_rental_cell_" + curr_cell_id).appendChild(rental_id);

            } else if(j == 2) { //type
                var rental_type = document.createElement("p");
                var node = document.createTextNode(compact_data[i].type);
                rental_type.appendChild(node);
                document.getElementById("compact_rental_cell_" + curr_cell_id).appendChild(rental_type);


            } else if(j == 3) { //rental rate
                var rental_rate = document.createElement("p");
                var node = document.createTextNode(compact_data[i].rental_rate);
                rental_rate.appendChild(node);
                document.getElementById("compact_rental_cell_" + curr_cell_id).appendChild(rental_rate);


            } else if(j == 4) { //img_path
                var rental_img_path = document.createElement("p");
                var node = document.createTextNode(compact_data[i].img_path);
                rental_img_path.appendChild(node);
                document.getElementById("compact_rental_cell_" + curr_cell_id).appendChild(rental_img_path);

            }

        }
        
    }


    setTimeout(() => {addMidsize()}, 500); //wait before adding compact info


}

function addMidsize() {
    var admin_table = document.getElementById("admin_table"); //grab the table from the rent page.
    
    //add mids title row
    var midsize_title_row = document.createElement("tr");
    midsize_title_row.setAttribute("class", "admin_table_row");
    admin_table.appendChild(midsize_title_row);


    var midsize_row_cell = document.createElement("td");
    midsize_row_cell.setAttribute("id", "midsize_title_cell");
    midsize_row_cell.setAttribute("class", "admin_table_cell title_cell");
    midsize_row_cell.setAttribute("colspan", "5");

    midsize_title_row.appendChild(midsize_row_cell);

    var para = document.createElement("p");
    var text = document.createTextNode("Midsizes");

    para.appendChild(text);
    midsize_row_cell.appendChild(para);

    var midsize_rental_cell_id = 0;
    //add data for SUV rentals
    for(var i = 0; i <midsize_data.length; i++) {
        //add row for suv rental
        var midsize_rental_row = document.createElement("tr");
        var midsize_rental_row_id = i + 1;
        midsize_rental_row.setAttribute("id", "midsize_rental_row_" + midsize_rental_row_id);
        midsize_rental_row.setAttribute("class", "admin_table_row");
        admin_table.appendChild(midsize_rental_row);

        //add cells for compact rental row
        for(var j = 0; j < 5; j++) {
            //order of attributes name, id, type, rental rate, img_path
            var midsize_rental_cell = document.createElement("td");
            midsize_rental_cell.setAttribute("id", "midsize_rental_cell_" + midsize_rental_cell_id);
            var curr_cell_id = midsize_rental_cell_id;
            midsize_rental_cell_id = midsize_rental_cell_id + 1;
            midsize_rental_cell.setAttribute("class", "admin_table_cell midsize_rental_cell");
            document.getElementById("midsize_rental_row_" + midsize_rental_row_id).appendChild(midsize_rental_cell);

            

            if(j == 0) { //If j equals 0, we add car name
                var para = document.createElement("p");
                var text = document.createTextNode(midsize_data[i].name);
                para.appendChild(text);

                document.getElementById("midsize_rental_cell_" + curr_cell_id).appendChild(para);
                
               


            } else if(j == 1) { //id
                var rental_id = document.createElement("p");
                var node = document.createTextNode(midsize_data[i].id);
                rental_id.appendChild(node);
                document.getElementById("midsize_rental_cell_" + curr_cell_id).appendChild(rental_id);

            } else if(j == 2) { //type
                var rental_type = document.createElement("p");
                var node = document.createTextNode(midsize_data[i].type);
                rental_type.appendChild(node);
                document.getElementById("midsize_rental_cell_" + curr_cell_id).appendChild(rental_type);


            } else if(j == 3) { //rental rate
                var rental_rate = document.createElement("p");
                var node = document.createTextNode(midsize_data[i].rental_rate);
                rental_rate.appendChild(node);
                document.getElementById("midsize_rental_cell_" + curr_cell_id).appendChild(rental_rate);


            } else if(j == 4) { //img_path
                var rental_img_path = document.createElement("p");
                var node = document.createTextNode(midsize_data[i].img_path);
                rental_img_path.appendChild(node);
                document.getElementById("midsize_rental_cell_" + curr_cell_id).appendChild(rental_img_path);

            }

        }
        
    }


   setTimeout(() => {addLuxury()}, 500); //wait before adding compact info

}

function addLuxury() {
    var admin_table = document.getElementById("admin_table"); //grab the table from the rent page.
    
    //add luxury title row
    var luxury_title_row = document.createElement("tr");
    luxury_title_row.setAttribute("class", "admin_table_row");
    admin_table.appendChild(luxury_title_row);


    var luxury_row_cell = document.createElement("td");
    luxury_row_cell.setAttribute("id", "luxury_title_cell");
    luxury_row_cell.setAttribute("class", "admin_table_cell title_cell");
    luxury_row_cell.setAttribute("colspan", "5");

    luxury_title_row.appendChild(luxury_row_cell);

    var para = document.createElement("p");
    var text = document.createTextNode("Luxury");

    para.appendChild(text);
    luxury_row_cell.appendChild(para);

    var luxury_rental_cell_id = 0;
    //add data for SUV rentals
    for(var i = 0; i < luxury_data.length; i++) {
        //add row for suv rental
        var luxury_rental_row = document.createElement("tr");
        var luxury_rental_row_id = i + 1;
        luxury_rental_row.setAttribute("id", "luxury_rental_row_" + luxury_rental_row_id);
        luxury_rental_row.setAttribute("class", "admin_table_row");
        admin_table.appendChild(luxury_rental_row);

        //add cells for compact rental row
        for(var j = 0; j < 5; j++) {
            //order of attributes name, id, type, rental rate, img_path
            var luxury_rental_cell = document.createElement("td");
            luxury_rental_cell.setAttribute("id", "luxury_rental_cell_" + luxury_rental_cell_id);
            var curr_cell_id = luxury_rental_cell_id;
            luxury_rental_cell_id = luxury_rental_cell_id + 1;
            luxury_rental_cell.setAttribute("class", "admin_table_cell luxury_rental_cell");
            document.getElementById("luxury_rental_row_" + luxury_rental_row_id).appendChild(luxury_rental_cell);
            
            if(j == 0) { //If j equals 0, we add car name
                var para = document.createElement("p");
                var text = document.createTextNode(luxury_data[i].name);
                para.appendChild(text);

                document.getElementById("luxury_rental_cell_" + curr_cell_id).appendChild(para);
                
               


            } else if(j == 1) { //id
                var rental_id = document.createElement("p");
                var node = document.createTextNode(luxury_data[i].id);
                rental_id.appendChild(node);
                document.getElementById("luxury_rental_cell_" + curr_cell_id).appendChild(rental_id);

            } else if(j == 2) { //type
                var rental_type = document.createElement("p");
                var node = document.createTextNode(luxury_data[i].type);
                rental_type.appendChild(node);
                document.getElementById("luxury_rental_cell_" + curr_cell_id).appendChild(rental_type);


            } else if(j == 3) { //rental rate
                var rental_rate = document.createElement("p");
                var node = document.createTextNode(luxury_data[i].rental_rate);
                rental_rate.appendChild(node);
                document.getElementById("luxury_rental_cell_" + curr_cell_id).appendChild(rental_rate);


            } else if(j == 4) { //img_path
                var rental_img_path = document.createElement("p");
                var node = document.createTextNode(luxury_data[i].img_path);
                rental_img_path.appendChild(node);
                document.getElementById("luxury_rental_cell_" + curr_cell_id).appendChild(rental_img_path);

            }

        }
        
    }


    setTimeout(() => {addParkingSpaces()}, 500); //wait before adding compact info
}

function addParkingSpaces() {
    var admin_table = document.getElementById("admin_table"); //grab the table from the rent page.
    
    //add luxury title row
    var parking_title_row = document.createElement("tr");
    parking_title_row.setAttribute("class", "admin_table_row");
    admin_table.appendChild(parking_title_row);


    var parking_row_cell = document.createElement("td");
    parking_row_cell.setAttribute("id", "parking_title_cell");
    parking_row_cell.setAttribute("class", "admin_table_cell title_cell");
    parking_row_cell.setAttribute("colspan", "5");

    parking_title_row.appendChild(parking_row_cell);

    var para = document.createElement("p");
    var text = document.createTextNode("Parking Spaces");

    para.appendChild(text);
    parking_row_cell.appendChild(para);

    var parking_rental_cell_id = 0;
    //add data for SUV rentals
    for(var i = 0; i < parking_data.length; i++) {
        //add row for suv rental
        var parking_rental_row = document.createElement("tr");
        var parking_rental_row_id = i + 1;
        parking_rental_row.setAttribute("id", "parking_rental_row_" + parking_rental_row_id);
        parking_rental_row.setAttribute("class", "admin_table_row");
        admin_table.appendChild(parking_rental_row);

        //add cells for parking row
        for(var j = 0; j < 2; j++) {
            //order of attributes name, status
            var parking_rental_cell = document.createElement("td");
            parking_rental_cell.setAttribute("id", "parking_rental_cell_" + parking_rental_cell_id);
            var curr_cell_id = parking_rental_cell_id;
            parking_rental_cell_id = parking_rental_cell_id + 1;
            parking_rental_cell.setAttribute("class", "admin_table_cell parking_rental_cell");
            document.getElementById("parking_rental_row_" + parking_rental_row_id).appendChild(parking_rental_cell);
            
            if(j == 0) { //name
                var parking_spot_name = document.createElement("p");
                var text = document.createTextNode(parking_data[i].name);
                parking_spot_name.appendChild(text);
                document.getElementById("parking_rental_cell_" + curr_cell_id).setAttribute("colspan", 3);

                document.getElementById("parking_rental_cell_" + curr_cell_id).appendChild(parking_spot_name);
                
               


            } else if(j == 1) { //status
                var parking_status = document.createElement("p");
                var node = document.createTextNode(parking_data[i].status);
                parking_status.appendChild(node);
                document.getElementById("parking_rental_cell_" + curr_cell_id).setAttribute("colspan", 2);
                document.getElementById("parking_rental_cell_" + curr_cell_id).appendChild(parking_status);

            } 

        }
        
    }


    //setTimeout(() => {addParkingSpaces()}, 500); //wait before adding compact info

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
