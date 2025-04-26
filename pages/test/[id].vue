<script setup>
const route = useRoute();
console.log(route);
</script>
<template>
  <div>
    {{route.params.id}}
    <p>This is test page</p>
  </div>
</template>