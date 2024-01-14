<script setup>
const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <NuxtLink
    class="font-bold text-gray-600 dark:text-white font-ARFont flex"
    v-for="locale in availableLocales"
    :key="locale.code"
    @click.prevent.stop="setLocale(locale.code)"
    :to="switchLocalePath(locale.code)"
    >{{ locale.name }}
<!--     <img src="/img/svg/globe.svg" class="flex-none" alt="" />
 -->  </NuxtLink>
</template>
