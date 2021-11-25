<template>
  <div class="wrap">
    <MainView/>
    <section class="front-topics inner section">
      <div class="">
        <h2 class="front-headline2 md:text-7xl text-5xl leading-loose" data-text="Topics">TOPICS</h2>
      </div>
      <Topics/>
    </section>
    <div class="z-0 relative front-bg">
      <div class="float _grd"></div>
      <section class="front-works inner section">
        <div class="">
          <h2 class="front-headline2 md:text-7xl text-5xl leading-loose" data-text="Works">WORKS</h2>
        </div>
        <Works/>
        <nuxt-link to="/works" class="button trans">
          <span>VIEW ALL</span><em></em>
        </nuxt-link>
      </section>
    </div>
    <section class="front-service inner section">
      <div class="float _org"></div>
      <div class="">
        <h2 class="front-headline2 md:text-7xl text-5xl leading-loose" data-text="Concept">CONCEPT</h2>
      </div>
      <Service/>
      <nuxt-link to="/service" class="button trans">
        <span>SERVICE</span><em></em>
      </nuxt-link>
    </section>
    <div class="z-0 relative front-bg">
      <section class="front-blog inner section">
        <div class="">
          <h2 class="front-headline2  md:text-7xl text-5xl leading-loose" data-text="Blog">BLOG</h2>
        </div>
        <ul class="blog-list grid md:gap-5 gap-10 grid-cols-1 md:grid-cols-3 p-4">
          <li v-for="content in contents" :key="content.id" class="blog-item">
            <nuxt-link :to="`/blog/${content.id}`">
              <div class="post-image shadow-md">
                <span class="text-white text-xs font-semibold category sample">{{ content.category.name }}</span>
                <picture>
                  <!-- WebP用画像 -->
                  <source :srcset="content.thumbnail.url + '?fm=webp'" type="image/webp">
                  <!-- 従来画像 -->
                  <img :src="content.thumbnail.url">
                </picture>
                <!-- <img v-if="content.thumbnail.url" :src="content.thumbnail.url" alt="">
                <img v-else src="~/assets/images/post/noimages.jpg" alt=""> -->
              </div>
              <div class="post-text">
                <h3 class="title">{{ content.title }}</h3>
                <time class="text-gray-400 md:text-sm text-xs font-semibold time">{{ new Date(content.datepick).toLocaleDateString() }}</time>
              </div>
            </nuxt-link>
          </li>
        </ul>
        <nuxt-link to="/blog" class="button trans">
          <span>VIEW ALL</span><em></em>
        </nuxt-link>
      </section>
    </div>
    <section id="contact" class="inner section">
      <div class="float _red"></div>
      <div class="">
        <h2 class="front-headline2 md:text-7xl text-5xl leading-loose" data-text="Contact">CONTACT</h2>
      </div>
      <Contact/>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';
  import MainView from "@/components/MainView.vue";
  import Topics from "@/components/FrontTopics.vue";
  import Service from "@/components/FrontService.vue";
  import Works from '@/components/Works.vue';
  import Contact from '@/components/Contact.vue';

  export default {
    components: {
      MainView,
      Topics,
      Works,
      Service,
      Contact,
		},

    async asyncData() {
      // microCMSからの記事取得
      const { data } = await axios.get(
        'https://mifatokyo.microcms.io/api/v1/post',
        {
          headers: { 'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75' }
        }
      )
      return data
    },
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
