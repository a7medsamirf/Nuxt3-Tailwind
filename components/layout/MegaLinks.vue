<script setup lang="ts">
const localePath = useLocalePath();
const links = [
  {
    name: "nav.Home",
    sublinks: [
      { name: "nav.HomeV1", to: "/" },
      { name: "nav.HomeV2", to: "/" },
    ],
  },
  { name: "nav.Playbook", to: "" },
  { name: "nav.Directory", to: "", Counter: "501" },
  { name: "nav.Jobs", to: "/test" },
  { name: "nav.Blog", to: "/blog" },
  { name: "nav.Products", to: "/products" },
];
</script>
<template>
  <div class="px-2" v-for="(link, index) in links" :key="index">
    <NuxtLink
      v-if="!link.sublinks"
      :to="localePath(link.to)"
      class="hover-transition font-bold text-gray-600 hover:text-gray-400 dark:text-white dark:hover:text-yellow-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      {{ $t(link.name) }}
      <span class="text-white bg-gradient-to-r from-[#B726FF] to-[#4624F2]">
        {{ link.Counter }}</span
      >
    </NuxtLink>

    <div
      class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] cursor-pointer"
      v-else
    >
      <NuxtLink
        class="flex items-center font-bold w-full text-gray-600 hover:text-gray-400 dark:text-white dark:hover:text-yellow-600"
      >
        {{ $t(link.name) }}
        <svg
          class="ms-1 flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </NuxtLink>

      <div
        class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-7 before:start-0 before:w-full before:h-5 hidden"
      >
        <div v-for="sublink in link.sublinks" :to="localePath(sublink.to)">
          <NuxtLink
            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            :to="localePath(sublink.to)"
          >
            {{ $t(sublink.name) }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* span {
  display: inline-flex;
  height: 24px;
  padding: 2px 8px 4px 8px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
} */
</style>
