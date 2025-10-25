<script setup lang="ts">
onMounted(() => {
  document.querySelectorAll<HTMLAnchorElement>('a').forEach((btn) => {
    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX * 3 - rect.left;
      btn.style.setProperty('--x', `${x}deg`);
    });
  });
});
</script>

<template>
  <div class="z-50 fixed bottom-36 left-1/2 transform -translate-x-1/2">
    <a
      href="#"
      class="relative w-[150px] h-[35px] inline-block rounded-full [&>i]:absolute [&>i]:inset-[-2px] [&>i]:block [&>i]:rounded-full"
    >
      <i></i><i></i>
      <span
        class="absolute top-0 left-0 w-full h-full rounded-full flex justify-center items-center bg-[rgba(14,21,56,0.65)] uppercase text-white tracking-[2px]"
        >Начать</span
      >
    </a>
  </div>
</template>

<style scoped>
a i,
a i:nth-child(2) {
  background: linear-gradient(var(--x), #e347ff, transparent, transparent, #ff5c50);
}

a i:nth-child(2) {
  filter: blur(10px);
}
</style>
