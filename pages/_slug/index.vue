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
      <section class="inner md:p-2.5 p-1">
        <div class="post-contents" v-html="contents"></div>
        <!-- 前後の記事 -->
        <ul class="post-sibling grid grid-cols-2 text-sm">
          <li v-if="prev">
            <a :href="prev.id" rel="prev" class="post-sibling_paging _prev p-1.5">{{ prev.title }}</a>
          </li>
          <li v-if="next">
            <a :href="next.id" rel="next" class="post-sibling_paging _next p-1.5">{{ next.title }}</a>
          </li>
        </ul>
      </section>
    </article>
    <Footer/>
  </div>
</template>
<script>
  import axios from 'axios';
  import cheerio from 'cheerio';
  import hljs from 'highlight.js';
  import Header from "@/components/SiteHeader.vue";
  import Footer from "@/components/SiteFooter.vue";
  import 'highlight.js/styles/github-dark.css';
  // シンタックスハイライトのテーマを変更したい時はここで→→→ https://highlightjs.org/static/demo/

export default {
  components:{
    Header,
    Footer,
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(
      `https://mifatokyo.microcms.io/api/v1/post/${params.slug}`,
        {
        headers: {
          'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75'
        },
      });
      const links = await axios.get(
        `https://mifatokyo.microcms.io/api/v1/post/?limit=100&fields=id,title,`,
        {
          headers: { 'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75' },
        }
      );
      const $ = cheerio.load(data.contents);
      $('pre code').each((_, elm) => {
        const res = hljs.highlightAuto($(elm).text());
        $(elm).html(res.value);
        $(elm).addClass('hljs');
      });
      const index = links.data.contents.findIndex((content) => content.id === params.slug);
      const prevLink = links.data.contents[index - 1];
      const nextLink = links.data.contents[index + 1];
      return {
        ...data,
        contents: $.html(),
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
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://blog.microcms.io/${this.id}/`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.ogimage && this.ogimage.url,
        },
      ],
    };
  },
}
</script>
