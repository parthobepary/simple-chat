<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {storeToRefs} from "pinia";
import {useChatStore} from "~/stores/chat";
import Nodata from "~/components/Nodata.vue";

const {messages} = storeToRefs(useChatStore());
const chatContainer = ref<HTMLElement | null>(null);

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

onMounted(scrollToBottom);

watch(messages, () => {
  setTimeout(scrollToBottom, 0);
}, {deep: true});
</script>

<template>
  <div ref="chatContainer" class="chat-container">
    <div v-if="messages.length">
      <div v-for="(sms, i) in messages"
           :key="i"
           class="border m-3 rounded p-2 flex flex-col"
           :class="sms?.client?.id === 1 ? 'items-end' :'items-start'">
        <div class="flex items-center gap-2">
          <icon class="border w-6 h-6 rounded-full" name="fa6-solid:user-graduate"/>
          <span class="capitalize">{{ sms?.client?.name }}</span>
        </div>
        <div>{{ sms.message }}</div>
      </div>
    </div>
    <div v-else>
      <Nodata msg="No conversation found"/>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  height: calc(100vh - 300px);
  overflow-y: scroll;
  scroll-behavior: smooth;
}
</style>
