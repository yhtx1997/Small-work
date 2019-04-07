<template>
  <div class="details-wrapper">
    <div class="details">details</div>
  </div>
</template>

<script>
export default {
  name: 'PublicDetails'
}
</script>

<style lang="scss" scoped>
.details-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  z-index: 16;
}
.details {
  position: relative;
  top: 2.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 94%;
  max-width: 800px;
  background-color: #fff;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  outline: none;
  z-index: 17;
}
</style>
