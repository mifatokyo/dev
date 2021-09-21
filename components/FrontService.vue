<template>
  <div>
    <div class="service-text bg-white bg-opacity-80 mrl md:p-10 p-4">
      <h3 class="lead md:text-2xl text-lg">リードタイトル<br>ううううううううううううう</h3>
      <p class="text-sm">サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.front{
  &-service{
    .service{
      &-text{
        width: 60%;
        position: relative;
        margin-bottom: 4rem;
        @include mq(md){
          width: 100%;
          margin-bottom: 6rem;
        }
        &:before{
          content: '';
          background: url("~@/assets/images/front/sample.png") center center/cover no-repeat;
          position: absolute;
          z-index: -1;
          top: 6rem;
          left: calc(0% - 50vw);
          right: auto;
          width: 70vw;
          height: 80%;;
          @include mq(md){
            top: 8rem;
            width: 80vw;
            left: calc(50% - 50vw);
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
