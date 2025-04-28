<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out hover:border-secondary group w-[161px] h-[282px] md:w-[267px] md:h-[363px] mx-auto"
  >
    <div class="relative overflow-hidden w-[152px] h-[135px] md:w-[250px] md:h-[223px] rounded-[10px] mx-auto mt-2">
      <img
        :src="product.image"
        :alt="product.title"
        class="object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-[1.2] w-full h-full rounded-[10px]"
      />

      <!-- Overlay Box -->
      <div class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 h-8 md:h-10 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <span class="text-black text-[14px] md:text-[16px] font-[600]">View Product</span>
      </div>
    </div>

    <div class="px-2 pt-2 md:px-4 space-y-2 md:space-y-3">
      <h2 class="text-black text-[14px] md:text-[16px] font-[600] leading-[1.3]">
        {{ product.title }}
      </h2>

      <!-- Mobile View: Prices -->
      <div class="flex items-baseline justify-between md:hidden">
        <span class="line-through text-gray-400 text-[17px] font-[400] decoration-red-500">
          {{ product.originalPrice }}৳
        </span>
        <span class="text-black text-[24px] font-[600]">
          {{ product.price }}৳
        </span>
      </div>

      <!-- Mobile View: Button -->
      <button
        class="md:hidden text-white text-[14px] font-[600] bg-primary rounded-[5px] w-full h-[35px]">
        Buy Now
      </button>

      <!-- Desktop View: Button + Prices in a row -->
      <div class="hidden md:flex items-center justify-between">
        <button
          class="text-white text-[16px] font-[600] bg-primary rounded-[5px] w-[85px] h-[45px]">
          Buy Now
        </button>

        <div class="flex items-baseline space-x-2">
          <span class="line-through text-gray-400 text-[17px] font-[400] decoration-red-500">
            {{ product.originalPrice }}৳
          </span>
          <span class="text-black text-[32px] font-[600]">
            {{ product.price }}৳
          </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const product = {
  image: '/images/product.png',
  title: 'দানাদার গাওয়া ঘি | Granular Gawa Ghee',
  originalPrice: 450,
  price: 350,
};
</script>
