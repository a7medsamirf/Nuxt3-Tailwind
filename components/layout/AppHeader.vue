<script setup lang="ts">
const localePath = useLocalePath();

/* const localePath = useLocalePath()
  export default {
    name: "AppHeader",
    data() {
      return {
        links: [{
            title: "Home",
            to: "/"
          },
          {
            title: "test",
            to: "/test"
          },
          {
            title: "Products",
            to: "/products"
          },
          {
            title: "Lang",
            to: "/lang"
          },
        ],
      };
    },
  }; */
</script>
<template>
  <header
    class="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4"
  >
    <nav
      class="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
      aria-label="Global"
    >
      <Logo />

      <div class="sm:order-3 flex items-center">
        <button class="mx-3"><LangSwitcher /></button>

        <button class="mx-3"><ThemeSwitcher /></button>
        <button
          type="button"
          class="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-collapse="#navbar-alignment"
          aria-controls="navbar-alignment"
          aria-label="Toggle navigation"
        >
          <svg
            class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
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
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg
            class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <div
        id="navbar-alignment"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
      >
        <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
          <NavLinks />
        </div>
      </div>
    </nav>
  </header>
</template>

<!-- <template>
  <header :class="{ 'sticky': isSticky }" class="bg-gray-800 text-white py-4 transition-all duration-500">
 
    <nav class="container mx-auto">
   
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 100; 
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
</style>
 -->
