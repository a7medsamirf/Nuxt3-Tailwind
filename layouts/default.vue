<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
})
const htmlAttrs = computed(() => head.value.htmlAttrs!)
</script>


<template>
    <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
      <Head>
      <Title>{{ $t("app_title") }}</Title>
       <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template> 
    </Head>
    <Body class="bg-white/95 dark:bg-gray-900">
      <AppHeader />


      <main class="mx-auto max-w-[1200px] px-4 py-6">

        <slot />
      </main>
      <AppFooter />
    
    </Body>
   
  

    </Html>

  </template>



