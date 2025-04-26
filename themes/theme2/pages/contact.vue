<script setup lang="ts">
import { ref } from 'vue'

// Form fields
const email = ref('')
const phone = ref('')

// Handle form submit
const submitContact = () => {
  alert(`Thanks! We will contact you at ${email.value} or ${phone.value}.`)
  // Later you can connect this to your backend
}
</script>

<template>
  <div class="max-w-xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-center mb-8">Contact Us</h1>

    <form @submit.prevent="submitContact" class="space-y-6 bg-gray-50 p-8 rounded-xl shadow">
      <!-- Email Field -->
      <div>
        <label class="block mb-2 text-lg font-medium">Email</label>
        <input
            v-model="email"
            type="email"
            required
            placeholder="Enter your email"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      <!-- Phone Number Field -->
      <div>
        <label class="block mb-2 text-lg font-medium">Phone Number</label>
        <input
            v-model="phone"
            type="tel"
            required
            placeholder="Enter your phone number"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      <!-- Submit Button -->
      <button
          type="submit"
          class="w-full py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-dark transition"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
/* No extra styles needed */
</style>
