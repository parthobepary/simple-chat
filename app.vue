<script setup lang="ts">
const themeStore = useThemeStore()
await themeStore.setTheme('Normal theme')
</script>

<template>
  <nuxt-layout>
    <nuxt-page/>
  </nuxt-layout>
</template>
