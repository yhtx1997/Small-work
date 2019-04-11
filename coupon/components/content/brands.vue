<template>
  <div class="top-brands">
    <public-title :private-title="`Top Brands`" />
    <div v-if="brands.length" class="items">
      <div v-for="item of brands" :key="item.id" class="item">
        <a :href="encodeURI(item.linkTo)">
          <img :src="item.brandUrl" :alt="item.brandAlt" class="item-img" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import PublicTitle from '../public/title'

export default {
  name: 'TopBrands',
  components: {
    PublicTitle
  },
  props: {
    brands: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  display: flex;
  justify-content: space-between;
}
.item {
  width: 150px;
  height: 150px;
}
.item-img {
  width: 100%;
}
@media screen and (max-width: 1100px) {
  .items {
    flex-wrap: wrap;
  }
  .item {
    width: 15%;
    height: auto;
  }
}
@media screen and (max-width: 768px) {
  .items {
    box-sizing: border-box;
    padding: 10px;
  }
  .item {
    width: 30%;
    height: auto;
    padding-bottom: 4.2%;
  }
}
</style>
