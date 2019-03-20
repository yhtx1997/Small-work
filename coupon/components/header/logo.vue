<template>
  <div><img :src="logo" alt="" /></div>
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

<style lang="scss" scoped></style>
