<template>
  <div class="wrap">
    <Header/>
    <MainView/>

    <Footer/>
  </div>
</template>

<script>
  // import axios from 'axios';
  import Header from "@/components/SiteHeader.vue";
  import Footer from "@/components/SiteFooter.vue";
  import MainView from "@/components/MainView.vue";
  // import Topics from "@/components/FrontTopics.vue";
  // import Service from "@/components/FrontService.vue";
  // import Works from '@/components/Works.vue';
  // import Contact from '@/components/Contact.vue';

  export default {
    components: {
			Header,
			Footer,
      MainView,
      // Topics,
      // Works,
      // Service,
      // Contact,
		},

    // async asyncData() {
    //   // microCMSからの記事取得
    //   const { data } = await axios.get(
    //     'https://mifatokyo.microcms.io/api/v1/post',
    //     {
    //       headers: { 'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75' }
    //     }
    //   )
    //   return data
    // },
    head() {
      return {
        title: 'Webデザイナー mifa.tokyo',
        titleTemplate: null,
        link: [
          {
            rel: "canonical",
            href: `https://mifa.tokyo`,
          },
        ],
      }
    }
  }

</script>
