<script setup lang="ts"></script>

<template>
  <div>
    <section class="h-screen bg-white relative py-40 dark:bg-[url('/img/BGStars.png')] ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center relative z-10 lg:py-16 lg:px-12">
        <h1
          class="flex justify-center items-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white relative"
        >
        <img
            src="/img/gradient-Bg.png"
            class="img-gradient w-16 md:w-32 lg:w-48 absolute z-[-1] block top-10 "
            alt=""
          />
          {{ $t("HeroSection.title") }}
        </h1>
  
        <p
          class="mb-8 m-5 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          {{ $t("HeroSection.subtitle") }}
        </p>
        <div
          class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          <button
            type="button"
            class="inline-flex items-center text-sm font-semibold justify-center py-3 px-5 text-center rounded-lg text-white bg-gradient-to-b from-[#FFD600] to-[#FFB800] shadow-[0px_9px_44px_0px_#ffd60030]"
          >
            {{ $t("HeroSection.button") }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
