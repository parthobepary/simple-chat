<template>
    <div class="w-64 p-4 border-r border-gray-200">
      <h2 class="text-[20px] font-[700] mb-4">Filter</h2>
      <h3 class="text-[18px] font-[600] mb-2">Category</h3>
      <div class="space-y-2">
        <div
          v-for="category in categories"
          :key="category.name"
          @click="selectCategory(category.name)"
          :class="[
            'cursor-pointer flex justify-between items-center text-[16px]',
            selectedCategory === category.name ? 'font-[700] text-black' : 'text-gray-600'
          ]"
        >
          <span>{{ category.name }}</span>
          <span>({{ category.count }})</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    categories: Array,
    selectedCategory: String
  })
  
  const emit = defineEmits(['update:category'])
  
  const selectCategory = (category) => {
    emit('update:category', category)
  }
  </script>
  