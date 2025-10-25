<template>
  <AppHeader />
  <Section1BG />
  <main class="w-[100vw] flex">
    <slot />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'GGHUB',
});
</script>
