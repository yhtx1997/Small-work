<template>
  <div class="top-offers">
    <public-title :private-title="`Top Offers`" />
  </div>
</template>

<script>
import PublicTitle from '../public/title'

export default {
  name: 'TopOffers',
  components: {
    PublicTitle
  }
}
</script>

<style lang="scss" scoped></style>
