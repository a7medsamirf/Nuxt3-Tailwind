<template>
    <div class="card text-center p-5 bg-white/95 text-gray-800 shadow-lg dark:text-gray-100 dark:bg-gray-900 rounded-md ">
      <img :src="product.image" alt="product thumb" class="thumb" />
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
      <nuxt-link :to="`/products/${product.id}`"
        ><p class="btn mt-4 mb-1">View details</p></nuxt-link
      >
    </div>
  </template>
  
  <script setup>
  const { product } = defineProps(["product"]);
  </script>
  
  <style scoped>
  .thumb {
    max-height: 120px;
    height: 100%;
    max-width: 70%;
    margin: 0 auto;
  }
  </style>