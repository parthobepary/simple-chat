<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useThemeStore} from "~/stores/themeStore";

const {currentTheme} = storeToRefs(useThemeStore());

const toggle = (name: string) => {
  currentTheme.value = name
};
</script>

<template>
  <div>
    <button @click="toggle('theme1')">Theme 1</button>
    <button @click="toggle('theme2')">Theme 2</button>
  </div>
</template>

<style scoped>

</style>