<?php include 'common/common-meta-header.php'; ?>

<div class="container">

    <?php include 'common/navibar.php'; ?>

    <div class="main_content">
        <div class="register_form">
            <form>
                <img src="./images/user_icon.png" alt="user icon">
                <h2>Sign Up</h2>
                <div class="error" id="fnameErr"></div>
                <input id="first_name" class="input_box" type="text" size="16" placeholder="First Name"><br/>

                <div class="error" id="lnameErr"></div>
                <input id="last_name" class="input_box" type="text" size="16" placeholder="Last Name"><br/>

                <div class="error" id="usernameErr"></div>
                <input id="username" class="input_box" type="text" size="16" placeholder="Username"><br/>

                <div class="error" id="emailErr"></div>
                <input id="email" class="input_box" type="text" size="16" placeholder="Email"><br/>

                <div class="error" id="passwordErr"></div>
                <input id="password" class="input_box" type="password" size="16" placeholder="Password"><br/>

                <div class="error" id="confPasswordErr"></div>
                <input id="confirm_password" class="input_box" type="password" size="16" placeholder="Confirm Password"><br/>

                <input id="submit-btn" class="btn" type="button" onclick="signup()" value="Sign up!"><br/>

                <hr/>
                <p>Already Registered? <a href="login.php">Login</a></p>
            </form>
        </div>
    </div>
</div>


<script src="./scripts/signup_login.js"></script>
<?php include 'common/common-footer.php'; ?>