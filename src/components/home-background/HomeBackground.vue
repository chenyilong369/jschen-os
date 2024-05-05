<template>
  <div class="background-picture">
    <img src="https://unsplash.it/1600/900?random"/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.background-picture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  img {
    width: 100vw;
  }
  z-index: -100;
}
</style>
