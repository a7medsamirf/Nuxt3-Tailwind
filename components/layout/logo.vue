<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
<div>
    <NuxtLink class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white" :to="localePath('/')">
          <img class="w-30 h-auto" src="/public/LogoFull.png" alt="Discover Nuxt 3" />
          {{ $t("app_title") }}
      </NuxtLink>


</div>

</template>
