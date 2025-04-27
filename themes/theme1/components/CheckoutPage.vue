<template>
    <div class="flex flex-col md:flex-row gap-6 p-4 md:p-8 max-w-7xl mx-auto">
      <!-- Billing Details -->
      <div class="w-full md:w-1/2 space-y-6">
        <h2 class="text-2xl font-bold">Billing Details</h2>
        <div class="space-y-4">
          <div class="flex flex-col space-y-1">
            <label class="font-medium">আপনার নাম</label>
            <input v-model="billing.name" type="text" class="input" />
          </div>
          <div class="flex flex-col space-y-1">
            <label class="font-medium">আপনার ফোন নাম্বার</label>
            <input v-model="billing.phone" type="text" class="input" />
          </div>
          <div class="flex flex-col space-y-1">
            <label class="font-medium">সম্পূর্ণ ঠিকানা লিখুন</label>
            <input v-model="billing.address" type="text" class="input" />
          </div>
          <div class="flex flex-col space-y-1">
            <label class="font-medium">ইমেইল (ঐচ্ছিক)</label>
            <input v-model="billing.email" type="email" class="input" />
          </div>
          <div class="flex flex-col space-y-1">
            <label class="font-medium">কাস্টমার নোট</label>
            <textarea v-model="billing.notes" class="input h-24"></textarea>
          </div>
        </div>
      </div>
  
      <!-- Cart Summary -->
      <div class="w-full md:w-1/2 space-y-6">
        <h2 class="text-2xl font-bold">Cart Totals</h2>
  
        <div class="bg-gray-50 p-4 md:p-6 rounded space-y-4">
          <div v-for="(item, index) in cartItems" :key="index" class="flex justify-between items-center border-b pb-2">
            <div>
              <p class="font-semibold text-sm md:text-base">{{ item.name }}</p>
              <p class="text-xs md:text-sm text-gray-500">Size: {{ item.size }}</p>
            </div>
            <div class="text-right">
              <p class="text-xs md:text-sm">× {{ item.quantity }}</p>
              <p class="text-sm md:text-base">{{ item.price }} ৳</p>
            </div>
          </div>
  
          <!-- Shipping -->
          <div class="space-y-2 pb-4 border-b">
            <p class="font-semibold">Shipping</p>
            <div class="flex flex-col space-y-2">
              <label class="flex items-center gap-2">
                <input type="radio" v-model="shipping" value="Inside Dhaka" />
                Inside Dhaka (80৳)
              </label>
              <label class="flex items-center gap-2">
                <input type="radio" v-model="shipping" value="Outside Dhaka" />
                Outside Dhaka (120৳)
              </label>
              <label class="flex items-center gap-2">
                <input type="radio" v-model="shipping" value="Free" />
                Free
              </label>
            </div>
          </div>
  
          <!-- Coupon -->
          <div class="flex flex-row items-center justify-between pb-4 border-b gap-2">
            <h1 class="font-bold text-lg text-left">Coupon</h1>
            <div class="flex gap-2">
              <input v-model="couponCode" type="text" class="input flex-1"  />
              <button @click="applyCoupon" class="bg-[#f69600] text-white px-4 py-2 rounded w-auto">Apply</button>
            </div>
          </div>
  
          <!-- Total -->
          <div class="flex justify-between font-bold text-xl pt-4">
            <span>Total</span>
            <span>{{ totalAmount }} ৳</span>
          </div>
        </div>
  
        <!-- Payment Methods -->
        <div class="border p-4 rounded flex md:flex-row flex-col justify-between md:items-center items-start">
            <div class="font-bold text-lg md:text-center text-start py-2">
                Payment
            </div>
          <div class="flex flex-wrap justify-center gap-x-2">
            <button class="payment-btn" :class="{ active: paymentMethod === 'Cash' }"
              @click="paymentMethod = 'Cash'">Cash on delivery</button>
            <button class="payment-btn" :class="{ active: paymentMethod === 'SSLCommerz' }"
              @click="paymentMethod = 'SSLCommerz'">SSL Commerz</button>
            
          </div>
          <div class="md:p-0 p-2">
            <button class="payment-btn" :class="{ active: paymentMethod === 'Bkash' }"
              @click="paymentMethod = 'Bkash'">Bkash</button>
          </div>
        </div>
  
        <!-- Place Order -->
        <button @click="placeOrder"
          class="w-full bg-black text-white py-4 rounded flex items-center justify-center gap-2 mt-4 text-sm md:text-base">
          🛒 Place Order BDT {{ totalAmount }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  
  const billing = ref({
    name: '',
    phone: '',
    address: '',
    email: '',
    notes: ''
  })
  
  const cartItems = ref([
    { name: 'দানাদার গাওয়া ঘি | Granular Gawa Ghee', size: '500 gm', quantity: 2, price: 700 },
    { name: 'দানাদার গাওয়া ঘি | Granular Gawa Ghee', size: '500 gm', quantity: 2, price: 700 }
  ])
  
  const shipping = ref('Inside Dhaka')
  const couponCode = ref('')
  const paymentMethod = ref('Cash')
  
  const shippingCost = computed(() => {
    if (shipping.value === 'Inside Dhaka') return 80
    if (shipping.value === 'Outside Dhaka') return 120
    return 0
  })
  
  const subtotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })
  
  const discount = ref(0)
  
  const totalAmount = computed(() => {
    return subtotal.value + shippingCost.value - discount.value
  })
  
  const applyCoupon = () => {
    if (couponCode.value === 'OTA400') {
      discount.value = 400
      alert('Coupon applied successfully!')
    } else {
      alert('Invalid coupon code!')
    }
  }
  
  const placeOrder = () => {
    console.log('Placing order with data:', {
      billing: billing.value,
      cartItems: cartItems.value,
      shipping: shipping.value,
      paymentMethod: paymentMethod.value,
      totalAmount: totalAmount.value
    })
    alert('Order placed successfully (API Integration pending)!')
  }
  </script>
  
  <style scoped>
  .input {
    width: 100%;
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 6px;
    background: #f9f9f9;
  }
  
  .payment-btn {
    border: 1px solid #ccc;
    padding: 8px 16px;
    border-radius: 36px;
    background: #fff;
    cursor: pointer;
    flex: 1 1 auto;
    min-width: 120px;
    text-align: center;
  }
  
  .payment-btn.active {
    background: #f69600;
    color: #fff;
    border-color: #f69600;
  }
  </style>
  