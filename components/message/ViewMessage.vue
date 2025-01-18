<script setup lang="ts">
import Nodata from "~/components/Nodata.vue";

const {messages} = storeToRefs(useChatStore())
const {clients} = storeToRefs(useClientStore());
</script>

<template>
  <div class="h-[calc(100vh-300px)] overflow-y-scroll my-2">
    <div v-if="messages.length">
      <div v-for="(sms, i) in messages" :key="i" class="border m-3 rounded p-2 flex flex-col"
           :class="sms?.client?.id === 1 ? 'items-end' :'items-start'">
        <div class="flex items-center gap-2">
          <icon class="border w-6 h-6 rounded-full" name="fa6-solid:user-graduate"/>
          <span class="capitalize">{{ sms?.client?.name }}</span>
        </div>
        <div>
          {{ sms.message }}
        </div>
      </div>
    </div>
    <div v-else>
      <Nodata msg="No conversation found"/>
    </div>
  </div>
</template>