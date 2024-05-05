<template>
  <div ref="dock" id="dock" @mousemove="dockMouseMove" @mouseleave="dockMouseLeave">
    <div class="icons">
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
      <img src="../../assets/logo.png" class="icon" />
    </div>
    <div class="background"></div>
  </div>

</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useDockElement, useDockBackgroundWidth } from '@/hooks/HtmlElementOperator'

const dock = ref<HTMLElement | null>(null)

const setDockAnimation = (obj: { clientX: number; clientY: number; }) => {
  const widthSum = useDockElement(dock.value, obj)
  useDockBackgroundWidth(dock.value, widthSum)
}

const dockMouseMove = (e: { clientX: number; clientY: number; }) => {
  setDockAnimation(e)
}

const dockMouseLeave = () => {
  setDockAnimation({ clientX: Infinity, clientY: Infinity })
}

onMounted(() => {
  setDockAnimation({ clientX: Infinity, clientY: Infinity })
})

</script>

<style lang="scss" scoped>
#dock {
  position: absolute;
  /*position: fixed;*/
  width: 100%;
  height: auto;
  bottom: 0;

  .background {
    width: 100%;
    height: 80px;
    bottom: 0;
    position: relative;
    border-radius: 30px;
    margin: 0 auto;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .icons {
    font-size:0;
    width: 100%;
    height: auto;
    bottom: 5px;
    position: absolute;
    z-index: 15;
    text-align: center;
    .icon {
      width: 70px;
      height: 70px;
    }
  }
}

</style>
