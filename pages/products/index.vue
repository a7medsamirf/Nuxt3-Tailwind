<script setup>
const data = await fetch('https://dummyjson.com/products',{lazy: false,})
                     .then(res => res.json())
                     .then(data => data.products)  // json data Name

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
<template>

<section class="py-16 md:py-24 relative">
    <div class="container mx-auto relative">
      <div class="section-title grid grid-cols-1 pb-10 text-center">
        <!-- text - start -->
        <h3 class="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white ">
          <img src="/img/gradient-Bg.png" class="img-gradient w-56 lg:w-[400px] absolute z-[-1] block top-7" alt="">
       منتجاتنا
        </h3>
        <!-- text - end -->
      </div>

    
        <div class="grid sm:grid-cols-2 xl:grid-cols-4 mt-10 gap-4">
            <div v-for="(product, index) in data" :key="index" class="product rounded-lg relative">
              <product-card :product="product" />
                </div>
        </div>



    </div>

  </section>


</template>

<style lang=""></style>
