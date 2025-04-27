<script setup lang="ts">
const currentTheme = ref('theme2');
watch(currentTheme, (newTheme) => {
  localStorage.setItem('currentTheme', newTheme);
  window.location.reload();
}, {deep: true});

</script>

<template>
  <div>
    <nav class="bg-primary text-white p-4 flex justify-between shadow-2xl">
      <div class="flex items-center">
        <nuxt-link to="/" class="text-secondary text-lg font-bold">Theme Two</nuxt-link>
      </div>
      <div class="flex space-x-4">
        <nuxt-link to="/product" class="text-secondary hover:text-gray-300">Products</nuxt-link>
        <nuxt-link to="/contact" class="text-secondary hover:text-gray-300">Contact</nuxt-link>
      </div>
    </nav>
  </div>

</template>

<style scoped>

</style>