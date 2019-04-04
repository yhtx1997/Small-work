<template>
  <h1 class="title">
    {{ privateTitle }}
  </h1>
</template>

<script>
export default {
  name: 'PublicTitle',
  props: {
    privateTitle: {
      type: String,
      required: true,
      default: '请设置标题!'
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 0;
  padding: 48px 0 20px;
  color: #555;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .title {
    font-size: 18px;
    padding: 20px 0 10px;
  }
}
</style>
