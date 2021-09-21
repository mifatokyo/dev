<template>
  <header class="header">
    <nuxt-link class="header-logo p-4" to="/">
      <img src="../assets/images/mifa_logo.svg" alt="mifa tokyo">
    </nuxt-link>
    <nav class="header-nav flex md:p-4 md:shadow-none shadow">
      <nuxt-link class="header-nav_item md:m-2 home" active-class="link-active" to="/">
        <font-awesome-icon :icon="['fas', 'home']" class="md:hidden block icon"/>
        <p>HOME</p>
      </nuxt-link>
      <nuxt-link class="header-nav_item md:m-2 service" active-class="link-active" to="/Service">
        <font-awesome-icon :icon="['fas', 'desktop']" class="md:hidden block icon"/>
        <p>SERVICE</p>
      </nuxt-link>
      <nuxt-link class="header-nav_item md:m-2 works" active-class="link-active" to="/Works">
        <font-awesome-icon :icon="['fas', 'code-branch']" class="md:hidden block icon"/>
        <p>WORKS</p>
      </nuxt-link>
      <nuxt-link class="header-nav_item md:m-2 blog" active-class="link-active" to="/Blog">
        <font-awesome-icon :icon="['fas', 'keyboard']" class="md:hidden block icon"/>
        <p>BLOG</p>
      </nuxt-link>
      <nuxt-link class="header-nav_item md:m-2 contact" active-class="link-active" to="/#contact">
      <font-awesome-icon :icon="['fas', 'paper-plane']" class="md:hidden block icon"/>
        <p>CONTACT</p>
      </nuxt-link>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header{
  width: 100%;
  &-logo,
  &-nav{
    position: fixed;
    top: 0;
    z-index: 9999;
  }
  &-logo{
    max-width:6rem;
    width: 100%;
    left: 0;
  }
  &-nav{
    font-family: 'Nsans';
    font-weight: 600;
    color: $Org;
    mix-blend-mode: exclusion;
    filter: invert(100%) grayscale(100%) contrast(100);
    right: 0;
    @include mq(md){
      mix-blend-mode: unset;
      filter: none;
      top: auto;
      bottom: 0;
      width: 100%;
      background: #fff;
      padding: .8em 0 .6em;

    }
    &_item{
      &:hover{
        color: $Org;
        transform: scale(1.1);
        &::first-letter{
          transform: scale(1.1);
          color: $Org;
        }
      }
      @include mq(md){
        width: 100%;
        font-size: 2vw;
        text-align: center;
        color: #222;
        p{
          margin: .4em 0 0;
        }
        &.home{
          order: 3;
        }
        &.service{
          order: 1;
        }
        &.works{
          order: 2;
        }
        &.blog{
          order: 4;
        }
        &.contact{
          order: 5;
        }
      }
      .icon{
        font-size: 5vw;
        margin: auto;
      }
      &.nuxt-link-exact-active{
        @include mq(md){
          color: $Org;
          transform: scale(1.15);
          position: relative;
          &:before{
            content: '';
            background: #fff;
            width: 4rem;
            height: 4rem;
            position: absolute;
            top: -40%;
            border-radius: 50%;
            left: 0;
            right: 0;
            margin: auto;
            z-index: -3;
          }
        }
      }
    }
  }
}
</style>
