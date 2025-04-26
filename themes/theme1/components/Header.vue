<script setup lang="ts">
import {useRoute} from 'vue-router'

const currentTheme = ref('theme1');
watch(currentTheme, (newTheme) => {
  localStorage.setItem('currentTheme', newTheme);
  window.location.reload();
}, {deep: true});

const route = useRoute();
</script>

<template>
  <div class="bg-primary shadow-md">
    <header class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <nuxt-link to="/" class="text-2xl font-bold text-secondary cursor-pointer">
        Theme One
      </nuxt-link>

      <!-- Navigation Links -->
      <nav class="flex items-center space-x-6">
        <nuxt-link
            to="/"
            class="text-secondary hover:text-amber-400 transition"
            :class="{ 'text-amber-700 font-bold': route.path === '/' }"
        >
          Home
        </nuxt-link>
        <nuxt-link
            to="/products"
            class="text-secondary hover:text-amber-400 transition"
            :class="{ 'text-amber-700 font-bold': route.path === '/products' }"
        >
          Products
        </nuxt-link>
        <nuxt-link
            to="/abouts"
            class="text-secondary hover:text-amber-400 transition"
            :class="{ 'text-amber-700 font-bold': route.path === '/abouts' }"
        >
          About
        </nuxt-link>
        <nuxt-link
            to="/contact"
            class="text-secondary hover:text-amber-400 transition"
            :class="{ 'text-amber-700 font-bold': route.path === '/contact' }"
        >
          Contact
        </nuxt-link>
      </nav>
    </header>
  </div>
</template>

<style scoped>
/* Additional styling if needed */
</style>
