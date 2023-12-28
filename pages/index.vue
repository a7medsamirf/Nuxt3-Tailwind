<script setup lang="ts">
const localPath = useLocalePath();
</script>

<template>
<div>

  <h1>{{ $t("home_title") }}</h1>


<div class="container mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
  <img class="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description">
  <div class="p-4 md:p-5">
    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
      Card title
    </h3>
    <p class="mt-1 text-gray-500 dark:text-gray-400">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <p class="mt-5 text-xs text-gray-500 dark:text-gray-500">
      Last updated 5 mins ago
    </p>
  </div>
</div>
    <div class="bg-orange-600 text-cyan-50 rounded-md  flex items-center justify-center p-4">2</div>
    <div class="bg-green-400 text-cyan-50 rounded-md  flex items-center justify-center p-4">3</div>
    <div class="bg-orange-900 text-cyan-50 rounded-md  flex items-center justify-center p-4">4</div>
    <div class="bg-green-600 text-cyan-50 rounded-md  flex items-center justify-center p-4">5</div>
    
  </div>
</div>
</div>

</template>
