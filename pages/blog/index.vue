<template>
  <div>
    <Header/>
    <main class="layer inner">
      <div>
        <h1 class="layer-headline1 text-5xl flef justify-center" data-text="Blog">ブログ</h1>
      </div>
      <section>
        <ul class="breadcrumb">
          <li class="breadcrumbList">
            <nuxt-link to="/">HOME</nuxt-link>
          </li>
          <li class="breadcrumbList">
            <p>BLOG</p>
          </li>
        </ul>
      </section>
      <ul class="blog-list grid md:gap-5 gap-10 grid-cols-1 md:grid-cols-3 p-4">
        <li v-for="content in contents" :key="content.id" class="blog-item">
          <nuxt-link :to="`/blog/${content.id}/`">
            <div class="post-image">
              <span class="text-white text-xs font-semibold category sample">{{ content.category.name }}</span>
              <picture>
                <!-- WebP用画像 -->
                <source :srcset="content.thumbnail.url + '?fm=webp'" type="image/webp">
                <!-- 従来画像 -->
                <img :src="content.thumbnail.url">
              </picture>
            </div>
            <div class="post-text">
              <h2 class="title">{{ content.title }}</h2>
              <time class="text-gray-400 md:text-sm text-xs font-semibold time">{{ new Date(content.datepick).toLocaleDateString() }}</time>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <section>
        <div class="balloon flex justify-center">
          <div class="icons">
            <figure>
              <img src="~@/assets/images/mifa_logo.svg" alt="mifaより">
            </figure>
          </div>
          <div class="speech md:p-4 p-2 text-xs rounded">
            <p>制作や、生活の中での気づきなどを書き留めています。</p>
            <p>何か気になる点があれば、お気軽にご連絡ください。</p>
          </div>
        </div>
      </section>
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
        'https://mifatokyo.microcms.io/api/v1/post',
        {
          headers: { 'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75' }
        }
      )
      return data
    },
    head: {
      title: 'mifaのブログ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'mifaのブログです。制作に際してのTipsをはじめ様々な情報発信・共有しております。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:'ブログ,blog,コーディング,代行,ホームページ,制作,WordPress,ワードプレス,構築,html,css,javascript,php,デザイン,ウェブ,ランディングページ,LP,店舗,企業,ブランド,サイト,レスポンシブ,バナー'
        }
      ],
      // link: [
      //   {
      //     rel: "canonical",
      //     href: `https://mifa.tokyo/blog/`,
      //   },
      // ],
    },
  }
</script>
