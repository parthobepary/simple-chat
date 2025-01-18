<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    required: false,
    default: 'No data available...'
  }
})
</script>

<template>
  <div class="h-56 flex items-center justify-center">
    <p>{{ msg}}</p>
  </div>
</template>