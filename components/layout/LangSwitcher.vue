<script setup>
const { locale, locales, setLocale  } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>

  <NuxtLink class="text-gray-800 dark:text-white"
   v-for="locale in availableLocales"
    :key="locale.code" 
    @click.prevent.stop="setLocale(locale.code)"
    :to="switchLocalePath(locale.code)">{{
    locale.name
  }}
  </NuxtLink>
</template>