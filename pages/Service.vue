<template>
  <div>
    <Header/>
    <main class="layer inner">
      <div>
        <h1 class="layer-headline1 text-5xl flef justify-center" data-text="Service">制作について</h1>
      </div>
      <section>
        <div class="layer-headline2 ">
          <h2 class="text-3xl bold p-2.5 bg-white inline-block">CONTENTS</h2>
        </div>
        <div class="works-block p-2.5">
          <h3 class="works-block_headline md:text-2xl text-lg">コーディング / CMS構築</h3>
          <div class="works-block_text p-4">
            <p>デザインカンプを元に、HTML・CSSなどを使用してコーディングを行い、各デバイスでも正常に情報が読み取れるようブラウザ上に再現します。</p>
            <p>『ブログやニュースなど投稿機能が欲しい』というお客様には、CMS付きのウェブサイトをご提供いたします。</p>
            <p>既存サイトのWordPress移行やオリジナルテーマ作成・カスタマイズも承ります。</p>
            <ul class="list-hyphen">
              <li>HTMLコーディング</li>
              <li>WordPress実装・オリジナルテーマ作成</li>
              <li>ホームページ制作</li>
            </ul>
          </div>
          <div class="works-block_image"></div>
        </div>
        <div class="works-block p-2.5">
          <h3 class="works-block_headline md:text-2xl text-lg">ウェブデザイン</h3>
          <div class="works-block_text p-4">
            <p>情報設計から構成案作成、デザインカンプまで一貫して制作を行います。</p>
            <p>キャンペーンサイトやランディングページ（LP）のような小規模制作から、企業や店舗様のホームページやブランドサイトなど中規模制作まで承ります。</p>
            <ul class="list-hyphen">
              <li>バナーデザイン</li>
              <li>ウェブサイト、ページデザイン</li>
            </ul>
          </div>
          <div class="works-block_image"></div>
        </div>
        <div class="works-block p-2.5">
          <h3 class="works-block_headline md:text-2xl text-lg">グラフィックデザイン</h3>
          <div class="works-block_text p-4">
            <p>企業・店舗・個人様が様々な場面で必要になる名刺やショップカード、パンフレットなど印刷物のデザインや、ロゴの作成などを承ります。</p>
            <ul class="list-hyphen">
              <li>名刺、ショップカード</li>
              <li>パンフレット</li>
              <li>会報誌</li>
              <li>ロゴ作成</li>
            </ul>
          </div>
          <div class="works-block_image"></div>
        </div>
        <div class="works-block p-2.5">
          <h3 class="works-block_headline md:text-2xl text-lg">その他</h3>
          <div class="works-block_text p-4">
            <p>商品・人物写真の撮影や動画制作・編集やライティングなど、運用上必要な素材など大小問わず、ウェブコンテンツ作成を承ります。</p>
            <p>既存サイトの保守・運用代行なども行っておりますので、お気軽にご相談ください。</p>
            <ul class="list-hyphen">
              <li>写真素材（作成・編集</li>
              <li>動画制作・編集</li>
              <li>ウェブライティング</li>
              <li>サイト保守</li>
              <li>運用代行</li>
            </ul>
          </div>
          <div class="works-block_image"></div>
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
