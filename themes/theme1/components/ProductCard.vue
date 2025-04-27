<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out hover:border-secondary group w-[267px] h-[363px] mx-auto"
    >
      <div class="relative overflow-hidden w-[250px] h-[223px] rounded-[10px] mx-auto mt-2">
        <img
          :src="product.image"
          :alt="product.title"
          class="object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-[1.2] w-full h-full rounded-[10px]"
        />

        <!-- Overlay Box -->
        <div class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 h-10 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <span class="text-black text-[16px] font-[600]">View Product</span>
        </div>
      </div>

      <div class="px-3 pt-2 space-y-3">
        <h2 class="text-black text-[16px] font-[600]">
          {{ product.title }}
        </h2>

        <div class="flex items-center justify-between">
          <button class="text-white text-[16px] font-[600] bg-primary rounded-[5px] w-[85px] h-[45px]">
            Buy Now
          </button>

          <div class="flex items-baseline space-x-2">
            <span class="line-through text-gray-400 text-[17px] font-[400]">
              {{ product.originalPrice }}৳
            </span>
            <span class="text-black text-[32px] font-[600]">
              {{ product.price }}৳
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    image: '/images/product.png',
    title: 'দানাদার গাওয়া ঘি | Granular Gawa Ghee',
    originalPrice: 450,
    price: 350,
    category: 'Ghee & Oil',
  }
];
</script>

