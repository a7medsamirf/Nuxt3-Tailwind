<script setup lang="ts">
  const localePath = useLocalePath();
  const links = [{
      name: "nav.Home",
      to: "/"
    },
    {
      name: "nav.Playbook",
      to: ""
    },
    {
      name: "nav.Directory",
      to: "",
    },
    {
      name: "nav.Jobs",
      to: "/test"
    },
    {
      name: "nav.Blog",
      to: "/blog"
    },
    {
      name: "nav.Products",
      to: "/products"
    },
  ];
</script>
<template>
  <div class="px-2" v-for="(link, index) in links" :key="index">
    <NuxtLink :to="localePath(link.to)"
      class="hover-transition font-bold text-gray-600 hover:text-gray-400 dark:text-white dark:hover:text-yellow-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
      {{ $t(link.name) }}
    </NuxtLink>

  </div>
</template>

<style>

</style>