<template>
  <section class="container">
    <banner class="banner" />
    <index-content class="index-content" />
  </section>
</template>

<script>
import Banner from '@/components/banner/banner'
import IndexContent from '@/components/content/content'

export default {
  components: {
    Banner,
    IndexContent
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #f1f1f1;
}
.banner {
  width: 100%;
}
.index-content {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
</style>
