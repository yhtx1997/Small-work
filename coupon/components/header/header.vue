<template>
  <header>
    <nav>
      <public-logo />
      <public-search />
    </nav>
  </header>
</template>

<script>
import PublicLogo from './logo'
import PublicSearch from './search'

export default {
  name: 'PublicHeader',
  components: {
    PublicLogo,
    PublicSearch
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  height: 80px;
  font-size: 40px;
  background: #602d6c;
  color: #ffffff;
}
nav {
  display: flex;
  justify-content: space-between;
  width: 96%;
  max-width: 1100px;
}
</style>
