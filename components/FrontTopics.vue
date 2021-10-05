<template>
  <div class="front-topics mx-auto md:p-4 p-2">
    <ul class="topics-list grid grid-cols-1 md:grid-cols-2">
      <li v-for="item in list" :key="item.id" class="topics-item md:flex">
        <div class="topics-image">
          <img :src="item.image" :alt="item.title">
        </div>
        <div class="topics-text md:p-0 p-2">
          <time class="text-gray-400 md:text-sm text-xs font-semibold time">{{ item.date }}</time>
          <h3 class="title font-semibold">{{ item.title }}</h3>
          <p class="description md:text-sm text-xs">{{ item.description }}</p>
          <a :href="item.link" class="link text-sm text-blue-800">
            <p v-if="item.link">{{ item.link }}<font-awesome-icon :icon="['fas', 'external-link-alt']" class="icon"/></p>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default ({
  data () {
    return{
      list: [
        // {
        //   id: 4 ,
        //   date: '2021.00.00' ,
        //   title: '〇〇様のコーポレートサイト4',
        //   description:'あああああああああああああああああああああああああああああああ',
        //   // link: 'https://google.com',
        //   image: require('@/assets/images/topics/sample4.png')
        // },
        {
          id: 3 ,
          date: '2021/10/4' ,
          title: 'ブログ投稿を開始しました。',
          description:'制作・開発に関することや、身の回りのことを定期的に発信していきます。',
          link: '/Blog',
          image: require('@/assets/images/topics/sample3.png')
        },
        {
          id: 2 ,
          date: '2021/10/1' ,
          title: '納品事例を更新しました。',
          description:'納品済みの2サイトを掲載しました。',
          link: '/Works',
          image: require('@/assets/images/topics/sample2.png')
        },
        {
          id: 1 ,
          date: '2021/9/30' ,
          title: '《 mifa.tokyo 》を公開しました',
          description:'個人活動用のサイトを制作・公開しました。',
          // link: 'https://google.com',
          image: require('@/assets/images/topics/mifa-open.png')
        },
      ],
    }
  },
})
</script>
