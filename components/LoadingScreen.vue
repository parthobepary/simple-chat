<script setup lang="ts">

</script>

<template>
  <div class="skeleton-loader">
    <div class="skeleton-content">
      <div class="skeleton-line title"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line short"></div>
    </div>
  </div>


</template>

<style scoped>
/* Full-screen loader container */
.skeleton-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* Content container */
.skeleton-content {
  width: 80%;
  max-width: 600px;
}

/* Skeleton lines */
.skeleton-line {
  height: 20px;
  background: #e0e0e0;
  margin-bottom: 16px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

/* Title line */
.skeleton-line.title {
  width: 70%;
  height: 24px;
}

/* Short line */
.skeleton-line.short {
  width: 40%;
}

/* Shimmer effect */
.skeleton-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: -150px;
  height: 100%;
  width: 150px;
  background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

</style>