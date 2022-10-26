<template>
  <div class="flex flex-column h-screen justify-content-between">
    <div>
      <Header />
      <Weather />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'
import Weather from './components/Weather.vue'

export default {
  components: {
    Header,
    Footer,
    Weather,
  },
}
</script>

<style scoped></style>
