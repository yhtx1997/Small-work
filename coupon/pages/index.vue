<template>
  <section class="container">
    <banner :banner="data.banner" class="banner" />
    <index-content
      :brands="data.brands"
      :discount="data.discount"
      :code="data.code"
      class="index-content"
    />
    <public-details />
  </section>
</template>

<script>
import Banner from '@/components/banner/banner'
import IndexContent from '@/components/content/content'
import PublicDetails from '@/components/public/details'

export default {
  components: {
    Banner,
    IndexContent,
    PublicDetails
  },
  data() {
    return {
      data: {}
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/index.json')
    return {
      data: data
    }
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
.top-offers,
.index-content {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
</style>
