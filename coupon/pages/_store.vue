<template>
  <section class="container">
    <div v-if="show" :key="456">
      <h1>404—Sorry!</h1>
      <p>
        Sorry! We can't seem to find that page. But since you're here, check out
        some of our best deals below.
      </p>
    </div>
    <div v-else :key="798">
      {{ $route.params.store }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'Store',
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.$route.params.store !== 'store'
      ? (this.show = true)
      : (this.show = false)
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
