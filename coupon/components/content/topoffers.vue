<template>
  <div class="top-offers">
    <public-title :private-title="`Top Offers`" />
    <public-code :code="code" />
  </div>
</template>

<script>
import PublicTitle from '../public/title'
import PublicCode from '../public/code'

export default {
  name: 'TopOffers',
  components: {
    PublicTitle,
    PublicCode
  },
  props: {
    code: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
