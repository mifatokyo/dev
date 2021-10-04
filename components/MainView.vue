<template>
  <div class="mainview">
    <div class="mainview-text flex item-center">
      <div class="self-center">
        <p class="key md:text-6xl text-2xl p-2.5 font-nsans tracking-wide">
          <b class="leading-snug uppercase">feel more familiar<br>with "Web Design" .</b>
        </p>
        <p class="caption p-2.5 font-black">"ウェブ制作"をもっと身近に。</p>
      </div>
    </div>
    <div class="mainview-image">
      <!-- <figure>
        <img src="~@/assets/images/front/slide3.jpg" alt="">
      </figure> -->
      <!-- <swiper :options="swiperOption">
        <swiper-slide>
          <img src="~@/assets/images/front/slide1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="~@/assets/images/front/slide2.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="~@/assets/images/front/slide3.jpg" alt="">
        </swiper-slide>
      </swiper> -->
      <span class="ball _skew"></span>
      <span class="ball _skewres"></span>
      <span class="ball _blur _gd8"></span>
      <span class="ball _blur _gd15"></span>
      <span class="ball _blur _gd23"></span>
      <span class="ball _blur _gd33"></span>
      <span class="ball _blur _gd36"></span>
      <span class="ball _blur _gd43"></span>
    </div>
    <span class="scroll text-xs">
      <b>SCROLL</b>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // swiperOption: {
      //   autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   },
      //   slidesPerView: 1,
      //   loop: true,
      //   effect: "fade",
      //   speed: 2000,
      // },
    }
  },
}
</script>
