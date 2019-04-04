<template>
  <div v-swiper:mySwiper="swiperOption" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="item in banner" :key="item.id" class="swiper-slide">
        <a :href="item.linkTo">
          <img :data-src="item.src" class="swiper-lazy" />
        </a>
      </div>
    </div>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
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
          alt: '相册封面',
          linkTo: '/store'
        },
        {
          id: '2',
          src: '/images/7aeb93d3cd8f338a45c4adedde53c8d1.jpg',
          alt: '星空',
          linkTo: '/store'
        },
        {
          id: '3',
          src: '/images/1920x700-Rolex-banner-jon.jpg',
          alt: '手表',
          linkTo: '/store'
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
.swiper {
  width: 100%;
  max-height: 700px;
  height: auto;
}
img {
  width: 100%;
}
.swiper-slide {
  height: 0;
  padding-bottom: 36%;
}
.swiper /deep/ {
  .swiper-pagination-bullet {
    opacity: 1;
    background: transparent;
    border: 1px solid #ffffff;
  }
  .swiper-pagination-bullet-active {
    background: #ffffff;
  }
  .swiper-button-white {
    opacity: 0;
    transition: all 0.5s;
  }
  &:hover .swiper-button-white {
    opacity: 1;
  }
}
</style>
