<template>
  <div>
    <Header/>
    <main class="layer inner">
      <div>
        <h1 class="layer-headline1 text-5xl flef justify-center" data-text="Service">制作について</h1>
      </div>
      <section>
        <div class="layer-headline2 ">
          <h2 class="text-3xl bold p-2.5 bg-white inline-block">OFFERS</h2>
        </div>
        <div class="works-block p-2.5">
          <h3 class="works-block_headline md:text-2xl text-lg">コーディング / CMS構築</h3>
          <div class="works-block_text md:text-base text-sm p-4">
            <p>デザインカンプを元に、HTML・CSSなどを使用してブラウザ上に再現します。</p>
            <p>ブログやニュースなどの投稿更新機能付きのサイトや、動きのあるサイト、スマートフォンサイトなど、様々ご対応いたします。</p>
            <p>既存サイトのWordPress移行やオリジナルテーマ作成・カスタマイズも承ります。</p>
            <ul class="list-hyphen">
              <li>ホームページ制作</li>
              <li>HTMLコーディング</li>
              <li>レスポンシブ対応</li>
              <li>WordPress実装・オリジナルテーマ作成</li>
              <li>制作後のサポート</li>
            </ul>
            <p>etc...</p>
          </div>
          <div class="works-block_image"></div>
        </div>
        <div class="works-block p-2.5">
          <h3 class="works-block_headline md:text-2xl text-lg">デザイン</h3>
          <div class="works-block_text md:text-base text-sm p-4">
            <p>情報設計から構成案作成、デザインカンプまで一貫して制作を行います。</p>
            <p>キャンペーンサイトやランディングページ（LP）のような小規模制作から、企業や店舗様のホームページやブランドサイトなど中規模制作まで承ります。</p>
            <p>店舗運営や、販促の際に使用する名刺やショップカード、パンフレットなど印刷物のデザインや、ロゴの作成なども承ります。</p>
            <ul class="list-hyphen">
              <li>バナーデザイン</li>
              <li>ホームページデザイン</li>
              <li>名刺、ショップカード</li>
              <li>パンフレット</li>
              <li>ロゴ作成</li>
            </ul>
            <p>etc...</p>
          </div>
          <div class="works-block_image"></div>
        </div>
        <!-- <div class="works-block p-2.5">
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
        </div> -->
        <div class="works-block p-2.5">
          <h3 class="works-block_headline md:text-2xl text-lg">その他</h3>
          <div class="works-block_text md:text-base text-sm p-4">
            <p>運用上必要な素材など、大小問わずウェブコンテンツ作成を承ります。</p>
            <p>制作サイトや既存サイトの保守・運用代行なども行っておりますので、お気軽にご相談ください。</p>
            <ul class="list-hyphen">
              <li>素材作成・写真編集</li>
              <!-- <li>動画制作・編集</li> -->
              <li>ライティング</li>
              <li>サイト保守、運用代行</li>
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
              <img src="" alt="">
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
