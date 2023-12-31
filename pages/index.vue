<script setup lang="ts">
const localPath = useLocalePath();
</script>

<template>
<div>

  <Hero />


  <h1 class="gap-10 text-gray-600 dark:text-gray-400">{{ $t("home_title") }}</h1>


  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Modern building architecture">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>


<button type="button" class="py-3 px-10 inline-flex items-center m-10 text-sm font-semibold rounded text-white bg-gradient-to-r from-orange-400 to-orange-500">
  Button
</button>

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
