<template>
  <div class="top-brands">
    <public-title :private-title="`Top Brands`" />
    <div class="items">
      <div v-for="item of items" :key="item.id" class="item">
        <a :href="item.linkTo">
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
  data() {
    return {
      items: [
        {
          id: `1`,
          linkTo: `/store`,
          brandUrl: `/images/airbnb.com-coupons.jpg`,
          brandAlt: `Airbnb`
        },
        {
          id: `2`,
          linkTo: `/store`,
          brandUrl: `/images/kohls.com-coupons.jpg`,
          brandAlt: `Kohl's`
        },
        {
          id: `3`,
          linkTo: `/store`,
          brandUrl: `/images/bedbathandbeyond.com-coupons.jpg`,
          brandAlt: `Bed Bath & Beyond®`
        },
        {
          id: `4`,
          linkTo: `/store`,
          brandUrl: `/images/papajohns.com-coupons.jpg`,
          brandAlt: `Papa John's`
        },
        {
          id: `5`,
          linkTo: `/store`,
          brandUrl: `/images/doordash.com-coupons.jpg`,
          brandAlt: `DoorDash`
        },
        {
          id: `6`,
          linkTo: `/store`,
          brandUrl: `/images/bestbuy.com-coupons.jpg`,
          brandAlt: `Best Buy`
        }
      ]
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
