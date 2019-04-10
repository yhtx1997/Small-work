<template>
  <div class="discpunt">
    <public-title :private-title="`Deals Up to 70% Off Are In Bloom`" />
    <div v-if="discount.length" class="items">
      <div v-for="item of discount" :key="item.id" class="item">
        <a :href="item.linkTo">
          <img :src="item.bgUrl" :alt="item.bgAlt" class="item-bg" />
          <div class="details">
            <div class="icon">
              <img :src="item.iconUrl" :alt="item.iconAlt" class="icon-img" />
            </div>
            <div class="text-wrapper">
              <h3 class="text-title">{{ item.title }}</h3>
              <p class="text-desc">{{ item.desc }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import PublicTitle from '../public/title'
export default {
  name: 'IndexDiscpunt',
  components: {
    PublicTitle
  },
  props: {
    discount: {
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
  width: 100%;
}
.item {
  position: relative;
  width: 32%;
}
.item-bg {
  width: 100%;
}
.details {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 78px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.8),
    #222
  );
  display: flex;
  box-sizing: border-box;
  padding: 10px;
}
.icon {
  width: 57px;
  height: 57px;
  margin-right: 10px;
}
.icon-img {
  width: 100%;
}
.text-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
}
.text-title {
  font-size: 18px;
  margin: 0 0 0.5em;
  padding: 0;
  font-weight: 400;
  line-height: 1.25;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media screen and (max-width: 768px) {
  .items {
    flex-wrap: wrap;
  }
  .item {
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px 10px;
  }
  .details {
    left: 10px;
    right: 10px;
    bottom: 10px;
  }
  .text-title {
    font-size: 16px;
  }
  .text-desc {
    font-size: 14px;
  }
}
</style>
