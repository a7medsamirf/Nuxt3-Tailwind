<script setup>
 import imgAPI from '~/server/api/imgAPI'
 const IdeaData = ([
   {
    title: "Idea.Telegram",
    subtitle: "@Superdao",
    image: imgAPI.Socialimg[5],
    BgColor: 'bg-gradient-to-b from-[#FFD600] to-[#FFB800]'
},
{
    title: "Idea.Twitter",
    subtitle: "@superdao_co",
    image: imgAPI.Socialimg[2],
    BgColor: 'bg-gradient-to-b from-[#FFD600] to-[#FFB800]'

},
{
    title: "Idea.Email",
    subtitle: "hello@superdao.co",
    image: imgAPI.Socialimg[0],
    BgColor: 'bg-gradient-to-b from-[#FFD600] to-[#FFB800]'
},
]);
</script>
<template>
  <section class="Idea py-16 md:py-24 relative after:content-[url('img/Element/Element-4.png')] after:absolute after:inline-block after:h-full after:w-full">
    <div class="container mx-auto relative">
      <div class="section-title grid grid-cols-1 pb-10 text-center">
        <!-- text - start -->
        <h3
          class="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white ">
          <img src="/img/gradient-Bg.png" class="img-gradient w-56 lg:w-[400px] absolute z-[-1] block top-7" alt="">
          {{ $t("Idea.SectionTitle") }}

        </h3>

        <p class="m-5 text-lg font-medium text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" >
          {{ $t("Idea.SectionSubtitle") }}

        </p>
        <!-- text - end -->
      </div>


    
 
        <div class="flex justify-center">
        <div class="grid sm:grid-cols-2 xl:grid-cols-3 mt-10 gap-4">
            <div v-for="(idea, index) in IdeaData" :key="index" :class="[idea.BgColor, 'rounded-lg', 'p-4', 'relative']">
                <div class="flex ">
                    <div class="text-orange-500 rounded-xl flex align-middle justify-center items-center w-[52px] h-[52px] bg-[rgba(0,0,0,0.2)]">
                    <img  class="opacity-70 w-[30px] flex-shrink-0 " :src="idea.image" />
                    </div>
                    <div class="ms-3">
                    <h3 class="text-sm font-semibold text-dark ">
                   {{ $t(idea.title) }} 
                    </h3>
                    <p class="mt-2 text-base font-normal text-gray-700 dark:text-[#10151A]">
                      {{ idea.subtitle }}
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