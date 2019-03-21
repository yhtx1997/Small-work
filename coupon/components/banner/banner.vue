<template>
  <swiper>
    <swiper-slide v-for="item of banner" :key="item.id">
      <img :src="item.src" :alt="item.alt">
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      banner: [
        {
          id: '1',
          src: '/images/3e6c35463762a51b54b3ca3abb422676.jpg',
          alt: '相册封面'
        },
        {
          id: '2',
          src: '/images/7aeb93d3cd8f338a45c4adedde53c8d1.jpg',
          alt: '星空'
        },
        {
          id: '3',
          src: '/images/1920x700-Rolex-banner-jon.jpg',
          alt: '手表'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
