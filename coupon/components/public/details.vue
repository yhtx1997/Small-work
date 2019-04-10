<template>
  <div v-if="this.$store.state.detailsShow" class="details-wrapper">
    <div class="details">
      <div class="close" @click="closeClick">x</div>
      <div class="info">
        <img
          :src="this.$store.state.coupon.imgUrl"
          :alt="this.$store.state.coupon.imgAlt"
        />
        <p class="title">{{ this.$store.state.coupon.title }}</p>
        <div class="operate">
          <div v-if="this.$store.state.coupon.code" class="copy">
            <p>{{ this.$store.state.coupon.code }}</p>
            <button>copy</button>
          </div>
          <a v-else :href="this.$store.state.coupon.to" class="goto">
            GO to {{ this.$store.state.coupon.imgAlt }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PublicDetails',
  methods: {
    ...mapActions(['setDetailsShow', 'setCoupon']),
    closeClick() {
      this.setDetailsShow(false)
      this.setCoupon(null)
      this.$router.replace('')
    }
  }
}
</script>

<style lang="scss" scoped>
.details-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  z-index: 16;
}
.details {
  position: relative;
  top: 2.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 94%;
  max-width: 800px;
  background-color: #fff;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  outline: none;
  z-index: 17;
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin: 0 auto;
  }
  .title {
    margin: 10px auto;
  }
}
</style>
