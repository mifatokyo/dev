<template>
  <div class="wrapper">
    <Header/>
    <article class="main">
      <section class="post-header">
        <img :src="content.thumbnail.url" class="post-header_bg">
        <div class="inner _post grid md:grid-cols-2 grid-cols-1 ">
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
      <div class="inner">
        <!-- <Breadcrumb :category="category" /> -->

      </div>
      <section class="inner _post md:p-2.5 p-1 bg-white">
        <!-- <Toc :id="id" :toc="toc" /> -->
        <Toc :toc="toc" />
        <div class="post-contents" v-html="contents"></div>
        <!-- ページャー -->
        <!-- <ul class="post-sibling grid md:grid-cols-2 grid-cols-1 text-sm">
          <li v-if="prev" class="prev">
            <a :href="prev.id" rel="prev" class="post-sibling_paging _prev p-1.5 link--arrowed">
              <p>{{ prev.title }}</p>
              <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g fill="none" stroke="#222" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                  <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                  <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                </g>
              </svg>
            </a>
          </li>
          <li v-if="next" class="next">
            <a :href="next.id" rel="next" class="post-sibling_paging _next p-1.5 link--arrowed">
              <p>{{ next.title }}</p>
              <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g fill="none" stroke="#222" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                  <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                  <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                </g>
              </svg>
            </a>
          </li>
        </ul> -->
        <!-- // ページャー -->
      </section>
    </article>
    <!-- 吹き出し -->
    <aside>
      <div class="balloon flex justify-center">
        <div class="icons">
          <figure>
            <img src="~@/assets/images/mifa_logo.svg" alt="mifaより">
          </figure>
        </div>
        <div class="speech md:p-4 p-2 text-xs rounded">
          <p>最後までお読み頂きありがとうございました。</p>
          <p>記事内で何かお気づきの点等ございましたら、下記ボタンよりご連絡ください。</p>
        </div>
      </div>
      <nuxt-link to="/#contact" class="button trans">
        <span>CONTACT</span><em></em>
      </nuxt-link>
    </aside>
    <!-- // 吹き出し -->
    <Footer/>
  </div>
</template>
<script>
  import axios from 'axios';
  import cheerio from 'cheerio';
  import hljs from 'highlight.js';
  import Header from "@/components/SiteHeader.vue";
  import Footer from "@/components/SiteFooter.vue";
  import Toc from "@/components/Toc.vue";
  import 'highlight.js/styles/github-dark.css';
  // シンタックスハイライトのテーマを変更したい時はここで→→→ https://highlightjs.org/static/demo/

// そのファイルのデフォルトとして後ろに続くものをexportするよ
export default {
  components:{
    Header,
    Footer,
    Toc,
  },
  // 非同期通信モードで取得するデータの記述
  async asyncData({ params, error }) {
    try {

      const { data } = await axios.get(
      `https://mifatokyo.microcms.io/api/v1/post/${params.slug}`,
        {
        headers: {
          'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75'
        },
        // endpoint: 'post',
        // contentId: params.slug,
        // queries: {
        //   draftKey: $preview?.draftKey
        // },
      });
      const links = await axios.get(
        `https://mifatokyo.microcms.io/api/v1/post/?limit=100&fields=id,title,`,
        {
          headers: { 'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75' },
        }
      );
      const index = links.data.contents.findIndex((content) => content.id === params.slug)
      const prevLink = links.data.contents[index - 1];
      const nextLink = links.data.contents[index + 1];
      const $ = cheerio.load(data.contents);
      // HTMLパーサーのcheerioを使って、h1~h3を抽出
      const headings = $('h1, h2, h3').toArray();
      const toc = headings.map((d) => {
        return {
          // 配列形式で取得したh1~h3を、整形してテキスト・ID・タグ名の配列に書き換える
          text: d.children[0].data,
          id: d.attribs.id,
          name: d.name,
        };
      });
      $('pre code').each((_, elm) => {
        const res = hljs.highlightAuto($(elm).text());
        $(elm).html(res.value);
        $(elm).addClass('hljs');
      });
      return {
        ...data,
        contents: $.html(),
        content: data,
        prev: prevLink,
        next: nextLink,
        toc,
      }
    } catch (err) {
      error({
        errorCode: 404,
      });
    }
  },
  data() {
    return {
      publishedAt: '',
      ogimage: null,
    };
  },

  head() {
    return {
      title: this.title  ,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://mifa.tokyo/blog/${this.id}/`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.ogimage && this.ogimage.url,
        },
      ],
      // link: [
      //   {
      //     rel: "canonical",
      //     href: `https://mifa.tokyo${this.$route.path}`,
      //   },
      // ],
    };
  },
}
</script>
