<template>
  <!-- Your HTML goes here -->
  <div class="wrapper">
    <header>
      <h1 class="intro_text">Some Title</h1>
      <h3 class="intro_text">Some | Long | Subtitle</h3>
    </header>
  </div>
</template>

<script>
/* Your JS goes here */
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Your CSS goes here */

/* Intro */
header {
  width: 100%;
  height: 100vh;
  background: url("../assets/app/banner/intro.jpg") no-repeat 50% 50%;
  background-size: cover;
}

.intro_text {
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
  position: relative;
  top: 45%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
