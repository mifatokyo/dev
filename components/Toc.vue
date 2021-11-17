<template>
  <div class="toc">
    <div class="toc-inner">
      <h4 class="title">目次</h4>
      <ul class="toc-list">
        <li v-for="item in toc" :key="item.id" :class="`toc-item ${item.name}`">
          <n-link v-scroll-to="`#${item.id}`" to>
            {{ item.text }}
          </n-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true,
      default: () => [],
    },
    visible: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
