<template>
  <div v-if="code.length" class="items">
    <div
      v-for="item of code"
      :key="item.id"
      class="item"
      @click="itemClick(item)"
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
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    code: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions(['setDetailsShow', 'setCoupon']),
    itemClick(info) {
      const coupon = info
      this.setDetailsShow(true)
      this.setCoupon(coupon)

      this.$router.push({
        name: '',
        query: {
          codeid: coupon.linkTo
        }
      })
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
