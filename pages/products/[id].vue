<script setup>
const route = useRoute();
const { id } = route.params;
const url = `https://dummyjson.com/products/${id}`;

//  fetch the product
const { data: product } = await useFetch(url);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>
<template>
  <div>
    <Head>
      <Title>Products | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <product-details :product="product" />
  </div>
</template>

<style scoped></style>
