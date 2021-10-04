<template>
  <div>
    <div class="service-text bg-white bg-opacity-80 mrl md:p-10 p-4 shadow-md">
      <h3 class="lead md:text-2xl text-lg">メッセージを"カタチ"に。<br>そのお手伝いをさせて下さい。</h3>
      <!-- <h3 class="lead md:text-2xl text-lg">『今日は出勤しないの？』<br>そんな距離感を目指してます。</h3> -->
      <div class="md:text-sm text-xs">
        <p></p>
        <p class="mb-4">皆様が持つユーザーへのメッセージを、<b>『どうやって形にするか』</b><br>悩まれている方も多いのではないでしょうか。</p>
        <p><b>そんな想いをカタチにして、人やモノを繋げる。</b></p>
        <p class="mb-4">ウェブ制作を通して、そのお手伝いがしたいと思っています。</p>
        <!-- <p>ですが、どんな制作でも私1人で完結させることはできません。</p>
        <p class="mb-4">まずはコミュニケーションを重ね、様々な情報・材料を全て机に広げるところから始めています。</p> -->
        <p class="mb-4"><b>「こういうものが欲しい」「コレをこうしたい」</b>を聞かせて下さい。</p>
        <p>ユーザーに届けるメッセージをどう形創ることが最適か。</p>
        <p>ぜひ一緒に考えさせてくだい。</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.front{
  &-service{
    .service{
      &-text{
        width: 60%;
        position: relative;
        margin-bottom: 4rem;
        @include mq(md){
          margin-bottom: 6rem;
          width: 100%;
        }
        &:before{
          content: '';
          background: url("~@/assets/images/front/front-service.jpg") center center/cover no-repeat;
          position: absolute;
          z-index: -1;
          top: 2rem;
          left: -80%;
          right: auto;
          width: 120%;
          height: 100%;;
          @include mq(md){
            top: 3.2rem;
            width: 90vw;
            left: calc(50% - 50vw);
          }
        }
        &:after{
          border: 1px solid #222;
          content: '';
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          top: -.4rem;
          left: .4rem;
          @include mq(md){
            top: .4rem;
            left: -.4rem;
          }
        }
        .lead{
          margin-bottom: .8em;
          font-family: 'Nsans';
        }

      }
    }
  }
}
</style>
