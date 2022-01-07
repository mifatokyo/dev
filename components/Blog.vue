<template>
      <ul class="blog-list grid md:gap-5 gap-10 grid-cols-1 md:grid-cols-3 p-4">
        <li v-for="content in contents" :key="content.id" class="blog-item">
          <nuxt-link :to="`/blog/${content.id}/`">
            <div class="post-image">
              <span class="text-white text-xs font-semibold category sample">{{ content.category.name }}</span>
              <picture>
                <!-- WebP用画像 -->
                <source :srcset="content.thumbnail.url + '?fm=webp'" type="image/webp">
                <!-- 従来画像 -->
                <img :src="content.thumbnail.url">
              </picture>
            </div>
            <div class="post-text">
              <h2 class="title">{{ content.title }}</h2>
              <time class="text-gray-400 md:text-sm text-xs font-semibold time">{{ new Date(content.datepick).toLocaleDateString() }}</time>
            </div>
          </nuxt-link>
        </li>
      </ul>
</template>

<script>
  import axios from 'axios';
  export default {
    async asyncData({$config}) {
      const { data } = await axios.get(
        'https://mifatokyo.microcms.io/api/v1/post',
        {
          headers: { 'X-API-KEY': $config.apiKey }
        }
      )
      return data
    },
    data() {
      return{
        contents: "",
      }
    }
  }
</script>
