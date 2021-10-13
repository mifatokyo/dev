<template>
  <div>
    <Header/>
    <main class="layer inner">
      <div>
        <h1 class="layer-headline1 text-5xl flef justify-center" data-text="Works">納品事例</h1>
      </div>
      <section>
        <ul class="breadcrumb">
          <li class="breadcrumbList">
            <nuxt-link to="/">HOME</nuxt-link>
          </li>
          <li class="breadcrumbList">
            <p>WORKS</p>
          </li>
        </ul>
      </section>
      <section>
        <div class="layer-headline2 ">
          <h2 class="text-3xl bold p-2.5 bg-white inline-block">WEB SITE</h2>
        </div>
        <Works/>
      </section>
      <section>
        <div class="balloon flex justify-center">
          <div class="icons">
            <figure>
              <img src="~@/assets/images/mifa_logo.svg" alt="mifaより">
            </figure>
          </div>
          <div class="speech md:p-4 p-2 text-xs rounded">
            <p>こちらでは許可を頂いた制作物のみ掲載しています</p>
            <p>明示は控えますが、掲載以外で過去携わった案件なども少しお話しできますので、お気軽にご連絡ください。</p>
          </div>
        </div>
        <nuxt-link to="/#contact" class="button trans">
          <span>ご相談はこちらから</span><em></em>
        </nuxt-link>
      </section>
    </main>
    <Footer/>
  </div>
</template>


<script>
  import Header from "@/components/SiteHeader.vue";
  import Footer from "@/components/SiteFooter.vue";
  import Works from '@/components/Works.vue';

  export default {
    components: {
			Header,
			Footer,
      Works
		},
    head: {
      title: 'mifaの納品実績',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'mifaが納品を差し上げた実績のご紹介です。業界問わず様々なお客様のサイトに携わらせていただきました。掲載街のものも様々ございますので、お気軽にご連絡ください。'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:'実績,納品,業界,コーディング,代行,ホームページ,制作,WordPress,ワードプレス,構築,html,css,javascript,php,デザイン,ウェブ,ランディングページ,LP,店舗,企業,ブランド,サイト,レスポンシブ,バナー'
        }
      ],
    },
  }
</script>
