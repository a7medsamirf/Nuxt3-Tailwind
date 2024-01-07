<script setup>
import imgAPI from '~/public/img/imgAPI'
const FeatureData = [
  { title: "DeFi", subtitle: "Decentralize governance", image: imgAPI.featureimg[3]},
  { title: "Investment", subtitle: "Decentralize governance", image: imgAPI.featureimg[3]},
  { title: "Creators", subtitle: "Decentralize governance", image: imgAPI.featureimg[3]},
  { title: "DeFi", subtitle: "Decentralize governance", image: imgAPI.featureimg[3]},
  { title: "DeFi", subtitle: "Decentralize governance", image: imgAPI.featureimg[3]},
  { title: "DeFi", subtitle: "Decentralize governance", image: imgAPI.featureimg[3]},
];
</script>

<template>
    <div>
        <div class=" py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16 relative">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Change every industry
      
        <img
            src="/img/gradient-Bg.png"
            class="img-gradient w-auto absolute z-[-1] block top-14"
            alt=""
          />
      </h2>

    </div>
    <!-- text - end -->

    <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">

      <!-- feature - start -->
      <div class="flex gap-4 md:gap-6 border border-gray-200 rounded-lg"
       v-for="(feature, index) in FeatureData" :key="index">
          <FeatureCard 
            :image="feature.image"
            :feature="feature"
            :title="feature.title"
            :subtitle="feature.subtitle"
           />


      </div>
      <!-- feature - end -->


    </div>
  </div>
</div>
    </div>
</template>

<style lang="scss" scoped>


</style>