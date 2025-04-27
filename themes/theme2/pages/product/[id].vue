<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
  <div>
    {{ route}}
    <h1>Theme 2 dynamic page</h1>
  </div>
</template>

<style scoped>

</style>