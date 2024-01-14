<script setup lang="ts">
const localPath = useLocalePath();
const title = ref("Hello World");
const description = ref("My amazing site.");
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
    </Head>

    <Hero />

    <Superpowers />
    <Features />

    <Learnmore />
    <Idea />
    <Partners />
<!-- 
    <Title
          :head="$t('contacts.Get-In-Touch')"
          :desc="$t('contacts.Send-Us-Message')"
          align="center"
          color="primary"
        /> -->

<!--     <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        <div
          class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
          <img
            class="w-full h-auto rounded-t-xl"
            src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
            alt="Image Description"
          />
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">Card title</h3>
            <p class="mt-1 text-gray-500 dark:text-gray-400">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <p class="mt-5 text-xs text-gray-500 dark:text-gray-500">
              Last updated 5 mins ago
            </p>
          </div>
        </div>
        <div class="rounded-md flex items-center justify-center">
          <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
            <div class="flex items-center gap-4">
              <img
                alt="Developer"
                src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                class="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h3 class="text-lg font-medium text-white">Claire Mac</h3>

                <div class="flow-root">
                  <ul class="-m-1 flex flex-wrap">
                    <li class="p-1 leading-none">
                      <a href="#" class="text-xs font-medium text-gray-300"> Twitter </a>
                    </li>

                    <li class="p-1 leading-none">
                      <a href="#" class="text-xs font-medium text-gray-300"> GitHub </a>
                    </li>

                    <li class="p-1 leading-none">
                      <a href="#" class="text-xs font-medium text-gray-300">Website</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul class="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600 hover:transition hover:duration-700 hover:ease-in-out transition duration-700 ease-in-out"
                >
                  <strong class="font-medium text-white">Project A</strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    consequuntur deleniti, unde ab ut in!
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                >
                  <strong class="font-medium text-white">Project B</strong>

                  <p class="mt-1 text-xs font-medium text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                    cumque saepe sit.
                  </p>
                </a>
              </li>
            </ul>
          </article>
        </div>
        <div
          class="bg-green-400 text-cyan-50 rounded-md flex items-center justify-center p-4"
        >
          3
        </div>
        <div
          class="bg-orange-900 text-cyan-50 rounded-md flex items-center justify-center p-4"
        >
          4
        </div>
        <div
          class="bg-green-600 text-cyan-50 rounded-md flex items-center justify-center p-4"
        >
          5
        </div>
      </div>
    </div> -->
  </div>
</template>
