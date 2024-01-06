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
    <div class=" rounded-md  flex items-center justify-center ">
    
      <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div class="flex items-center gap-4">
    <img
      alt="Developer"
      src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
      class="h-16 w-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">Claire Mac</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300"> Twitter </a>
          </li>

          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300"> GitHub </a>
          </li>

          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300">Website</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600  hover:transition hover:duration-700  hover:ease-in-out transition duration-700 ease-in-out">
        <strong class="font-medium text-white">Project A</strong>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti,
          unde ab ut in!
        </p>
      </a>
    </li>

    <li>
      <a href="#" class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong class="font-medium text-white">Project B</strong>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque saepe sit.
        </p>
      </a>
    </li>
  </ul>
</article>
    </div>
    <div class="bg-green-400 text-cyan-50 rounded-md  flex items-center justify-center p-4">3</div>
    <div class="bg-orange-900 text-cyan-50 rounded-md  flex items-center justify-center p-4">4</div>
    <div class="bg-green-600 text-cyan-50 rounded-md  flex items-center justify-center p-4">5</div>
    
  </div>
</div>
</div>

</template>
