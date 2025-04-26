<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <header class="mb-4">
      <h1 class="text-3xl font-bold">Oops!</h1>
    </header>
    <main>
      <slot/>
    </main>
    <footer class="mt-4">
      <p class="text-sm text-gray-500">© 2025 Your Company</p>
    </footer>
  </div>
</template>
