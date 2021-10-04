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
<style lang="scss" scoped>
/* = = = = = = = = = = = = = = = =
// Main View - unique styles
 = = = = = = = = = = = = = = = = */
.ball{
  display: block;
  position: absolute;
  border-radius: 99999px;
  aspect-ratio: 1 /1;
  height: auto;
  &._blur{
    filter: blur(1rem);
    z-index: 1;
  }
  &._gd8{
    top: 10%;
    width: 55vw;
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    opacity: 0.4;
    animation: ballbounce 1s ease infinite alternate;
    @include mq(){
      top: 12%;
      left: -20%;
      width: 75vw;
    }
  }
  &._gd15{
    width: 70vw;;
    top: -25%;
    right: -15%;
    background-image: linear-gradient(120deg, #ffcb8c 0%, #e39cf5 100%);
    @include mq(md){
      width: 100vw;
      top: -5%;
      right: -25%;
    }
  }
  &._gd23{
    width: 28vw;;
    top: -15%;
    right: 32%;
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    @include mq(md){
      width: 56vw;
      top: 50%;
    }
  }
  &._gd33{
    width: 12vw;;
    top: 15%;
    right: 45%;
    background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%);
    @include mq(md){
      width: 42vw;
      top: 25%;
      right: -40px;
    }
  }
  &._gd36{
    width: 25vw;;
    top: 55%;
    right: 35%;
    transform: rotate(-45deg);
    background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);
    animation: ballbounce .6s ease infinite alternate;
    @include mq(md){
      width: 35vw;
      top: 61%;
      right: 8%;
    }
  }
  &._gd43{
    width: 42vw;;
    bottom: -15%;
    left: -10%;
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    @include mq(md){
      width: 74vw;
      bottom: -18%;
    }
  }
  &._skew{
    z-index: 4;
    width: 30vw;
    top: 5%;
    background-color: transparent;
    background-image: repeating-linear-gradient(45deg, #fff, #fff 2px, transparent 0, transparent 12px);
    @include mq(md){
      width: 50vw;
      top: 20%;
    }
  }
  &._skewres{
    z-index: 4;
    width: 24vw;
    top: 50%;
    right: 25%;
    background-color: transparent;
    background-image: repeating-linear-gradient(-45deg, #fff, #fff 2px, transparent 0, transparent 10px);
    @include mq(md){
      width: 34vw;
      top: 60%;
      right: 15%;
    }
  }
}
@keyframes ballbounce{
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-.8rem);
  }
}
@keyframes ballbounce2{
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-1rem);
  }
}
.mainview{
  height: 100vh;
  position: relative;
  margin-bottom: 4rem;
  // overflow: hidden;
  // background: rgb(255,255,255);
  &:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background: linear-gradient(0deg, white 0%, white 0%, rgba(255, 255, 255, 0) 10%);
  }
  &:after{
    // content: '';
    background: rgba(255,255,255,0.8);
    width: 80vw ;
    height: 6rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  &-text{
    color: $Kro;
    position: absolute;
    top: 30%;
    z-index: 10;
    left: 0;
    right: 0;
    margin: auto;
    // mix-blend-mode: exclusion;
    // filter: invert(100%) grayscale(100%) contrast(100);
    max-width: 1080px;
    .key,
    .caption{
      background: #fff;
    }
    .key{
    }
    .caption{
      margin-top: .6rem;
      display: inline-block;
    }
    @include mq(md){
      max-width: 94%;
      height: min-content;
      top: 0;
      bottom: 0;
    }
    &:before{
      content: '';
      position: absolute;
      z-index: -1;
      padding: 20%;
      border: 1px solid;
      top: 0;
      bottom: 0;
      left: -10%;
      margin: auto;
      transform: rotate(70deg);
      aspect-ratio: 1/1;
      @include mq(){
        padding: 40%;
      }
    }
  }
  &-image{
    width: 100vw;
    height: 100vh;
    position: absolute;
    right:0;
    top: 0;
    z-index: -1;
    overflow: hidden;
    // aspect-ratio: 1 / 1;
    // border-radius: 50% 0 50% 50%;
    border-radius: 0 0 25% 0;
    // filter: blur(0.3rem);
    @include mq(md){
      border-radius: 0 0 50% 0;
    }
    img{
      height: 100vh;
      width: 100%;
      object-fit: cover;
    }
  }
  .scroll{
    display: inline-block;
    position: absolute;
    right: 2rem;
    bottom: -6rem;
    z-index: 2;
    padding: 10px 10px 110px;
    line-height: 1;
    text-transform: uppercase;
    writing-mode: vertical-lr;
    @include mq(md){
      bottom: -7%;
      right: 2%;
    }
    &:after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 1px;
      height: 100px;
      background: #000;
      animation: sdl 1.5s cubic-bezier(1, 0, 0, 1) infinite;
    }
  }
  .swiper-container{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
}
</style>
