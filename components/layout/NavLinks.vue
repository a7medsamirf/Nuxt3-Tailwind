<script setup lang="ts">
const localePath = useLocalePath()
const links = [
    { name: 'nav.Home', to: '/', },
    { name: 'nav.Test', to: '/test', },
    { name: 'nav.Blog', to: '/blog', },
    { name: 'nav.Products', to: '/products', },
];
</script>
<template>
     <div class="nav-item dropdown px-2" v-for="(link, i) in links" :key="i">
          <NuxtLink
              class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            :to="localePath(link.to)">
      
              {{$t(link.name)}}
            </NuxtLink>
        </div>
 
</template>

<style>

</style>