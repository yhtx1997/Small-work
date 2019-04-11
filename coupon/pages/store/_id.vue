<template>
  <div class="store">
    <public-title :private-title="title" />
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
      title: ''
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/store.json')
    return {
      data: data.store
    }
  },
  mounted() {
    const queryid = this.$route.params.id
    this.code = this.data.filter(e => e.class === queryid)
    this.title = this.code[0].imgAlt
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
