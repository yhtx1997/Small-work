<template>
  <div class="top-offers">
    <public-title :private-title="`Top Offers`" />
    <div class="items">
      <div
        v-for="item of items"
        :key="item.id"
        :data-code="item.code"
        class="item"
      >
        <div class="brand">
          <img class="brand-img" :src="item.imgUrl" :alt="item.imgAlt" />
        </div>
        <div class="off">
          <div class="type">{{ item.type }}</div>
          <p class="off-title">{{ item.title }}</p>
          <div class="info">
            <div v-if="item.uses.length" class="uses">{{ item.uses }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PublicTitle from '../public/title'

export default {
  name: 'TopOffers',
  components: {
    PublicTitle
  },
  data() {
    return {
      items: [
        {
          id: '1',
          type: 'Code',
          title: '$25 Off Your Purchase',
          uses: '1.5k uses today',
          imgUrl: '/images/airbnb.com-coupons.jpg',
          imgAlt: 'Airbnb',
          code: ''
        },
        {
          id: '2',
          type: 'Details',
          title: 'Friends & Family Sale! Take 20% Off',
          uses: '13k uses today',
          imgUrl: '/images/kohls.com-coupons.jpg',
          imgAlt: "Kohl's",
          code: ''
        },
        {
          id: '3',
          type: 'Code',
          title: 'Extra 25% Off Your Purchase of $40 Or More',
          uses: '1.7k uses today',
          imgUrl: '/images/bedbathandbeyond.com-coupons.jpg',
          imgAlt: 'Bed Bath & Beyond®',
          code: ''
        },
        {
          id: '4',
          type: 'Code',
          title: 'Up to 30% Off With Amazon Coupons And Promo Codes',
          uses: '2.4k uses today',
          imgUrl: '/images/papajohns.com-coupons.jpg',
          imgAlt: "Papa John's",
          code: ''
        },
        {
          id: '5',
          type: 'Code',
          title: '16% Off One Order ',
          uses: '2.7k uses today',
          imgUrl: '/images/doordash.com-coupons.jpg',
          imgAlt: 'DoorDash',
          code: ''
        },
        {
          id: '6',
          type: 'Code',
          title: '50% Off Menu-priced Pizzas at Participating Locations',
          uses: '1.8k uses today',
          imgUrl: '/images/bestbuy.com-coupons.jpg',
          imgAlt: 'Best Buy',
          code: ''
        },
        {
          id: '7',
          type: 'Code',
          title: '$25 Off Your Purchase',
          uses: '1.5k uses today',
          imgUrl: '/images/airbnb.com-coupons.jpg',
          imgAlt: 'Airbnb',
          code: ''
        },
        {
          id: '8',
          type: 'Details',
          title: 'Friends & Family Sale! Take 20% Off',
          uses: '13k uses today',
          imgUrl: '/images/kohls.com-coupons.jpg',
          imgAlt: "Kohl's",
          code: ''
        },
        {
          id: '9',
          type: 'Code',
          title: 'Extra 25% Off Your Purchase of $40 Or More',
          uses: '1.7k uses today',
          imgUrl: '/images/bedbathandbeyond.com-coupons.jpg',
          imgAlt: 'Bed Bath & Beyond®',
          code: ''
        },
        {
          id: '10',
          type: 'Code',
          title: 'Up to 30% Off With Amazon Coupons And Promo Codes',
          uses: '2.4k uses today',
          imgUrl: '/images/papajohns.com-coupons.jpg',
          imgAlt: "Papa John's",
          code: ''
        },
        {
          id: '11',
          type: 'Code',
          title: '16% Off One Order ',
          uses: '2.7k uses today',
          imgUrl: '/images/doordash.com-coupons.jpg',
          imgAlt: 'DoorDash',
          code: ''
        },
        {
          id: '12',
          type: 'Code',
          title: '50% Off Menu-priced Pizzas at Participating Locations',
          uses: '1.8k uses today',
          imgUrl: '/images/bestbuy.com-coupons.jpg',
          imgAlt: 'Best Buy',
          code: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.top-offers {
  padding-bottom: 4%;
}
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.item {
  width: 24%;
  height: 0;
  padding-bottom: 24%;
  margin-bottom: 0.5%;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  cursor: pointer;
}
.brand {
  width: 90%;
  height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.off {
  width: 90%;
  margin: 0 auto;
}
.brand-img {
  max-width: 60%;
  max-height: 60%;
}
.type {
  font-size: 14px;
  color: #10b48a;
}
.off-title {
  color: #555;
  font-size: 16px;
  line-height: 1.5;
  max-height: 48px;
  min-height: 48px;
  overflow: hidden;
}
.info {
  display: flex;
  justify-content: space-between;
  color: #d3d3d3;
  font-size: 14px;
}
@media screen and (max-width: 1100px) {
  .brand {
    height: 100px;
  }
  .item {
    padding-bottom: 0;
    height: auto;
  }
}
@media screen and (max-width: 1100px) {
  .item {
    width: 48%;
  }
}
</style>
