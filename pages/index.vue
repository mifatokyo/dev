<template>
  <div class="wrap">
    <Header></Header>
    <MainView/>
    <section class="front-topics inner section">
      <div class="">
        <h2 class="front-headline2 md:text-7xl text-5xl leading-loose" data-text="Topics">TOPICS</h2>
      </div>
      <Topics/>
    </section>
    <section class="front-works inner section">
      <div class="">
        <h2 class="front-headline2 md:text-7xl text-5xl leading-loose" data-text="Works">WORKS</h2>
      </div>
      <Works/>
      <nuxt-link to="/works" class="button trans">
        <span>VIEW ALL</span><em></em>
      </nuxt-link>
    </section>
    <section class="front-service inner section">
      <div class="">
        <h2 class="front-headline2 md:text-7xl text-5xl leading-loose" data-text="Serviec">SERVICE</h2>
      </div>
      <Service/>
      <nuxt-link to="/service" class="button trans">
        <span>VIEW MORE</span><em></em>
      </nuxt-link>
    </section>
    <section class="inner section">
      <div class="">
        <h2 class="front-headline2  md:text-7xl text-5xl leading-loose" data-text="Blog">BLOG</h2>
      </div>
      <ul class="blog-list grid md:gap-5 gap-10 grid-cols-1 md:grid-cols-3 p-4">
        <li v-for="content in contents" :key="content.id" class="blog-item">
          <nuxt-link :to="`/${content.id}`">
            <div class="post-image">
              <span class="text-white text-xs font-semibold category sample">{{ content.category }}</span>
              <img :src="content.thumbnail.url" alt="">
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
    <!-- <section id="contact" class="inner section">
      <div class="">
        <h2 class="front-headline2 md:text-7xl text-5xl leading-loose" data-text="Contact">CONTACT</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="contact-text md:text-base text-sm p-2.5">
          <p>ご相談などのご連絡は、右のフォームよりお願いします。<br>通常1~2日以内に折り返しご返信させて頂きます。</p>
          <p>お気軽にお問い合わせください。</p>
        </div>
        <div class="front-contact">
          <template v-if="!finished">
            <form name="contact" method="POST" class="front-contact_form" netlify>
              <input type="hidden" name="form-name" :value="contact" />
              <div class="p-2.5">
                <p>
                  <label>お名前<span class="mandatory">*</span></label>
                </p>
                <div>
                  <input type="text" name="name" placeholder="Your Name"/>
                </div>
              </div>
              <div class="p-2.5">
                <p>
                  <label>メールアドレス<span class="mandatory">*</span></label>
                </p>
                <div>
                  <input type="email" name="email" placeholder="E-mail Address"/>
                </div>
              </div>
              <div class="p-2.5">
                <p>
                  <label>お問い合わせ内容<span class="mandatory">*</span></label>
                </p>
                <div>
                  <textarea name="message" placeholder="Please enter a message..."></textarea>
                </div>
              </div>
              <button type="submit" class="font-nsans btn">SEND</button>
            </form>
          </template>
          <template v-else>
            <p>お問い合わせ頂きありがとうございました。</p>
            <nuxt-link to="/">HOME</nuxt-link>
          </template>
        </div>
      </div>
    </section> -->
    <!-- <Tutorial/> -->
    <Footer></Footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import Header from "@/components/SiteHeader.vue";
  import Footer from "@/components/SiteFooter.vue";
  import MainView from "@/components/MainView.vue";
  import Topics from "@/components/FrontTopics.vue";
  import Service from "@/components/FrontService.vue";
  import Works from '@/components/Works.vue';
  // import Blog from '@/components/Blog.vue';
  // import Contact from '@/components/Contact.vue';

  export default {
    components: {
			Header,
			Footer,
      MainView,
      Topics,
      Works,
      Service,
      // Blog,
      // Contact
		},
    async asyncData() {
      const { data } = await axios.get(
        // your-service-id部分は自分のサービスidに置き換えてください
        'https://mifatokyo.microcms.io/api/v1/post',
        {
          // your-api-key部分は自分のapi-keyに置き換えてください
          headers: { 'X-API-KEY': '4eb0c6b2-fc5d-41d3-af15-b4c6ff975c75' }
        }
      )
      return data
    },
  }
</script>


<style scoped lang="scss">


.front{
  &-headline{
    &2{
      color:rgba(0,0,0,0);
      display:block;
      font-family: 'Nsans';
      font-weight: 700;
      opacity:1;
      position:relative;
      -webkit-text-stroke-color: #000;
      -webkit-text-stroke-width: 1.5px;
      text-shadow: 2px 3px $Org;
      margin-bottom: 2rem;
      &:after{
        @extend .sacrset ;
        font-size: 26rem;
        top: -80%;
        left: -4rem;
        opacity: 0.2;
        @include mq(){
          font-size: 50vw;
        }
      }
    }
  }

  &-works{
    .works-item{
      &:nth-child(odd){
        margin: 0 auto;
      }
      &:nth-child(even){
        margin: 4rem auto 0;
      }
      @include mq(md){
        &:nth-child(even),
        &:nth-child(odd){
          margin: 1.2rem auto;
        }
      }
    }
  }
  &-contact{
    &_form{
      input,
      textarea{
        border: 1px solid #222;
        background: #fff;
        max-width: 440px;
        max-height: 140px;
        width: 100%;
        padding: .2em .64em;
      }
    }
    .btn{
      max-width: 240px;
      display: block;
      margin: 2rem auto;
      background: #222;
      color: #fff;
      width: 100%;
      padding: 0.4em;
    }
  }
}
</style>
