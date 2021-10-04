<template>
  <div>
    <Header/>
    <main class="layer inner">
      <div>
        <h1 class="layer-headline1 text-5xl flef justify-center" data-text="Service">制作について</h1>
      </div>
      <section>
        <ul class="breadcrumb">
          <li class="breadcrumbList">
            <nuxt-link to="/">HOME</nuxt-link>
          </li>
          <li class="breadcrumbList">
            <p>SERVICE</p>
          </li>
        </ul>
      </section>
      <section>
        <div class="layer-headline2 ">
          <h2 class="text-3xl bold p-2.5 bg-white inline-block">OFFERS</h2>
        </div>
        <div class="works-block p-2.5">
          <h3 class="works-block_headline md:text-2xl text-lg">コーディング / CMS構築</h3>
          <div class="works-block_text md:text-base text-sm p-4">
            <p>デザインカンプを元に、HTML・CSSなどを使用してブラウザ上に再現します。</p>
            <p>ブログやニュースなどの投稿更新機能や、JavaScriptを利用した動きのあるサイト、スマートフォン用サイトなど、様々ご対応いたします。</p>
            <p>既存サイトのWordPress移行やオリジナルテーマ作成・カスタマイズや、デザインデータをお持ちの方はコーディング・実装のみも可能です。</p>
            <ul class="list-hyphen">
              <li>ホームページ制作</li>
              <li>レスポンシブ対応</li>
              <li>WordPress実装・オリジナルテーマ作成</li>
              <li>コーディング代行</li>
            </ul>
            <p>etc...</p>
          </div>
          <div class="works-block_image"></div>
        </div>
        <div class="works-block p-2.5">
          <h3 class="works-block_headline md:text-2xl text-lg">ウェブデザイン</h3>
          <div class="works-block_text md:text-base text-sm p-4">
            <p>情報設計から構成案作成、デザインカンプまで一貫して制作を行います。</p>
            <p>キャンペーンサイトやランディングページ（LP）のような小規模制作から、企業や店舗様のホームページやブランドサイトなど中規模制作まで承ります。</p>
            <ul class="list-hyphen">
              <li>バナー</li>
              <li>ウェブサイト</li>
              <li>ウェブページ/ランディングページ</li>
            </ul>
            <p>etc...</p>
          </div>
          <div class="works-block_image"></div>
        </div>
        <div class="works-block p-2.5">
          <h3 class="works-block_headline md:text-2xl text-lg">その他</h3>
          <div class="works-block_text md:text-base text-sm p-4">
            <p>運用上必要な画像などの素材や、大小問わずウェブコンテンツ作成を承ります。</p>
            <p>店舗運営や、販促の際に使用する名刺やショップカード、パンフレットなど印刷物のデザインやロゴの作成なども承ります。</p>
            <p>制作サイトや既存サイトの保守・運用代行なども行っておりますので、お気軽にご相談ください。</p>
            <ul class="list-hyphen">
              <li>素材作成・写真編集</li>
              <li>ライティング</li>
              <li>サイト保守、運用代行</li>
              <li>名刺、ショップカード</li>
              <li>ロゴ作成</li>
            </ul>
            <p>etc...</p>
          </div>
          <div class="works-block_image"></div>
        </div>
      </section>
      <section>
        <div class="balloon flex justify-center">
          <div class="icons">
            <figure>
              <img src="~@/assets/images/mifa_logo.svg" alt="mifaより">
            </figure>
          </div>
          <div class="speech md:p-4 p-2 text-xs rounded">
            <p>記載外の項目につきましても、お手伝い出来ることがあるかもしれません。</p>
            <p>ぜひご相談ください。</p>
          </div>
        </div>
      </section>
    </main>
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
  }
</script>


<style scoped>
  body{
  }
</style>
