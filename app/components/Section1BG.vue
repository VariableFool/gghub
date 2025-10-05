<template>
  <canvas id="canvas" class="canvas w-dvw h-dvh"></canvas>
</template>

<script setup>
import { init } from '../../public/js/sections1-legacy.js';

onMounted(() => {
  const maxDist = window.innerWidth < 768 ? 200 : 400;
  const pointsAmount = window.innerWidth < 768 ? 40 : 80;
  init(maxDist, pointsAmount);
});
</script>

<style scoped>
.canvas {
  cursor: none;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, #36003b, #000129);
}
</style>
