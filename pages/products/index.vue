<script setup lang="ts">
import {ref, computed} from 'vue'

// Fake product data
const products = ref([
  {id: 1, name: 'Laptop', price: 899, category: 'Electronics', image: 'https://via.placeholder.com/200'},
  {id: 2, name: 'Phone', price: 499, category: 'Electronics', image: 'https://via.placeholder.com/200'},
  {id: 3, name: 'Shoes', price: 129, category: 'Fashion', image: 'https://via.placeholder.com/200'},
  {id: 4, name: 'T-Shirt', price: 39, category: 'Fashion', image: 'https://via.placeholder.com/200'},
  {id: 5, name: 'Washing Machine', price: 699, category: 'Home', image: 'https://via.placeholder.com/200'},
  {id: 6, name: 'Sofa', price: 999, category: 'Home', image: 'https://via.placeholder.com/200'},
  {id: 7, name: 'Headphones', price: 199, category: 'Electronics', image: 'https://via.placeholder.com/200'},
  {id: 8, name: 'Jeans', price: 79, category: 'Fashion', image: 'https://via.placeholder.com/200'},
  {id: 9, name: 'Microwave', price: 150, category: 'Home', image: 'https://via.placeholder.com/200'},
  {id: 10, name: 'Watch', price: 250, category: 'Fashion', image: 'https://via.placeholder.com/200'},
])

const selectedCategory = ref('All')
const visibleCount = ref(6)

// Computed products to show
const filteredProducts = computed(() => {
  let filtered = products.value
  if (selectedCategory.value !== 'All') {
    filtered = products.value.filter(p => p.category === selectedCategory.value)
  }
  return filtered.slice(0, visibleCount.value)
})

// Handle show more
const showMore = () => {
  visibleCount.value += 6
}
</script>

<template>
  <div class="max-w-7xl mx-auto p-6">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold mb-10 text-center">Our Products</h1>

    <!-- Category Filter -->
    <div class="flex justify-center gap-4 mb-10">
      <button
          v-for="cat in ['All', 'Electronics', 'Fashion', 'Home']"
          :key="cat"
          @click="selectedCategory = cat; visibleCount = 6"
          class="px-4 py-2 rounded-full border hover:bg-primary hover:text-secondary transition"
          :class="selectedCategory === cat ? 'bg-primary text-secondary' : 'bg-secondary text-primary'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Product Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col items-center"
      >
        <nuxt-link :to="`/products/${product.id}`">
          <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-gray-600 mb-4">${{ product.price }}</p>
          <button class="btn btn-secondary w-full">show more</button>
        </nuxt-link>
      </div>
    </div>

    <!-- Show More Button -->
    <div v-if="filteredProducts.length < products.length" class="flex justify-center mt-10">
      <button @click="showMore" class="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition">
        Show More
      </button>
    </div>
  </div>
</template>

<style scoped>
/* No extra styles needed for now */
</style>
