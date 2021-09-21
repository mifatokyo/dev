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
            <p>{{ item.link }}</p>
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
        {
          id: 1 ,
          date: '2021.00.00' ,
          title: '〇〇様のコーポレートサイト1',
          description:'あああああああああああああああああああああああああああああああ',
          link: 'https://google.com',
          image: require('@/assets/images/topics/sample1.png')
        },
        {
          id: 2 ,
          date: '2021.00.00' ,
          title: '〇〇様のコーポレートサイト2',
          description:'あああああああああああああああああああああああああああああああ',
          link: 'https://google.com',
          image: require('@/assets/images/topics/sample2.png')
        },
        {
          id: 3 ,
          date: '2021.00.00' ,
          title: '〇〇様のコーポレートサイト3',
          description:'あああああああああああああああああああああああああああああああ',
          link: 'https://google.com',
          image: require('@/assets/images/topics/sample3.png')
        },
        {
          id: 4 ,
          date: '2021.00.00' ,
          title: '〇〇様のコーポレートサイト4',
          description:'あああああああああああああああああああああああああああああああ',
          link: 'https://google.com',
          image: require('@/assets/images/topics/sample4.png')
        },
      ],

    }
  },


})
</script>
