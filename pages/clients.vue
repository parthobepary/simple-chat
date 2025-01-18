<script setup lang="ts">
import type {PageData} from "~/interface/fake";

const pageData: PageData = {
  title: 'Clients',
  description: 'Welcome to the clients page!'
}
</script>

<template>
  <PageInfo :page-data="pageData"/>
  <div class="grid grid-cols-5 gap-x-4">
    <div class="col-span-3">
      <clients-client-list/>
    </div>
    <div class="col-span-2">
      <clients-client-from/>
    </div>
  </div>
</template>