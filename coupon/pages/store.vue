<template>
  <div class="store">
    <public-title :private-title="`Store`" />
    <public-code class="store-right" />
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
