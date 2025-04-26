<script setup lang="ts">
import { ref } from 'vue'

const product = {
  id: 3,
  slug: 'shoes',
  name: 'Comfortable Running Shoes',
  price: 129,
  description: 'Experience unmatched comfort and style with our latest running shoes. Designed for performance and built for durability.',
  features: [
    'Breathable mesh fabric',
    'Memory foam insoles',
    'Lightweight & flexible',
    'Anti-slip sole',
  ],
  image: 'https://via.placeholder.com/500x400',
}

// Checkout form state
const name = ref('')
const address = ref('')
const paymentMethod = ref('Card')

const submitCheckout = () => {
  alert(`Thank you ${name.value}! Your order for ${product.name} has been placed.`)
  // Here you can later handle API submission
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <!-- Product Section -->
    <div class="grid md:grid-cols-2 gap-10 mb-20 items-center">
      <!-- Product Image -->
      <img :src="product.image" alt="Product Image" class="w-full h-auto rounded-xl shadow-lg" />

      <!-- Product Details -->
      <div>
        <h1 class="text-5xl font-bold mb-6">{{ product.name }}</h1>
        <p class="text-3xl text-primary font-semibold mb-6">${{ product.price }}</p>
        <p class="text-gray-600 mb-6">{{ product.description }}</p>

        <!-- Features -->
        <ul class="list-disc list-inside text-gray-700 mb-8">
          <li v-for="(feature, index) in product.features" :key="index">{{ feature }}</li>
        </ul>

        <!-- CTA Button (Scroll to Checkout) -->
        <a href="#checkout" class="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition">
          Proceed to Checkout
        </a>
      </div>
    </div>

    <!-- Checkout Section -->
    <div id="checkout" class="bg-gray-50 p-10 rounded-2xl shadow-lg">
      <h2 class="text-3xl font-bold mb-8">Checkout</h2>

      <form @submit.prevent="submitCheckout" class="space-y-6">
        <!-- Name -->
        <div>
          <label class="block mb-2 font-medium">Full Name</label>
          <input v-model="name" type="text" required
                 class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
        </div>

        <!-- Address -->
        <div>
          <label class="block mb-2 font-medium">Shipping Address</label>
          <textarea v-model="address" rows="4" required
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
        </div>

        <!-- Payment Method -->
        <div>
          <label class="block mb-2 font-medium">Payment Method</label>
          <select v-model="paymentMethod" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none">
            <option>Card</option>
            <option>Cash on Delivery</option>
            <option>Paypal</option>
          </select>
        </div>

        <!-- Place Order Button -->
        <button type="submit"
                class="w-full mt-6 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary-dark transition">
          Place Order
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* No extra custom styles; Tailwind makes it beautiful */
</style>
