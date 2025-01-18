<script setup lang="ts">
import {useClientStore} from "~/stores/client";

const {name,role, roles} = storeToRefs(useClientStore());
const {createClient} = useClientStore();
</script>

<template>
  <div class="bg-gray-400 mt-2 p-2 rounded">
    <h1 class="text-xl font-bold">Create Clients</h1>
    <hr/>
    <div>
      <form @submit.prevent="createClient" class="mt-4">
        <div class="mb-2">
          <label for="name" class="tex-block font-bold">Name*</label>
          <input type="text" id="name" required v-model="name" class="w-full p-2 border border-gray-300 rounded">
        </div>
        <div class="mb-2">
          <label for="email" class="tex-block font-bold">Email*</label>
          <select v-model="role" name="role" id="role" class="w-full p-2 border border-gray-300 rounded">
            <option v-for="(role,i) in roles" :key="i" :value="role">{{ role }}</option>
          </select>
        </div>
        <div class="mt-6 flex justify-end">
          <button type="submit" class="bg-blue-500 text-white py-1 px-6 rounded">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>