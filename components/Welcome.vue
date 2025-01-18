<script setup lang="ts">
import type {PageData} from "~/interface/fake";
import PageInfo from "~/components/PageInfo.vue";

const pageData: PageData = {
  title: 'Welcome',
  description: 'Welcome to the home page!'
}

</script>
<template>
  <PageInfo :page-data="pageData"/>
</template>