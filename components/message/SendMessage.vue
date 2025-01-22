<script setup lang="ts">
const {message, userId} = storeToRefs(useChatStore())
const {clients} = storeToRefs(useClientStore());
const {sendMessage} = useChatStore()
</script>

<template>
  <div class="p-2 border rounded">
    <form @submit.prevent="sendMessage">
      <div class="flex gap-x-3">
        <select required v-model="userId" name="role" id="role" class="w-96 h-12 p-2 border border-gray-300 rounded">
          <option v-for="(client,i) in clients" :key="i" :value="client.id">{{ client.name }}</option>
        </select>
        <input required v-model="message" placeholder="Type your message here..."
               class="p-4 border rounded w-full h-20"/>
      </div>
      <div class="flex justify-end mt-4">
        <button class="bg-green-600 flex gap-x-4 justify-between items-center px-2 py-1 rounded text-white"
                type="submit">Send
          <icon name="fa6-solid:circle-chevron-right"/>
        </button>
      </div>
    </form>
  </div>
</template>