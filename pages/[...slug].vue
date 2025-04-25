<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {useThemePageComponent} from '~/composables/useThemeComponent'

const route = useRoute()
const page = route.params.slug?.[0] || 'home'

const PageComponent = ref<null | any>(null)

PageComponent.value = useThemePageComponent(page)
</script>

<template>
  <div>
    <component :is="PageComponent" v-if="PageComponent" />
    <div v-else class="text-red-500">Page not found for this theme</div>
  </div>
</template>
