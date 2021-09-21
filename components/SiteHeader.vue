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
