<template>
  <div>
    <div class="works-list grid grid-cols-1 md:grid-cols-2">
      <a v-for="item in works" :key="item.id"  :href="item.link" target="_blank" rel="noopener noreferrer" class="works-item link text-sm text-blue-800 ">
        <div class="works-image bg-black trans shadow-md">
          <picture>
            <source :srcset="item.image + '?webp'" type="image/webp" >
            <img :src="item.image" :alt="item.title" class="trans ">
          </picture>

          <span class="outside text-white inset-0 flex justify-center items-center trans">
            <div>
              <font-awesome-icon :icon="['fas', 'external-link-alt']" class="md:block hidden icon text-3xl"/>
              <p>Open Web Site</p>
            </div>
          </span>
        </div>
        <div class="works-text ease-in-out trans">
          <span class="inline-block text-white text-sm font-semibold p-2.5 bg-black category">
            <p>{{ item.category }}</p>
          </span>
          <span class="block text-gray-900">
            <h2 class="inline-block title font-extrabold text-xl p-2.5 bg-white bg-opacity-100">{{ item.title }}</h2>
          </span>
          <div class="p-2.5">
            <p class="description text-sm text-gray-900">{{ item.description }}</p>
            <p class="charge text-sm text-gray-400">SCOPE : {{ item.charge }}</p>
          </div>
        </div>
      </a>
    </div>

  </div>
</template>

<script>
export default ({
  data () {
    return{
      works: [
        {
          id: 1 ,
          category: 'WORDPRESS' ,
          title: 'SuburbsRecords WEB SITE',
          description:'音楽を中心としたイベントやトータルデザイン、レコーディングを行うクリエイター集団[ SuburbsRecords ]様のホームページを制作しました。',
          charge:'Coding',
          link: 'https://suburbsrecords.com/',
          image: require('@/assets/images/works/suburbsrecords.jpg')
        },
        {
          id: 2 ,
          category: 'WORDPRESS' ,
          title: 'DSC LLC. CORPORATE SITE',
          description:'通販コンサルタント[ DSC合同会社 ]様のホームページリニューアルを担当させて頂きました。',
          charge:'Coding',
          link: 'https://d-s-c.jp/',
          image: require('@/assets/images/works/dsc.png')
        },
        // {
        //   id: 3 ,
        //   category: 'STUDIO' ,
        //   title: 'TL inc. CORPORATE SITE',
        //   description:'ウェブ制作会社[ 株式会社TL ]様のホームページリニューアルを担当させて頂きました。',
        //   charge:'Design / Construction',
        //   link: 'https://www.i-tl.jp/',
        //   image: require('@/assets/images/works/i-tl.png')
        // },
      ],
    }
  },
})
</script>
