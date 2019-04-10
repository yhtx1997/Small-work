<template>
  <div class="logo">
    <nuxt-link to="/">LOGO</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PublicLogo',
  data() {
    return {
      logo: 'logo.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  a {
    color: #ffffff;
  }
}
</style>
