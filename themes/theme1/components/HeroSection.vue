<script setup lang="ts">
// You can add product data or fetch from an API later
const products = [
  {id: 1, name: 'Product 1', price: '$19.99', image: 'https://via.placeholder.com/150'},
  {id: 2, name: 'Product 2', price: '$29.99', image: 'https://via.placeholder.com/150'},
  {id: 3, name: 'Product 3', price: '$39.99', image: 'https://via.placeholder.com/150'},
];
</script>

<template>
  <div class="space-y-16 mt-12">

    <!-- Hero Section -->
    <section class="hero bg-primary flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-6">Hello there!</h1>
        <p class="py-4 text-lg">Welcome to our website. We are glad to have you here.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </section>

    <!-- Products Section -->
    <section class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Our Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="product in products" :key="product.id"
             class="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-gray-600 mb-4">{{ product.price }}</p>
          <button class="btn btn-secondary w-full">Add to Cart</button>
        </div>
      </div>
    </section>

    <!-- Advertisement Section -->
    <section class="bg-primary text-secondary py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4">Special Offer!</h2>
        <p class="mb-8 text-lg">Get 20% off on your first purchase. Limited time only!</p>
        <button class="btn btn-accent">Shop Now</button>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Customize if needed */
</style>
