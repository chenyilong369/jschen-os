<template>
  <div class="grid">
    <svg v-for="(a, index) in arr" :key="index" class="icon">
      <use xlink:href="#icon-directory"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
const arr = new Array(30).fill(0)
</script>

<style lang="scss" scoped>
.grid {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(16, 6.25%);
  grid-template-rows: repeat(10, 10%);
  align-items: center;
  justify-items: center;
  .icon {
    width: 40px;
    height: 40px;
  }
}
</style>
