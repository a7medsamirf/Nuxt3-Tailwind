<script setup>
import imgAPI from "~/server/api/imgAPI";
const CreatorData = ref([
  {
    title: "Creators.Formations",
    subtitle: "Creators.TemplateBased",
    image: imgAPI.Creatorimg[0],
  },
  {
    title: "Creators.StartePack",
    subtitle: "Creators.MemberDirectory",
    image: imgAPI.Creatorimg[1],
  },
  {
    title: "Creators.AppEcosystem",
    subtitle: "Creators.ThirdParty",
    image: imgAPI.Creatorimg[2],
  },
]);
</script>

<template>
  <section
    id="Creators"
    class="pb-16 md:pb-24 relative after:content-[url('img/Element/Element-2.png')] after:absolute after:z-n1 after:bottom-0 after:left-0"
  >
    <div class="container mx-auto relative">
      <div class="section-title grid grid-cols-1 pb-10 text-center">
        <!-- text - start -->
        <h3
          class="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white"
        >
          <img
            src="/img/gradient-Bg.png"
            class="img-gradient w-56 lg:w-[400px] absolute z-[-1] block top-7"
            alt=""
          />
          {{ $t("Creators.SectionTitle") }}
        </h3>
        <!-- text - end -->
      </div>
      <div class="flex justify-center">
        <div class="grid sm:grid-cols-2 xl:grid-cols-3 mt-10 gap-4">
          <!-- Creators - start -->
          <div
            v-for="(Creator, index) in CreatorData"
            :key="index"
            class="rounded-lg relative"
          >
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12"
            >
              <img class="" :src="Creator.image" />
            </div>

            <div class="">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-primary-color">
                {{ $t(Creator.title) }}
              </h3>
              <p
                class="mt-2 text-base font-normal text-gray-700 dark:text-gray-400 w-[250px]"
              >
                {{ $t(Creator.subtitle) }}
              </p>
            </div>
          </div>

          <!-- Creators - end -->
        </div>
      </div>
    </div>
  </section>
</template>
