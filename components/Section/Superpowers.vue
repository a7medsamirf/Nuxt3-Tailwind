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
    <section class="bg-white dark:bg-dark">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
          <div class="lg:col-span-5">
            <div class="relative">
              <img src="/img/Img_1.png" class="rounded-lg shadow-lg relative" alt="" />
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
          </div>
          <div class="lg:col-span-7">
            <div class="lg:ms-7">
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
