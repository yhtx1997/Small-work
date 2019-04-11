<template>
  <div class="store">
    <public-title :private-title="`Results for &quot;${query}&quot;`" />
    <public-code :code="code" class="store-right" />
    <public-details />
  </div>
</template>

<script>
import PublicDetails from '@/components/public/details'
import PublicTitle from '@/components/public/title'
import PublicCode from '@/components/public/code'

export default {
  name: 'Store',
  components: {
    PublicTitle,
    PublicCode,
    PublicDetails
  },
  data() {
    return {
      code: [],
      query: ''
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/store.json')
    return {
      data: data.store
    }
  },
  mounted() {
    if (this.$route.params.query) {
      this.query = this.$route.params.query
      this.code = this.data.filter(
        e =>
          e.title.toLowerCase().indexOf(this.query.toLowerCase()) !== -1 ||
          e.imgAlt.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
      )
    } else {
      this.query = ' '
    }
  }
}
</script>

<style lang="scss" scoped>
.store {
  min-height: 800px;
}
.store-right {
  width: 96%;
  margin: 0 auto;
  max-width: 1100px;
}
</style>
