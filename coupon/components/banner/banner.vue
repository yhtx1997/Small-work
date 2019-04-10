<template>
  <div v-if="banner.length" v-swiper:mySwiper="swiperOption" class="swiper">
    <div v-if="banner.length" class="swiper-wrapper">
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
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  }
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
