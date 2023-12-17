<template>
    <div>
      <Head>
        <Title>Nuxt Whisper | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
      </Head>
      
      <product-details :product="product" />
  
    </div>
  </template>
  
  <script setup>
  const route = useRoute();
  const { id } = route.params;
  const url = `https://fakestoreapi.com/products/${id}`;
  
  //  fetch the product
  const { data: product } = await useFetch(url);
  
  if (!product.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Product not found",
      fatal: true,
    });
  }
  
  /* definePageMeta({
    layout: "products",
  }); */
  </script>
  
  <style scoped></style>