<script setup>
  import imgAPI from '~/server/api/imgAPI'
  const localePath = useLocalePath();
  const SocialData = [{
      image: imgAPI.Socialimg[0]
    },
    {
      image: imgAPI.Socialimg[1]
    },
    {
      image: imgAPI.Socialimg[2]
    }
  ];
  const LinksData = [{
      name: "nav.Roadmapclub",
      to: "/"
    },
    {
      name: "nav.About",
      to: "/"
    },
    {
      name: "nav.Jobs",
      to: "/"
    },
  ]
</script>

<template>
  <footer class="w-full py-4 px-4 sm:px-6 lg:px-8 mx-auto bg-gradient-to-r from-[#FFD600] to-[#FFB800]">
    <div class="container mx-auto ">
      <div class="flex justify-around ">
        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center ">
          <div class="text-center flex justify-center md:justify-between">
            <img src="/Logo-Full-Black.png" class="flex-none" alt="" />
          </div>
       

          <!-- End Col -->


          <ul class="text-center">
            <li class="inline-block relative pe-8  dark:before:text-gray-600" v-for="(link, index) in LinksData"
              :key="index">
              <NuxtLink :to="localePath(link.to)" class="inline-flex text-sm font-semibold text-dark">
                {{ $t(link.name) }}
              </NuxtLink>
            </li>
          </ul>
          <!-- End Col -->

          <!-- Social Brands -->
          <div class="md:text-end space-x-2">
            <a class="w-5 h-5 inline-flex justify-center items-center" v-for="(social, index) in SocialData "
              :key="index">
              <img class="" :src="social.image" />
            </a>



          </div>
          <!-- End Social Brands -->
        </div>
        <!-- End Grid -->
      </div>
    </div>
  </footer>
</template>