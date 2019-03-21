<template>
  <footer>
    <div>
      Footer
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PublicFooter'
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #602d6c;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
div {
  display: flex;
  justify-content: center;
  max-width: 1100px;
  width: 96%;
  font-size: 14px;
  color: #ffffff;
}
</style>
