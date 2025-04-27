<script setup lang="ts">
// No script logic needed for now
</script>

<template>
  <div class="space-y-24">

    <!-- Hero Banner Section -->
    <section class="bg-primary text-secondary py-24">
      <div class="max-w-6xl mx-auto px-6 text-center bg-red-500">
        <div :class="`bg-[var(--primary-300)] text-[var(--secondary-700)] p-4`">Primary 100</div>

        <h1 class="text-5xl font-bold mb-6">Welcome to Our Store</h1>
        <p class="text-xl mb-8 bg-primary-900">Shop the best products at unbeatable prices!</p>
        <nuxt-link
            to="/products"
            class="inline-block bg-secondary text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Shop Now
        </nuxt-link>
      </div>
    </section>

    <!-- Advertisement / Promotions Section -->
    <section class="max-w-6xl mx-auto px-6 text-center text-secondary">
      <h2 class="text-4xl font-bold mb-12">Special Offers</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-primary p-8 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-2xl font-semibold mb-4">Free Shipping</h3>
          <p>Get free shipping on orders over $100.</p>
        </div>
        <div class="bg-primary p-8 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-2xl font-semibold mb-4">50% Off Sale</h3>
          <p>Huge discounts on select items for a limited time!</p>
        </div>
        <div class="bg-primary p-8 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-2xl font-semibold mb-4">New Arrivals</h3>
          <p>Check out the latest products just added to our catalog.</p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-100 py-20">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold mb-2">How long does shipping take?</h3>
            <p class="text-gray-600">Shipping usually takes 3-5 business days depending on your location.</p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-2">Can I return an item?</h3>
            <p class="text-gray-600">Yes, returns are accepted within 30 days of purchase.</p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-2">What payment methods do you accept?</h3>
            <p class="text-gray-600">We accept Visa, MasterCard, PayPal, and more.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Happy Customers / Testimonials Section -->
    <section class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold mb-12">Happy Customers</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-primary p-8 rounded-xl shadow hover:shadow-lg transition text-secondary">
          <p class="italic mb-4">"Absolutely love the quality and service. Highly recommended!"</p>
          <h4 class="font-semibold">- Sarah M.</h4>
        </div>
        <div class="bg-primary p-8 rounded-xl shadow hover:shadow-lg transition text-secondary">
          <p class="italic mb-4">"Fast delivery and fantastic customer support. Will shop again!"</p>
          <h4 class="font-semibold">- John D.</h4>
        </div>
        <div class="bg-primary p-8 rounded-xl shadow hover:shadow-lg transition text-secondary">
          <p class="italic mb-4">"Great products at amazing prices. I'm a loyal customer now."</p>
          <h4 class="font-semibold">- Emily R.</h4>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* No extra CSS, Tailwind handles it */
</style>
