<template>


  <div id="app">

    <headComponent> </headComponent>

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
    <startPage></startPage>
    <footerComponent></footerComponent>


  </div>




</template>

<script>

  import headComponent from './components/headComponent'
  import footerComponent from './components/footerComponent'
  import startPage from './components/startPage'


  export default {
    name: 'App',
    components: {
      headComponent,
      footerComponent,
      startPage

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
    width: 800px;

  }

</style>
