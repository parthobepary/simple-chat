<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out hover:border-[#0A9300]"
    style="width: 267px; height: 363px"
  >
    <div class="relative overflow-hidden" style="width: 250px; height: 223px; border-radius: 10px; margin: 8px auto 0 auto">
      <img
        :src="product.image"
        alt="Product Image"
        class="object-cover transition-transform duration-300 ease-in-out transform hover:scale-[1.2]"
        style="width: 250px; height: 223px; border-radius: 10px"
      />
    </div>

    <div class="px-3 pt-2 space-y-3">
      <h2 class="text-black text-[16px] font-[600]">
        {{ product.title }}
      </h2>

      <div class="flex items-center justify-between">
        <button
          class="text-white text-[16px] font-[600]"
          style="
            width: 85px;
            height: 45px;
            border-radius: 5px;
            background: #0A9300;
          "
        >
          Buy Now
        </button>

        <div class="flex items-baseline space-x-2">
          <span class="line-through text-gray-400 text-[17px] font-[400]">{{ product.originalPrice }}৳</span>
          <span class="text-black text-[32px] font-[600]">{{ product.price }}৳</span>
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