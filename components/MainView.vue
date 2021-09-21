<template>
  <div class="mainview">
    <div class="mainview-text">
      <div class="">
        <p class="key md:text-5xl text-3xl p-2.5 font-nsans">
          <b>Sample <br>Headline Text</b>
        </p>
        <p class="caption p-2.5 font-black">Sample Headline Sub text Read this text . <br>
        At the first time , my Web site visit allmost about <br>
        there name third eye before dark remine. <br>

        more than fimiler your project .
        Thanks.</p>
      </div>
    </div>
    <div class="mainview-image"></div>
    <span class="scroll text-xs">
      <b>SCROLL</b>
    </span>
  </div>
</template>


<style scoped lang="scss">
.mainview{
  height: 100vh;
  position: relative;
  margin-bottom: 4rem;
  &:before{
    content: '';
    background: #f5f5f4;
    width: 30vw;
    height: 100%;
    position: absolute;
  }
  &:after{
    content: '';
    background: rgba(255,255,255,0.8);
    width: 80vw ;
    height: 6rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  &-text{
    color: #222;
    position: absolute;
    top: 40%;
    bottom: 40%;
    left: calc(50% - 40vw);
    mix-blend-mode: exclusion;
    filter: invert(100%) grayscale(100%) contrast(100);
    max-width: 50%;
    @include mq(md){
      max-width: 80%;
      left: 10%;
      top: 30%;
    }
    .key{

    }
    .caption{

    }
  }
  &-image{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background: url("~@/assets/images/front/mainview.png") center center /cover no-repeat;
    img{
      height: 100%;
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
}
</style>
