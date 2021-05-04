<?php include 'common/common-meta-header.php'; ?>

<div class="container">

    <?php include 'common/navibar.php'; ?>

    <div class="main_content">
        <div class="register_form">
            <form>
                <img src="./images/user_icon.png" alt="user icon">
                <h2>Admin Log In</h2>

                <div class="error" id="emailErr"></div>
                <input id="email" class="input_box" type="text" size="16" placeholder="Email"><br/>

                <div class="error" id="passwordErr"></div>
                <input id="password" class="input_box" type="password" size="16" placeholder="Password"><br/>

                <input id="submit-btn" class="btn" type="button" onclick="login()" value="Login"><br/>

                <hr/>
                <p>Please contact your administrator for login credential</p>
            </form>
        </div>
    </div>
</div>

<script src="./scripts/signup_login.js"></script>
<?php include 'common/common-footer.php'; ?>