<template>
  <div class="z-50 fixed bottom-20 left-1/2 transform -translate-x-1/2 my-shadow">
    <button
      @click="props.onClick"
      class="py-8 px-10 rounded-2xl bg-violet-800 text-sm md:text-xl text-white start-button shake-animation transition-all"
    >
      {{ props.buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  onClick?: () => void;
  buttonText?: string;
}>();
</script>

<style scoped>
.start-button {
  cursor: pointer;
  clip-path: polygon(0 33%, 100% 16%, 85% 75%, 12% 66%);
  font-weight: 900;
}

.my-shadow {
  filter: drop-shadow(10px 5px 0px rgb(204, 0, 255));
}

.shake-animation {
  animation: buttonShake 2s ease-in-out infinite;
}

@keyframes buttonShake {
  0%,
  100% {
    transform: translateX(0) rotate(0deg);
  }
  2%,
  18% {
    transform: translateX(-3px) rotate(-1deg);
  }
  4%,
  16% {
    transform: translateX(3px) rotate(1deg);
  }
  6%,
  14% {
    transform: translateX(-2px) rotate(-0.5deg);
  }
  8%,
  12% {
    transform: translateX(2px) rotate(0.5deg);
  }
  10% {
    transform: translateX(0) rotate(0deg);
  }
}

.start-button:hover {
  animation: none;
  transform: scale(1.1);
}
</style>
