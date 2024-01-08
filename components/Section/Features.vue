<script setup>
  import imgAPI from '~/server/api/imgAPI'
  const FeatureData = [{
      title: "DeFi",
      subtitle: "Decentralize-governance",
      image: imgAPI.featureimg[0]
    },
    {
      title: "Investment",
      subtitle: "Scout-and-pick-together",
      image: imgAPI.featureimg[1]
    },
    {
      title: "Creators",
      subtitle: "Remove-middlemen",
      image: imgAPI.featureimg[2]
    },
    {
      title: "Metaverse",
      subtitle: "Build-virtual",
      image: imgAPI.featureimg[3]
    },
    {
      title: "Communities",
      subtitle: "Build-shared",
      image: imgAPI.featureimg[4]
    },
    {
      title: "Startups",
      subtitle: "Reward-early",
      image: imgAPI.featureimg[5]
    },
    {
      title: "Nonprofits",
      subtitle: "Raise-funds",
      image: imgAPI.featureimg[6]
    },
    {
      title: "Professionals",
      subtitle: "Form-freelancer",
      image: imgAPI.featureimg[7]
    },
    {
      title: "Corporations",
      subtitle: "Reinvent-loyalty",
      image: imgAPI.featureimg[8]
    },

  ];
</script>

<template>
  <div>
    <div class=" py-10 sm:py-8 lg:py-10">
  
        <!-- text - start -->
        <h1
          class="flex justify-center items-center mb-4 text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight leading-none text-gray-800 dark:text-white relative">
          <img src="/_nuxt/img/gradient-Bg.png" class="img-gradient w-56 lg:w-auto absolute z-[-1] block top-11" alt=""> 
          {{ $t("features.title") }}
           
            </h1>
        <!-- text - end -->
        <div class="flex justify-center py-10">
        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 ">

          <!-- feature - start -->
          <div class="gap-4 rounded-lg" v-for="(feature, index) in FeatureData" :key="index">
            <FeatureCard :image="feature.image" :feature="feature" :title="feature.title"
              :subtitle="feature.subtitle" />


          </div>
          <!-- feature - end -->


        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>


</style>