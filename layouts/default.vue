<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto h-screen">
    <div class="flex gap-x-4 h-screen">
      <div class="w-40 bg-gray-300 pl-4 pt-4">
        <Navbar/>
      </div>
      <div class="pt-4 w-full">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>