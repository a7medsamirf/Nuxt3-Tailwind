<script setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: "%s - سوبرداو",
  // ... or as a function
  titleTemplate: (productCategory) => {
    return productCategory ? `${productCategory} - سوبرداو` : "سوبرداو";
  },
});
</script>
<template>
  <div id="app">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style></style>
