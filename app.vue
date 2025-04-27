<script setup>
import {useTheme} from './composables/useTheme';
import {useThemeColors} from '~/composables/useThemeColors';

const {loadLayout} = useTheme();
const Layout = loadLayout();
const {setThemeColors} = useThemeColors();
const loading = ref(true);

const route = useRoute();
console.log('route', route.query);

setTimeout(() => {
  loading.value = false;
}, 20);


console.log(route.query.primary)

// setThemeColors(`#${route.query.primary}`, `#${route.query.secondary}`);
setThemeColors('gray', 'cyan');
</script>

<template>
  <nuxt-layout>
    <!--    <LazyLoadingScreen v-if="loading"/>-->
    <component :is="Layout">
      <NuxtPage/>
    </component>
  </nuxt-layout>
</template>
