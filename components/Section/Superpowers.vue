<script setup>
const items = [
  { name: "Give equity to contributors" },
  { name: "Raise funds with tokens & NFTs" },
  { name: "Make decisions together" },
  { name: "Operate globally" },
];
</script>
<template>
  <div>

    <section class="bg-white dark:bg-dark ">
      <div class="container mx-auto ">
              <!-- text - start -->
              <h1
          class="flex justify-center items-center mb-4 text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight leading-none text-gray-800 dark:text-white relative">
          <img src="/_nuxt/img/gradient-Bg.png" class="img-gradient w-56 lg:w-auto absolute z-[-1] block top-11" alt=""> 
          {{ $t("features.title") }}
           
            </h1>
        <!-- text - end -->


        <div class="flex justify-center">
        <div class="grid grid-cols-2 items-center">
        
            <div class="relative">
              <img src="/img/Img_1.png" class="relative" alt="" />
              <div class="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                <a
                  class="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-950 text-orange-500"
                  href="/aboutus#!"
                  ><i
                    class="mdi mdi-play inline-flex items-center justify-center text-2xl"
                  ></i
                ></a>
              </div>
            </div>
   
          <div >
        
              <ul
                role="list"
                class="marker:text-primary-color list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <li
                  class="max-w-2xl tracking-tight leading-none text-xl font-normal text-gray-500 dark:text-gray-400"
                  v-for="(item, index) in items"
                  :key="index"
                >
                  {{ item.name }}
                </li>
              </ul>
    
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
