<template>
  <div class="base">
    <public-header />
    <nuxt />
    <public-footer />
  </div>
</template>

<script>
import PublicHeader from '@/components/header/header'
import PublicFooter from '@/components/footer/footer'

export default {
  components: {
    PublicHeader,
    PublicFooter
  }
}
</script>

<style lang="scss">
.base {
  padding-bottom: 50px;
  position: relative;
}
</style>
