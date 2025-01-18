<script setup lang="ts">
import type {PageData} from "~/interface/fake";

defineProps({
  pageData: {
    type: Object as PropType<PageData>,
    required: true
  }
})
</script>

<template>
  <div class="bg-gray-300 w-full p-2 rounded shadow-md flex justify-between items-center">
    <div>
      <h1 class="font-bold">{{ pageData.title }}</h1>
      <p>{{ pageData.description }}</p>
    </div>
    <div>
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>