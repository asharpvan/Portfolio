<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Projects Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

div {
    background-color: lightblue;
}

h1 {
  padding: 0;
  margin: 0;
  font-weight: normal;
  background-color: yellowgreen;
}
</style>
