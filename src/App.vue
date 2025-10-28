<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />

    <!-- Apply the max-width container here -->
    <div class="flex-grow">
      <RouterView />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.app-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem; /* optional padding for breathing room */
}
</style>
