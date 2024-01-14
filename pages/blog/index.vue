<script>
export default {
    async asyncData({ $content, app, error}) {
      const defaultLocale = app.i18n.locale;
      const blogs = await $content(`${defaultLocale}/blog`)
           /*.only(['title', 'description', 'img', 'slug'])*/ // لعرض بعض البيانات الخاصه بالمقالة
        /* .where({ tags: { $containsAny: ['burger'] } }) */ // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
        .sortBy('createdAt', 'desc')
        .fetch()
        /*.limit(5)*/ // استدعاء اخر 5 مقالات
        .catch(() => {
          error({ statusCode: 404, message: 'Page not found' })
        })
         .only(['name', 'slug'])
         .fetch()
  
      return {
        blogs: blogs.map(blog => ({...blog, path: blog.path.replace(`/${defaultLocale}`, ''),})),
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    },

  }
</script>
<template>
    <div class="blog-wrap">

      <div class="inner py-16">
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <v-row>
                <v-col v-for="blog in blogs" :key="blog.slug"
                        sm="12"
                        md="6"
                >
 
                  <v-card
                     outlined
                     flat
                  >
  <!--                  <NuxtLink  :to="{ name: 'blog-slug', params: { slug: article.slug } }">-->
  
                    <NuxtLink :to="localePath(blog.path)">
                      <div class="blog-img">
                        <v-img
                          v-if="blog.img"
                          :src="require(`~/static/images/blog/${blog.img}`)"
                          :alt="blog.alt"
                          height="250"
                        ></v-img>
         
                      </div>
                    </NuxtLink>
                    <div class="post-content pa-5">
                      <v-card-text class="py-1 pa-0">
                        <span class="blog-Date"> <v-icon small  color="primary">mdi-clock-outline</v-icon> {{ formatDate(blog.updatedAt) }}</span>
                      </v-card-text>
                      <NuxtLink :to="localePath(blog.path)">
                        <v-card-title class="py-2 pa-0 font-weight-bold">{{ blog.title }}</v-card-title>
                      </NuxtLink>
                      <v-card-text class="py-1 pa-0 "><p>{{ blog.description }}</p></v-card-text>
  
                      <v-card-actions class="d-flex justify-space-between dense py-2 pa-0">
                        <v-btn :to="localePath(blog.path)"  large color="primary"
                               class="button figs-btn pa-5 white--text">
                          Read More
                          <v-icon right small>mdi-arrow-right-thick</v-icon>
                        </v-btn>
  
                      </v-card-actions>
                    </div>
                  </v-card>
  
                </v-col>
  
  
              </v-row>
            </v-col>

          </v-row>
  
  
        </v-container>
      </div>
  
    </div>
  </template>
