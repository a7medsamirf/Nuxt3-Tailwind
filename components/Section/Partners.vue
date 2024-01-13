<script setup>
 import imgAPI from '~/server/api/imgAPI'
 const PartnerData = [ 
   {image: imgAPI.Partnerimg[0]},
   {image: imgAPI.Partnerimg[1]},
   {image: imgAPI.Partnerimg[2]},
   {image: imgAPI.Partnerimg[3]},
   {image: imgAPI.Partnerimg[4]},
   {image: imgAPI.Partnerimg[5]},
 ]
</script>

<template>
  <section class="Partners py-16 md:py-24 relative">
    <div class="container mx-auto relative">
      <div class="section-title grid grid-cols-1 pb-10 text-center">
        <!-- text - start -->
        <h3
          class="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white ">
          <img src="/img/gradient-Bg.png" class="img-gradient w-56 lg:w-auto absolute z-[-1] block top-5" alt="">
          {{ $t("partners.title") }}

        </h3>
        <!-- text - end -->
      </div>

      <div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
        <div class="mx-auto py-4" v-for="(partner, index) in PartnerData" :key="index">
        <img  class="h-6" :src="partner.image" :alt="title" />
        </div>

      </div>


    </div>

  </section>

</template>

<style lang="SCSS" scoped>

</style>