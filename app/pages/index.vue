<template>
  <start-button :onClick="scrollToNext" :button-text="startButtonText" />
  <section id="section1" class="h-screen flex items-center">
    <video
      ref="videoPlayer"
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-dvw h-dvh object-cover"
    >
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>

    <div class="mx-auto px-4 py-20 text-center z-10">
      <p
        class="text-6xl md:text-8xl font-extrabold font-[Comfortaa] max-w-3xl bg-gradient-to-b from-blue-500 via-white to-yellow-500 bg-clip-text text-transparent pb-3"
      >
        Full-stack разработка <br />и 1С решения
      </p>
    </div>
  </section>

  <section id="section2" class="py-16 h-screen flex items-center">
    <div class="wave">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-100">Что предлагаю</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          class="bg-gradient-to-tl to-violet-800/80 p-8 rounded-xl shadow-lg shadow-violet-800/50 text-center ring-1 ring-violet-600 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
        >
          <div class="text-4xl mb-4">🌐</div>
          <h3 class="text-xl font-bold mb-4 text-gray-100">Веб-разработка</h3>
          <p class="text-gray-200">Современные full-stack приложения на Vue.js, Nuxt и Node.js</p>
        </div>

        <div
          class="bg-gradient-to-tl to-violet-800/80 p-8 rounded-xl shadow-lg shadow-violet-800/50 text-center ring-1 ring-violet-600 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
        >
          <div class="text-4xl mb-4">🤖</div>
          <h3 class="text-xl font-bold mb-4 text-gray-100">1С Автоматизация</h3>
          <p class="text-gray-200">Бизнес-процессы, интеграции и доработки платформы 1С</p>
        </div>

        <div
          class="bg-gradient-to-tl to-violet-800/80 p-8 rounded-xl shadow-lg shadow-violet-800/50 text-center ring-1 ring-violet-600 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
        >
          <div class="text-4xl mb-4">🚀</div>
          <h3 class="text-xl font-bold mb-4 text-gray-100">SaaS решения</h3>
          <p class="text-gray-200">Готовые облачные сервисы с подпиской для вашего бизнеса</p>
        </div>
      </div>
    </div>
  </section>

  <section id="section3" class="py-16 h-[calc(100dvh-88px)] flex items-center">
    <div class="absolute left-0 w-full h-full overflow-hidden -z-30">
      <technology-b-g />
    </div>
    <div class="container mx-auto px-4 relative">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">
        Стек технологий
      </h2>
      <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        <span
          class="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors"
          >Vue.js</span
        >
        <span
          class="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >Nuxt</span
        >
        <span
          class="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-700 transition-colors"
          >1C</span
        >
        <span
          class="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors"
          >TypeScript</span
        >
        <span
          class="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >Node.js</span
        >
        <span
          class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >Tailwind CSS</span
        >
        <span
          class="bg-blue-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500 transition-colors"
          >Docker</span
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sections = ['section1', 'section2', 'section3'];
const currentIndex = ref(0);
const startButtonText = computed(() => {
  if (currentIndex.value === 2) {
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

<style scoped>
section .wave {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: #21006d;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  z-index: -1;
  overflow: hidden;
}
section .wave span {
  content: '';
  position: absolute;
  width: 325vh;
  height: 325vh;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
  background: #000;
}

section .wave span:nth-child(1) {
  border-radius: 45%;
  background: rgb(49, 0, 184);
  animation: animate 15s linear infinite;
}

section .wave span:nth-child(2) {
  border-radius: 40%;
  background: rgba(20, 20, 20, 0.5);
  animation: animate 20s linear infinite;
}
section .wave span:nth-child(3) {
  border-radius: 42.5%;
  background: rgba(20, 20, 20, 0.5);
  animation: animate 15s linear infinite;
}
@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
