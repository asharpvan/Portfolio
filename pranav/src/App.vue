<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
    <div id="footer">
      <p>Copyright | All rights reserved | Year | Creator Name</p>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#footer{
    display: table;
    text-align: center;
    margin: auto auto;
    font-size: 14px;
}
</style>
