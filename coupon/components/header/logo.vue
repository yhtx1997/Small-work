<template>
  <div class="logo">
    <!-- <img :src="logo" alt="" /> -->
    LOGO
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
  cursor: pointer;
  align-self: center;
}
</style>
