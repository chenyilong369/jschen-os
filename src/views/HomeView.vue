<template>
  <div class="home">
    <HomeBackground/>
    <HomeLayout/>
    <DockComponent/>
  </div>
</template>

<script lang="ts" setup>
import HomeBackground from '@/components/home-background/HomeBackground.vue'
import HomeLayout from '@/components/home-layout/HomeLayout.vue'
import DockComponent from '@/components/dock/DockComponent.vue'

</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
}
</style>
