<template>
  <ul class="breadcrumb">
    <li class="breadcrumbList">
      <nuxt-link to="/">HOME</nuxt-link>
    </li>
    <li class="breadcrumbList">
      <nuxt-link to="/Blog">BLOG</nuxt-link>
    </li>
    <li v-if="hasCategory(category)" class="breadcrumbList">
      <!-- <nuxt-link :to="`/category/${category.id}/page/1`">{{
        category.name
      }}</nuxt-link> -->
      <p>{{
        category.name
      }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  methods: {
    hasCategory(category) {
      return Object.keys(category).length > 0;
    },
  },
};
</script>
