<template>
  <div>
    <Header/>
    <article class="main">
      <section class="post-header">
        <img :src="content.thumbnail.url" class="post-header_bg">
        <div class="inner grid md:grid-cols-2 grid-cols-1 ">
          <div class="flex items-center">
            <div class="post-header_text">
              <h1 class="title p-1 md:text-3xl text-xl">{{ content.title }}</h1>
              <time class="time p-1">
                <b class=" text-gray-600">Date : {{ new Date(content.datepick).toLocaleDateString() }}</b>
              </time>
            </div>
          </div>
          <div class="post-header_thmbnail">
            <img :src="content.thumbnail.url" :alt="content.title" class="mra">
          </div>
        </div>
      </section>
      <!-- <p class="publishedAt">{{ publishedAt }}</p> -->
      <div class="inner">
      <!-- <Breadcrumb :category="category" /> -->
      </div>
      <section class="inner p-1">
        <div class="post-contents" v-html="content.contents"></div>
        <!-- 前後の記事 -->
        <ul class="post-sibling">
          <li v-if="prev">
            <a :href="prev.id" rel="prev">{{ prev.title }}</a>
          </li>
          <li v-if="next">
            <a :href="next.id" rel="next">{{ next.title }}</a>
          </li>
        </ul>
      </section>
    </article>
    <Footer/>
  </div>
</template>
<script>
  import axios from 'axios';
  import Header from "@/components/SiteHeader.vue";
  import Footer from "@/components/SiteFooter.vue";
  // import Prism from '~/plugins/prism'

export default {
  components:{
    Header,
    Footer
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(
        `https://mifatokyo.microcms.io/api/v1/post/${params.slug}`,
         {
        headers: { 'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75' },
      });
      const links = await axios.get(
        `https://mifatokyo.microcms.io/api/v1/post/?limit=100&fields=id,title,`,
        {
          headers: { 'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75' },
        }
      );
      const index = links.data.contents.findIndex((content) => content.id === params.slug);
      const prevLink = links.data.contents[index - 1];
      const nextLink = links.data.contents[index + 1];
      return {
        content: data,
        prev: prevLink,
        next: nextLink,
      }
    } catch (err) {
      error({
        errorCode: 404,
      });
    }
  },
  // async asyncData({ params }) {
  //   const { data } = await axios.get(
  //     `https://mifatokyo.microcms.io/api/v1/post/${params.slug}`,
  //     {
  //       headers: { 'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75' }
  //     }
  //   )
  //   return{
  //     content: data
  //   }
  // },

  // mounted() {
  //   Prism.highlightAll()
  // },
}
</script>
