<template>
  <header class="header">
    <nuxt-link class="header-logo p-4" to="/">
      <img src="../assets/images/mifa_logo.svg" alt="mifa tokyo">
    </nuxt-link>
    <nav class="header-nav flex md:p-4 md:shadow-none shadow" role="navigation" aria-label="メインメニュー">
      <nuxt-link class="header-nav_item md:m-2 md:text-gray-400 home" active-class="link-active" to="/">
        <font-awesome-icon :icon="['fas', 'home']" class="md:hidden block icon"/>
        <p class="text-progress" data-text="HOME">HOME</p>
      </nuxt-link>
      <nuxt-link class="header-nav_item md:m-2 md:text-gray-400 service" active-class="link-active" to="/service">
        <font-awesome-icon :icon="['fas', 'desktop']" class="md:hidden block icon"/>
        <p class="text-progress" data-text="SERVICE">SERVICE</p>
      </nuxt-link>
      <nuxt-link class="header-nav_item md:m-2 md:text-gray-400 works" active-class="link-active" to="/works">
        <font-awesome-icon :icon="['fas', 'code-branch']" class="md:hidden block icon"/>
        <p class="text-progress" data-text="WORKS">WORKS</p>
      </nuxt-link>
      <nuxt-link class="header-nav_item md:m-2 md:text-gray-400 blog" active-class="link-active" to="/blog">
        <font-awesome-icon :icon="['fas', 'keyboard']" class="md:hidden block icon"/>
        <p class="text-progress" data-text="BLOG">BLOG</p>
      </nuxt-link>
      <nuxt-link class="header-nav_item md:m-2 md:text-gray-400 contact" active-class="link-active" to="/#contact">
      <font-awesome-icon :icon="['fas', 'paper-plane']" class="md:hidden block icon"/>
        <p class="text-progress" data-text="CONTACT">CONTACT</p>
      </nuxt-link>
    </nav>
  </header>
</template>
