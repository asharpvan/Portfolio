<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
    <footer>Pranav Sah</footer>
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
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

footer {
  width: 100%;
  height: 60px;
  text-align: center;
  vertical-align: center;
}

/* main {
  text-align: center;
  margin-top: 40px;
} */

/* header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
} */

/* header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
} */
</style>
