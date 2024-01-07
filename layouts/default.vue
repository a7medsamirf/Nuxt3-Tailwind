<script setup lang="ts">
const route = useRoute();
useHead({
  meta: [{ property: "og:title", content: `App Name - ${route.meta.title}` }],
});
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
const htmlAttrs = computed(() => head.value.htmlAttrs!);
</script>

<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <Head>
      <Title>{{ $t("app_title") }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
    </Head>
    <Body class="bg-white/95 dark:bg-dark">
      <AppHeader />

      <main>
        <slot />
      </main>
      <AppFooter />
    </Body>
  </Html>
</template>
