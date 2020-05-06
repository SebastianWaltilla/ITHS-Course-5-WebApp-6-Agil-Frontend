<template>
  <div id="app">

    <h1> Nu börjar det på riktigt </h1>
    <!-- Document Header Starts
    // HEAD (menu)
  -------------------------------------------------
    APPEN allt innehåll

    (if true)
    // Start sida       komponent

    (if true)
    // log in       komponent

    (if true)
    // single page        komponent

    (if true)
    // barn       komponent

    (if true)
    // lärare       komponent

    (if true)
    // game!           komponent

    -----------------------------------------------
    // footer komponent
    -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>


  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      head,
      startPage,
      studentPage,
      teacherPage,
      footer,
      HelloWorld

    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
