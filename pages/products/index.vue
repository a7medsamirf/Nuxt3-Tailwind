<template>
<div>
    <div class="container mx-auto mt-10">
    <div v-if="pending">
    <p>Loading...</p>
    </div>
    <div v-else>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="refresh"> Refresh Data</button>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <product-card :product="p" />
      </div>
    </div>


    </div>


    </div>
</div>
</template>
<script setup>
    useHead({
    title: "Nuxt Whisper | Products",
    meta: [{ name: "description", content: "List of products" }],
    })
    
    const { pending, data: products, refresh} = useFetch(
    "https://fakestoreapi.com/products",
    {
    lazy: false,
    }
    )
/*     // api استدعاء البيانات التى اريد عرضها فقط من ملف (object )
    const { pending, data: products} = useFetch(
    "https://fakestoreapi.com/products",
    {
    lazy: false,
    pick:["id", "image", "title"],
    }
    ) */

/*   // api استدعاء البيانات التى اريد عرضها فقط من ملف (array)
    const { pending, data: products} = useFetch(
    "https://fakestoreapi.com/products",
    {
    lazy: false,
    transform: (products) => {
        return products.map((product) => ({
            id: product.id,
            title: product.title,
            image: product.image
        }));
    }
    }
    ); */
</script>
<style lang="">
    
</style>