<template>
  <div class="min-h-screen bg-secondary text-primary">
    <!--   make a nav item left site logo and right site contact and product-->

    <Header/>
    <main class="p-4 min-h-[calc(100vh-100px)]">
      <slot/>
    </main>
    <footer class="bg-primary text-secondary text-center p-4 mt-10">Theme two - Footer</footer>
  </div>
</template>
<script setup lang="ts">
import Header from "~/themes/theme2/components/Header.vue";
</script>