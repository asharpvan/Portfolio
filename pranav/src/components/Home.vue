<template>
  <!-- Your HTML goes here -->
  <div class="wrapper">
    <header>
      <nav>
        <div class="menu-icon">
          <i class="fa fa-bars fa-2x"></i>
        </div>
        <div class="logo">
          LOGO
        </div>
        <div class="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- <div class="welcome">

    </div>
    <div class="about">
      
    </div>
    <div class="techstack">
      
    </div> -->
  </div>
</template>

<script>
/* Your JS goes here */
export default {
  data () {
    return {
      msg: 'Welcome to Your Home Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* Your CSS goes here */
header {
  width: 100%;
  height: 100vh;
  /* background-color: yellow; */
  background: url("../assets/app/intro.jpg") no-repeat 50% 50%;
  background-size: cover;
}
/* div {
    background-color: lightblue;
}

h1 {
  padding: 0;
  margin: 0;
  font-weight: normal;
  background-color: yellowgreen;
} */
</style>
