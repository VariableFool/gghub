<template>
  <start-button :onClick="scrollToNext" :button-text="startButtonText" />
  <section id="section1" class="h-dvh flex items-center">
    <section1 />
  </section>

  <section id="section2" class="py-16 h-dvh flex items-center">
    <section2 />
  </section>

  <section id="section3" class="py-16 h-[calc(100dvh-88px)] flex items-center">
    <section3 />
  </section>
</template>

<script setup lang="ts">
const sections = ['section1', 'section2', 'section3'];
const currentIndex = ref(0);
const startButtonText = computed(() => {
  if (currentIndex.value === 0) {
    return 'Начать ↓';
  } else if (currentIndex.value === 2) {
    return 'В начало ↑';
  } else {
    return 'Продолжить ↓';
  }
});

const scrollToNext = () => {
  const nextIndex = (currentIndex.value + 1) % sections.length;
  const nextSection = document.getElementById(sections[nextIndex]!);
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
};

interface HTMLVideoElement {
  playbackRate: number;
}

const videoPlayer = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.playbackRate = 0.75;
  }
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // центр экрана

    sections.forEach((id, index) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          currentIndex.value = index;
        }
      }
    });
  });
});
</script>
