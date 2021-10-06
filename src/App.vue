<template>
  <div id="app">
    <h1 class="text-success">
      App
      <i class="fas fa-arrow-up"></i>
    </h1>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue' 
import Main from './components/Main.vue' 
import Footer from './components/Footer.vue' 

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
@import './style/general.scss';
</style>