<script setup lang="ts">
import { useTheme } from '~/composables/useTheme';
const { loadPage } = useTheme();
const Page = loadPage();
</script>

<template>
  <Suspense>
    <component :is="Page" />
  </Suspense>
</template>
