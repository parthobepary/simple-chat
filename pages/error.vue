<script setup lang="ts">
import type {NuxtError} from '#app'

const props = defineProps({
  error: Object as () => NuxtError as any,
})
</script>

<template>
  <NuxtLayout name="404">
    <div class="text-center p-8">
      <h1 class="text-4xl font-bold mb-4">
        {{ error.statusCode === 404 ? 'Page Not Found' : 'An Error Occurred' }}
      </h1>
      <p class="mb-4">{{ error.message }}</p>
      <NuxtLink to="/" class="text-blue-500 hover:underline">Go back home</NuxtLink>
    </div>
  </NuxtLayout>
</template>
