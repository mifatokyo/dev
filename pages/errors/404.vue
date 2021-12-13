<template>
  <div class="wrapper">
    <Header/>
    <section class="errors text-center section md:my-32 my-0">
      <h1 class="title leading-none">404<span class="block tracking-tight">PAGE NOT FOUND</span></h1>
      <div class="message md:my-16 my-8 p-2">
        <p>ページが見つかりませんでした。</p>
        <p>URLに間違いがないかご確認いただくか、ナビゲーションより移動してください。</p>
      </div>
      <nuxt-link to="/" class="button trans">
        <span>BACK TO TOP</span><em></em>
      </nuxt-link>
    </section>
    <Footer/>
  </div>
</template>

<script>
  import Header from "@/components/SiteHeader.vue";
  import Footer from "@/components/SiteFooter.vue";

  export default {
    components: {
			Header,
			Footer,
		},
        props: {
      error: {
        type: Object,
        default: null
      }
    },
    head: {
      title: 'ページが見つかりません',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ページが見つかりません。URLをご確認いただくか、ナビゲーションから移動してください。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:'コーディング,代行,ホームページ,制作,WordPress,ワードプレス,構築,html,css,javascript,php,デザイン,ウェブ,ランディングページ,LP,店舗,企業,ブランド,サイト,レスポンシブ,バナー,web ,homepage,design,ウェブデザイナー'
        }
      ],
      link: [
        {
          rel: "canonical",
          href: `https://mifa.tokyo/service/`,
        },
      ],
    },

  }
</script>
