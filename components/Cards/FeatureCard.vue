<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String
})
</script>

<template>

    <div>
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <img  class="" :src="image" :alt="title" />
  <!--         <v-img
                  :src="require(`~/static/images/avatars/${author.img}`)"
                ></v-img>
 -->
        </div>

        <div>
          <h3 class="mb-2 text-lg font-semibold md:text-xl">{{$t('features.' + title)}}</h3>
          <p class="mb-2 text-gray-500">{{ subtitle }}</p>
        </div>
    </div>

</template>