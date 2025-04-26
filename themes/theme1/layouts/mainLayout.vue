<template>
  <div class="min-h-screen bg-primary text-black">
    <Header/>
    <main class="p-4 min-h-[calc(100vh-10rem)]">
      <slot/>
    </main>
    <footer class="bg-secondary text-primary text-center p-4 mt-10">Theme one - Footer</footer>
  </div>
</template>
<script setup lang="ts">
import Header from "~/themes/theme1/components/Header.vue";
</script>