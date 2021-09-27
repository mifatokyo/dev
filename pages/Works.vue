<template>
  <div>
    <Header/>
    <main class="layer inner">
      <div>
        <h1 class="layer-headline1 text-5xl flef justify-center" data-text="Works">納品事例</h1>
      </div>
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
              <img src="" alt="">
            </figure>
          </div>
          <div class="speech md:p-4 p-2 text-xs rounded">
            <p>こちらでは許可を頂いた制作物のみ掲載しています</p>
            <p>どんな案件に携わったかなど少しお話しすることも可能ですので、お気軽にご連絡ください。</p>
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
  import Works from '@/components/Works.vue';

  export default {
    components: {
			Header,
			Footer,
      Works
		},
  }
</script>


<style scoped>
  body{
  }
</style>
