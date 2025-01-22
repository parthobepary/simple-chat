<script setup lang="ts">
import type {Client} from "~/interface/fake";

defineProps({
  client: {
    type: Object as PropType<Client>,
    required: true
  }
})

const {deleteClient} = useClientStore();
</script>

<template>
  <div class="w-full p-2 mb-2 flex justify-between items-center bg-gray-300">
    <div class="flex justify-between w-full">
      <div>
        <h1 class="font-bold">{{ client?.name }}</h1>
        <p>{{ client?.role }}</p>
      </div>
      <button :disabled="client?.id === 1" @click="deleteClient(client.id)">
        <Icon class="text-red-600" name="fa6-solid:trash-can"/>
      </button>
    </div>
  </div>
</template>