<template>
  <div>
    <Header/>
    <main class="layer inner">
      <div>
        <h1 class="layer-headline1 text-5xl flef justify-center" data-text="Blog">ブログ</h1>
      </div>
      <ul class="blog-list grid md:gap-5 gap-10 grid-cols-1 md:grid-cols-3 p-4">
        <li v-for="content in contents" :key="content.id" class="blog-item">
          <nuxt-link :to="`/${content.id}`">
            <div class="post-image">
              <span class="text-white text-xs font-semibold category sample">{{ content.categories }}</span>
              <img :src="content.thumbnail.url" alt="">
            </div>
            <div class="post-text">
              <h2 class="title">{{ content.title }}</h2>
              <time class="text-gray-400 md:text-sm text-xs font-semibold time">{{ new Date(content.datepick).toLocaleDateString() }}</time>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import axios from 'axios'
  import Header from "@/components/SiteHeader.vue";
  import Footer from "@/components/SiteFooter.vue";
  export default {
    components:{
      Header,
      Footer
    },
      async asyncData() {
        const { data } = await axios.get(
          // your-service-id部分は自分のサービスidに置き換えてください
          'https://mifatokyo.microcms.io/api/v1/post',
          {
            // your-api-key部分は自分のapi-keyに置き換えてください
            headers: { 'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75' }
          }
        )
        return data
      },
  }
</script>
