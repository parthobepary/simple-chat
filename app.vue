<script setup>
import { useTheme } from './composables/useTheme';
import { useThemeColors } from '~/composables/useThemeColors';
import { ref } from 'vue';

const { loadLayout } = useTheme();
const Layout = loadLayout();
const { setThemeColors } = useThemeColors();
const loading = ref(true);

// Set predefined colors
const primaryColor = '#000000'; // Black
const secondaryColor = '#F69600'; // Orange

// Set theme colors
setThemeColors(primaryColor, secondaryColor);

setTimeout(() => {
  loading.value = false;
}, 20);
</script>

<template>
  <nuxt-layout>
    <!-- <LazyLoadingScreen v-if="loading"/> -->
    <component :is="Layout">
      <NuxtPage />
    </component>
  </nuxt-layout>
</template>