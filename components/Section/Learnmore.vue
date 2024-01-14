<script setup>
  import imgAPI from '~/server/api/imgAPI'
  const LearnmoreData = ref([{
          title: "Learnmore.guide",
          subtitle: "Learnmore.Briefing",
          image: imgAPI.Learnmoreimg[0],
      },
      {
          title: "Learnmore.stories",
          subtitle: "Learnmore.largest",
          image: imgAPI.Learnmoreimg[1],

      },
      {
          title: "Learnmore.Directory",
          subtitle: "Learnmore.ecosystem",
          image: imgAPI.Learnmoreimg[2],
      },
  ]);
</script>
<template>
  <section class="Learnmore py-16 md:py-24 relative after:content-[url('img/Element/Element-5.png')] after:absolute after:inline-block after:h-full after:w-full">
    <div class="container mx-auto relative">
      <div class="section-title grid grid-cols-1 pb-10 text-center">
        <!-- text - start -->
        <h3 class="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white ">
          <img src="/img/gradient-Bg.png" class="img-gradient w-56 lg:w-[400px] absolute z-[-1] block top-7" alt="">
          {{ $t("Learnmore.SectionTitle") }}

        </h3>

        <!-- text - end -->
      </div>

 
        <div class="flex justify-center">
        <div class="grid sm:grid-cols-2 xl:grid-cols-3 mt-10 gap-4">
            <div v-for="(Learnmore, index) in LearnmoreData" :key="index" class="rounded-lg relative">
                <div class="bg-white border border-gray-200 rounded-lg  dark:bg-dark-card dark:border-dark-border w-[300px]">
                          <img alt="Office" :src="Learnmore.image" class="h-[180px] w-full object-cover" />

                          <div class="p-4 h-[120px]">
                              <a >
                                  <h3 class="text-lg font-semibold text-gray-800 dark:text-primary-color">
                                      {{ $t(Learnmore.title) }}
                                  </h3>
                              </a>

                              <p class="mt-2 text-base font-normal text-gray-700 dark:text-gray-300">
                                  {{ $t(Learnmore.subtitle) }}
                              </p>

                      </div>
                  </div>
                </div>
        </div>
        </div>




    </div>

  </section>

</template>
<style>

</style>