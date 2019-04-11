<template>
  <div class="base">
    <public-header />
    <nuxt />
    <public-footer />
    <div class="BackTop" @click="backTop">
      <div></div>
    </div>
  </div>
</template>

<script>
import PublicHeader from '@/components/header/header'
import PublicFooter from '@/components/footer/footer'

export default {
  components: {
    PublicHeader,
    PublicFooter
  },
  methods: {
    backTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss">
.base {
  padding-bottom: 50px;
  position: relative;
}
.BackTop {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  // opacity: 0;
  z-index: 100;
  transition: 0.2s;
  transform: translateZ(0);
  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.6);
  }
  div {
    display: inline-block;
    margin: 20px 0 0 17px;
    transform: rotate(-45deg);
    &::before {
      content: '';
      display: block;
      height: 16px;
      width: 16px;
      border-style: solid;
      border-width: 3px 3px 0 0;
      border-color: #fff #fff transparent transparent;
    }
  }
}
</style>
