<script setup>
const SuperpowerData = [
  { title: "Superpower.Give-equity" },
  { title: "Superpower.Raise-funds" },
  { title: "Superpower.Make-decisions" },
  { title: "Superpower.Operate-globally" },
];
</script>
<template>
  <section
    class="py-16 md:py-24 relative after:content-[url('img/Element/Element-1.png')] after:absolute after:inline-block after:h-full after:w-full"
  >
    <div class="container mx-auto relative">
      <div class="section-title grid grid-cols-1 pb-10 text-center">
        <!-- text - start -->
        <h3
          class="flex justify-center items-center mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white relative"
        >
          <img
            src="/img/gradient-Bg.png"
            class="img-gradient w-56 lg:w-[400px] absolute z-[-1] block top-7"
            alt=""
          />
          {{ $t("Superpower.SectionTitle") }}
        </h3>
        <!-- text - end -->
      </div>

      <div class="flex justify-center">
        <div
          class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-10"
        >
          <div class="relative">
            <img class="w-[400px]" src="/img/Img_1.png" alt="" />
          </div>
          <div class="relative">
            <ul
              class="marker:text-primary-color list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <li
                class="max-w-2xl text-xl font-normal text-gray-500 dark:text-gray-400"
                v-for="(Superpower, index) in SuperpowerData"
                :key="index"
              >
                {{ $t(Superpower.title) }}
              </li>
            </ul>
          </div>
        </div>
        <!--end grid-->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
