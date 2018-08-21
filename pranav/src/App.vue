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
@font-face {
  font-family: 'Quicksand';
  src: url('../src/assets/fonts/quicksand-regular-webfont.woff2') format('woff2'),
    url('../src/assets/fonts/quicksand-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;                
}

#app {
  font-family: Quicksand;
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
