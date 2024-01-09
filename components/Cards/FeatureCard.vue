<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String
})
</script>

<template>

<div class="bg-white border border-gray-200 rounded-lg p-4 dark:bg-dark-card dark:border-dark-border" role="alert">
  <div class="flex">
    <div class="flex-shrink-0">
      <img  class="" :src="image" :alt="title" />
    </div>
    <div class="ms-3">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-primary-color">
        {{$t('features.' + title)}}
      </h3>
      <p class="mt-2 text-base font-normal text-gray-700 dark:text-gray-300">
        {{$t('features.' + subtitle)}}
      </p>
    </div>
  </div>
</div>


</template>