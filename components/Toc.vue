<template>
  <!-- 投稿記事の目次用コンポーネント -->
  <div class="toc">
    <div class="toc-inner">
      <h4 class="title">目次</h4>
      <ul class="toc-list">
        <!--
          /_slug/indev.vue に記述して抽出したh1~h3を v-forで繰り返し処理で生成
          ${item.name}で h1~3のクラス名を付与しているため、適宜見やすいようにスタイルを当てて整形
         -->
        <li v-for="item in toc" :key="item.id" :class="`toc-item ${item.name}`">
          <!-- v-scroll-toライブラリを入れて、スムーズスクロールに対応 -->
          <n-link v-scroll-to="`#${item.id}`" to>
            {{ item.text }}
          </n-link>
        </li>
      </ul>
    </div>
  </div>
  <!-- // 投稿記事の目次用コンポーネント -->
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true,
      // 配列の形式で取得
      default: () => [],
    },
    visible: {
      // 真偽地の形式
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
