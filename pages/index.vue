<script setup lang="ts">
const title = ref("الصفحة الرئيسية");
const description = ref("My amazing site.");
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
    </Head>

    <Hero />
    <Creators />
    <Superpowers />
    <Features />
    <Learnmore />

    <Idea />
    <Partners />
  </div>
</template>
