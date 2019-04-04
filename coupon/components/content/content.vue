<template>
  <div class="content">
    <index-discount />
    <top-brnades />
    <top-offers />
  </div>
</template>

<script>
import TopOffers from './topoffers'
import IndexDiscount from './discount'
import TopBrnades from './brands'

export default {
  name: 'IndexContent',
  components: {
    IndexDiscount,
    TopBrnades,
    TopOffers
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1100px) {
  .discpunt,
  .top-brands {
    width: 768px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  .discpunt,
  .top-brands {
    width: 100%;
  }
}
</style>
