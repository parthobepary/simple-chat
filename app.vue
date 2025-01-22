<template>
  <div>
    <nuxt-layout>
      <nuxt-page/>
    </nuxt-layout>
  </div>
</template>
<script setup lang="ts">
import {useClientStore} from "~/stores/client";

onMounted(async () => {
  const {clients} = storeToRefs(useClientStore())

  if (clients.value.length > 0) return;

  await setData('clients', JSON.stringify([{
    id: 1,
    name: "Me",
    role: "Admin"
  }]));
})
</script>
