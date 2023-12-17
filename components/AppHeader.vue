<template>
  <header class="sticky top-0 bg-white/95 text-gray-800 shadow-lg dark:text-gray-100 dark:bg-gray-900">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
      <div>
        <NuxtLink class="text-lg font-semibold" to="/">NTPS</NuxtLink>
      </div>
      <div class="hidden items-center gap-5 md:flex">

        <NuxtLink class="btn btn-outline" to="/">Home</NuxtLink>

        <NuxtLink class="btn btn-outline" to="/test">Test</NuxtLink>
        <NuxtLink class="btn btn-outline" to="/products">Products</NuxtLink>

       <ThemeSwitcher />

      </div>

    </div>
  </header>
</template>

