<div class="container" style="width:300px; margin-top:100px;">
   <div class="card card-container" style="padding: 10px;">
       <img id="profile-img" class="m-auto" src="img/logo.png" width="200px" style="margin-top: 15px;"/>
       <p id="profile-name" class="profile-name-card"></p>
       <div id="login_form" class="form-signin">
           <span id="reauth-email" class="reauth-email"></span>
           <input type="text" name="username" class="form-control" placeholder="Brugernavn" required autofocus style="margin: 5px 0;">
           <input type="password" name="password" class="form-control" placeholder="Adgangskode" required style="margin: 5px 0;">
           <button class="btn btn-md btn-primary btn-block btn-signin" onclick="Login.login()" style="margin: 10px 0;">Login</button>
       </div>
       <a href="#" class="forgot-password">
           Glemt adgangskode?
       </a>
   </div>
</div>
