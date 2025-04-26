<script setup>
import {useTheme} from './composables/useTheme';
import {useThemeColors} from '~/composables/useThemeColors';

const {loadLayout} = useTheme();
const Layout = loadLayout();
const {setThemeColors} = useThemeColors();
const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 20);

setThemeColors('#e00f4e', '#e0f2fe');
</script>

<template>
  <nuxt-layout>
    <LazyLoadingScreen v-if="loading"/>
    <component :is="Layout">
      <NuxtPage/>
    </component>
  </nuxt-layout>
</template>
