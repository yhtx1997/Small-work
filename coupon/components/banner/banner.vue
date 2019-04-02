<template>
  <div v-swiper:mySwiper="swiperOption" class="swiper banner">
    <div class="swiper-wrapper">
      <div v-for="item in banner" :key="item.id" class="swiper-slide">
        <img :data-src="item.src" class="swiper-lazy" />
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>
  </div>
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
      ],
      swiperOption: {
        el: '.swiper',
        autoplay: true,
        delay: 3000,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        lazy: {
          loadPrevNext: true
        }
      }
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.banner {
  max-height: 700px;
  height: auto;
}
img {
  width: 100%;
}
.swiper-slide {
  height: auto;
}
</style>
