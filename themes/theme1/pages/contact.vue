<script setup lang="ts">
import { ref } from 'vue'

// Form state
const name = ref('')
const email = ref('')
const message = ref('')

// Handle form submit
const submitContact = () => {
  alert(`Thank you ${name.value}! We have received your message.`)
  // You can later send this data to your backend
}
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-center mb-10">Contact Us</h1>

    <!-- Contact Form -->
    <form @submit.prevent="submitContact" class="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-md">
      <!-- Name -->
      <div>
        <label class="block mb-2 text-lg font-medium">Your Name</label>
        <input
            v-model="name"
            type="text"
            required
            placeholder="Enter your name"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block mb-2 text-lg font-medium">Your Email</label>
        <input
            v-model="email"
            type="email"
            required
            placeholder="Enter your email"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      <!-- Message -->
      <div>
        <label class="block mb-2 text-lg font-medium">Your Message</label>
        <textarea
            v-model="message"
            rows="5"
            required
            placeholder="Write your message here..."
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
          type="submit"
          class="w-full mt-6 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary-dark transition"
      >
        Send Message
      </button>
    </form>

    <!-- Contact Info -->
    <div class="mt-16 text-center text-gray-600">
      <p>Email: support@example.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 Main Street, Your City</p>
    </div>
  </div>
</template>

<style scoped>
/* No extra CSS needed; Tailwind handles it */
</style>
