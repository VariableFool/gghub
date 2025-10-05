<template>
  <canvas id="canvas" class="canvas w-dvw h-dvh"></canvas>
</template>

<script setup>
import { init } from '../../public/js/sections1-legacy.js';

onMounted(() => {
  init();
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
