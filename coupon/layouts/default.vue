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
body,
div,
ul,
input,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
  list-style: none;
  border: none;
  font-family: Avenir Next, Calibri, Helvetica, Roboto, sans-serif;
}
.base {
  padding-bottom: 50px;
  position: relative;
}
</style>
