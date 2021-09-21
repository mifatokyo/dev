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
