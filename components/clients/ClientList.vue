<script setup lang="ts">
import Nodata from "~/components/Nodata.vue";

const {clients} = storeToRefs(useClientStore());
</script>

<template>
  <div v-if="clients?.length" class="h-auto mt-2 rounded">
    <div v-for="(client, i) in clients" :key="i">
      <clients-client-card :client="client"/>
    </div>
  </div>
  <div v-else>
    <Nodata msg="No client found"/>
  </div>
</template>

<style scoped>

</style>