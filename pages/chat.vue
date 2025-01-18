<script setup lang="ts">
import type {PageData} from "~/interface/fake";

const pageData: PageData = {
  title: 'Chat',
  description: 'Welcome to the chat page!'
}
</script>

<template>
  <PageInfo :page-data="pageData"/>
  <div>
    <message-view-message/>
    <message-send-message/>
  </div>
</template>

<style scoped>

</style>