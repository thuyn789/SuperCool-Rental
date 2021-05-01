<?php 
if(isset($_POST['Submit'])) {

    #$logins = array('Test' => '123456');
    $logins = array(); #holds login info

    $acc_file =  fopen("user_database/user_account.txt","r"); #open file containing account information

    /*Read through file line by line and build associative array with the contents */
    if($acc_file) { 
        while (($line = fgets($acc_file))  !== false) {

            $info = explode(',', $line); #Separate each line
            /*
            $info[0] = username
            $info[1] = email
            $info[2] = password
            */ 
            $logins[$info[0]] = $info[2]; #add credentials to associative array
        }
    }

    /* Check and assign submitted Username and Password to new variable */
    $Username = isset($_POST['username']) ? $_POST['username'] : '';
    $Password = isset($_POST['password']) ? $_POST['password'] : '';
    

#Check if credentials are in logins array
if(array_key_exists($Username, $logins) && trim($logins[$Username]) == trim($Password)) { #Credentials are found
    
    //header("location:level_difficulty.php"); #goto index.php
    header("location:home.html"); #goto game.html
    exit(); #end php script
} else {
    print("credentials not found in array<br>");
}
}


?>


<html>
<head>
<title>
    Rent-A-Car Login Screen
</title>
<link rel="stylesheet" href="./style.css">
</head>
<body>
    <img id="logo" src="./images/rent_logo.png">

    <form action="" method="POST" id="login_form">
        <fieldset>
            <table id="login_form_table">
                <!--Username row-->
                <tr class="login_form_row">

                    <td id="login_form_username_label" class="login_form_cell">
                        <label for="login_form_username" class="login_form_element">Username:</label>
                    </td>

                    <td class="login_form_cell">
                        <input name="username" id="login_form_username" class="login_form_element" type="text" size="16" placeholder="Username" > 
                    </td>

                </tr>

                <!--Password row-->
                <tr class="login_form_row">

                    <td id="login_form_password_label" class="login_form_cell">
                        <label for="login_form_password" class="login_form_element">Password:</label>
                    </td>

                    <td class="login_form_cell">
                        <input name="password" id="login_form_password" class="login_form_element" type="password" size=16 placeholder="Password">
                    </td>

                </tr>

                <!--Submit Button-->
                <tr class="login_form_row">
                    <td id="login_form_password_label" class="login_form_cell" colspan="2"> 
                        <input name="Submit" type="submit" id="login_form_submit_btn" class="login_form_element" value="Login">
                    </td>

                </tr>

                <!--Go to Signup Page-->
                <tr class="login_form_row">

                    <td class="login_form_cell" colspan="2">
                        <a id="signup_form_link" class="login_form_element" href="./signup.php"> Don't have an account? Sign up!</a>
                    </td>

                </tr>

            </table>
            
        </fieldset>
    </form>


</body>
</html>