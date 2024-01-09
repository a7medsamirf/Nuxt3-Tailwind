<script setup>
  import imgAPI from '~/server/api/imgAPI'
  const localePath = useLocalePath();
  const SocialData = [{
      image: imgAPI.Socialimg[0],
      label: 'email'
    },
    {
      image: imgAPI.Socialimg[1],
      label: 'instagram'
    },
    {
      image: imgAPI.Socialimg[2],
      label: 'twitter'
    },
    {
      image: imgAPI.Socialimg[3],
      label: 'facebook'
    },
    {
      image: imgAPI.Socialimg[4],
      label: 'linkedin'
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
  <footer class="bg-gradient-to-r from-[#FFD600] to-[#FFB800]">
    <div class="py-[25px] px-0 border-t border-slate-800">
    <div class="container mx-auto relative">
      <div class="flex justify-around ">
        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center ">
          <div class="text-center flex justify-center md:justify-between">
            <img src="/Logo-Full-Black.png" class="flex-none" alt="" />
          </div>


          <!-- End Col -->


     <!--      <ul class="text-center">
            <li class="inline-block relative pe-8  dark:before:text-gray-600" v-for="(link, index) in LinksData"
              :key="index">
              <NuxtLink :to="localePath(link.to)" class="inline-flex text-sm font-semibold text-dark">
                {{ $t(link.name) }}
              </NuxtLink>
            </li>
          </ul> -->
          <!-- End Col -->
          <p class="mb-0 text-sm font-semibold text-dark">© 2024 Superdao. Development with <i class="mdi mdi-heart text-red-600"></i> by 
                        <a class="text-reset" href="https://shreethemes.in/" target="_blank">MedCoder</a>.</p>

          <!-- Social Brands -->
          <div class="md:text-end ">
            <a class="h-8 w-8 mx-1 cursor-pointer inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-300 hover:text-white"
             v-for="(social, index) in SocialData "
              :key="index" target="_blank">
              <img class="" :src="social.image" />
            </a>

          </div>
          <!-- End Social Brands -->
        </div>
        <!-- End Grid -->
      </div>
    </div>
  </div>
  </footer>
</template>