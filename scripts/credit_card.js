function space(num) {
    return num.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
}

function cardType(num) {
    document.getElementById('cardnumber').innerHTML = num;
    space(num);
    var regex;
	var regexv;
	var regexm;
	var regexa;
    
    regex = new RegExp("^$");
    if (num.match(regex) != null) {
        document.getElementById("visa").style.display = 'none';
        document.getElementById("master").style.display = 'none';
        document.getElementById("amex").style.display = 'none';
        document.getElementById("discover").style.display = 'none';
        document.getElementById('card_number').innerHTML = "•••• •••• •••• ••••";
        document.getElementById('card_name').innerHTML = "Card Holder";
    }
	
	    // For Amex Start with 3 and the second number should be 4 or 7
    regexa = new RegExp("^3[47]");
    if (num.match(regexa) != null) {
        document.getElementById("visa").style.display = 'none';
        document.getElementById("master").style.display = 'none';
		document.getElementById("amex").style.display = 'inline';
        document.getElementById("discover").style.display = 'none';
        document.getElementById("card_num").maxLength = "18";
        document.getElementById("cvc").maxLength = "4";
    }
      
    // For MasterCard start with 5 and the second number should be between 1 to 5
    regexm = new RegExp("^5[1-5]");
    if (num.match(regexm) != null) {
        document.getElementById("visa").style.display = 'none';
		document.getElementById("master").style.display = 'inline';
        document.getElementById("amex").style.display = 'none';
        document.getElementById("discover").style.display = 'none';
        document.getElementById("card_num").maxLength = "19";
        document.getElementById("cvc").maxLength = "3";  
    }
   
    // For the Discover start with 6011 or between 622126 to 622925 or between 644 to 649 or 65
    regex = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (num.match(regex) != null) {
        document.getElementById("visa").style.display = 'none';
        document.getElementById("master").style.display = 'none';
        document.getElementById("amex").style.display = 'none';
		document.getElementById("discover").style.display = 'inline';
        document.getElementById("card_num").maxLength = "19";
        document.getElementById("cvc").maxLength = "3";
    }
	
	    // For VISA start with 4
    regexv = new RegExp("^4");
    if (num.match(regexv) != null) {
        document.getElementById("visa").style.display = 'inline';
        document.getElementById("master").style.display = 'none';
        document.getElementById("amex").style.display = 'none';
        document.getElementById("discover").style.display = 'none';
        document.getElementById("card_num").maxLength = "19";
        document.getElementById("cvc").maxLength = "3";
    }
}

function cardName() {
    var inputName = document.getElementById('card_name');
    document.getElementById('cardname').innerHTML = inputName.value;
}

function cardMonth() {
    var month = document.getElementById('exp_month');
    var selectedm = month.options[month.selectedIndex].value;
    document.getElementById('expmonth').innerHTML = selectedm;
    document.getElementById('exp_month').style.color = "#000000";
}

function cardYear() {
    var year = document.getElementById('exp_year');
    var selectedy = year.options[year.selectedIndex].value;
    document.getElementById('expyear').innerHTML = selectedy;
    document.getElementById('exp_year').style.color = "#000000";
}

function cvc() {
    var inputCVC = document.getElementById('cvc');
    document.getElementById('securitycode').innerHTML = inputCVC.value;
}