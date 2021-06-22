<template>
    <header> 
    <nav class="navbar-custom navbar">
       <a href="index.html" class="logo">
          <span >
            <img src="../assets/images/doityLogo.png" class= "logo" alt="">
          </span>
          <span class = "play">
          PLAY
          </span>
         </a>
      <div class="d-flex " text="center">
        <ul class="list-unstyled topbar-right-menu float-right mb-0">
         <li>
           <div class="dropdownS">
              <b-dropdown id="dropdown-1" variant="link"  toggle-class="text-decoration-none " no-caret>
                <template #button-content>
                   <a href="#" class="icone dropdown-toggle" data-bs-toggle="dropdown" id="dropdown1" role="button" aria-expanded="false" >
                    <font-awesome-icon icon="bell" />
                   </a>
                 </template>
               <p class="text-center">No messages!</p> 
              </b-dropdown>
            </div>
          </li>
          <li>
           <div class="dropdownS2">
             <img src="../assets/images/usuario.png" class="logo2" alt="">
              <b-dropdown id="dropdown-1" variant="link"  toggle-class="text-decoration-none " no-caret>
                <template #button-content>
                  
                   <a href="#" class="icone dropdown-toggle" data-bs-toggle="dropdown" id="dropdown1" role="button" aria-expanded="false" >
                     
                     <p style="display:inline"><strong>Eduardo Carlos</strong></p>
                    <font-awesome-icon icon="sort-down" style="margin-left: 10px" />
                    <p style="margin-bottom:-10px" class="navUser">User</p>
                   </a>
                 </template>
                  <b-dropdown-text class="welcome">Welcome!</b-dropdown-text>
                  <b-dropdown-item href="#"><font-awesome-icon icon="user" style="margin-right: 8px"/>My account</b-dropdown-item>
                  <b-dropdown-item href="#"><font-awesome-icon icon="cog" style="margin-right: 8px"/>Settings</b-dropdown-item>
                  <b-dropdown-item href="#"><font-awesome-icon icon="question-circle" style="margin-right: 8px"/>Support</b-dropdown-item>
                  <b-dropdown-item href="#"><font-awesome-icon icon="power-off" style="margin-right: 8px"/>Logout</b-dropdown-item>
              
              </b-dropdown>
            </div>
          </li>
         </ul>
        </div>
      </nav>   
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="css" scoped>
    header{
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;
}
  .header-left{
        background: #ffffff;
        background: linear-gradient(to top, #ffffff, #ffffff);
        box-shadow: -15px 0px 18px 0 rgba(0, 0, 0, 0.3);
        float: left;
        text-align: center;
        height: 70px;
        position: relative;
        width: 240px;
        z-index: 1;
    }
    header .header-left .logo {
  line-height: 70px;
}
  .logo{
  margin-left: 25px;
  
}
.logo2{
  border-radius: 100%;
  width: 50px;
  margin-top: 0px;
}
  .d-flex{
  
  position: absolute;
  top: 20%;
  left: 81%;
}

  header .header-left .logo i {
  display: none;
}
.navbar-custom {
  background: #ffffff;
  background: linear-gradient(to top, #ffffff, #ffffff);
  border-radius: 0;
  margin-bottom: 0;
  padding: 0 10px 0 0;
  
  min-height: 70px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.3);
}

  .navbar-custom .nav-link {
  padding: 0;
  line-height: 70px;
  color: rgba(255, 255, 255, 0.6);
}

  .navbar-custom .dropdown-toggle:after {
  content: initial;
}

  .navbar-custom .menu-left {
  overflow: hidden;
}

  .navbar-custom .topbar-right-menu li {
  float: left;
}
  a{
    text-decoration: none;
    
  }
  .icone{
  
  color: initial;
}
.play{
  background: rgb(255, 0, 0);
  color: white;
  box-shadow: 0px 0px 1px 0px black;
  border-radius: 2px;
  margin: 5px;
  padding: 3px;
  padding-right: 5px;
  font-size: 11px;
}
.navUser{
  opacity: 50%;
  display: flex;
  margin-top: -3px;

}
.dropdownS{
  padding-right: 30px;
  position: absolute;
  top: 20%;
  left: -60px;
  
  
}
.welcome{
  font-size: 20px;
  font-style: oblique;
}

</style>