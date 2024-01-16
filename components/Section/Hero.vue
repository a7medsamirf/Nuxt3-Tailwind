<script setup lang="ts"></script>
<template>
  <section
    id="hero"
    class="relative md:h-screen grid content-center bg-white dark:bg-[url('/img/BGStars.png')] py-36"
  >
    <div
      class="py-8 px-4 mx-auto max-w-screen-xl text-center relative z-10 lg:py-16 lg:px-12 self-center"
    >
      <h1
        class="flex justify-center items-center mb-4 text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-800 dark:text-white relative"
      >
        <img
          src="/img/gradient-Bg.png"
          class="img-gradient w-auto absolute z-[-1] block top-6 md:top-14"
          alt=""
        />
        {{ $t("Hero.SectionTitle") }}
      </h1>

      <p
        class="mb-8 m-6 text-lg font-medium text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        {{ $t("Hero.SectionSubtitle") }}
      </p>
      <div
        class="flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
      >
        <button
          type="button"
          class="inline-flex items-center text-sm font-semibold justify-center py-3 px-5 text-center rounded-lg text-dark bg-gradient-to-b from-[#FFD600] to-[#FFB800] shadow-[0px_9px_44px_0px_#ffd60030]"
        >
          {{ $t("Hero.button") }}
        </button>
      </div>
    </div>
  </section>
</template>
