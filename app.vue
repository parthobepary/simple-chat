<template>
  <div>
    <nuxt-layout>
      <nuxt-page/>
    </nuxt-layout>
  </div>
</template>
<script setup lang="ts">
onMounted(async () => {
  await setData('clients', JSON.stringify({
    id: 1,
    name: "Me",
    role: "Admin"
  }));
})
</script>
