<script setup lang="ts">
const themeStore = useThemeStore()
await themeStore.setTheme('normal')
</script>

<template>
  <nuxt-layout>
    <nuxt-page/>
  </nuxt-layout>
</template>
