<script setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: "%s - Site Title",
  // ... or as a function
  titleTemplate: (productCategory) => {
    return productCategory ? `${productCategory} - Site Title` : "Site Title";
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
