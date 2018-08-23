<template>
  <!-- Your HTML goes here -->
  
  <div class="wrapper">
    <!-- Header Div -->
    <header>
    </header>
    <!-- Work Experience Page Header -->
    <h1 class="work_page_title">The Company Page Title</h1>
    <!-- Company Frame -->
    <div class="company_frame">
      <img class="company_logo" src="../assets/app/projects/sanket.png" alt="Sanketlife Icon" width="100" height="100">
      <div class="company_details">

      </div>
    </div>
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
header {
  width: 100%;
  height: 10vh;
}
.work_page_title {
  /* font-size: 14px; */
  color: black;
  text-align: center;
  background-color: yellow;
}
.company_frame {
  width: 98%;
  height: 40vw;
  margin: auto;
  background-color: blue;
  text-align: center;
}

img {
  display: inline-block;
}

.company_logo {
  width: 50;
  height: 50;
  
}
</style>
