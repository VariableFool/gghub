<template>
  <section class="h-screen flex items-center">
    <video
      ref="videoPlayer"
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>

    <div class="mx-auto px-4 py-20 text-center z-10">
      <p
        class="text-4xl md:text-7xl font-extrabold font-[Comfortaa] max-w-3xl bg-gradient-to-b from-blue-500 via-white to-yellow-500 bg-clip-text text-transparent pb-3"
      >
        Full-stack разработка <br />и 1С решения
      </p>
    </div>
  </section>

  <section class="py-16 h-screen flex items-center">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-100">Что предлагаю</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          class="bg-gray-900/80 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div class="text-4xl mb-4">🌐</div>
          <h3 class="text-xl font-bold mb-4 text-gray-100">Веб-разработка</h3>
          <p class="text-gray-200">Современные full-stack приложения на Vue.js, Nuxt и Node.js</p>
        </div>

        <div
          class="bg-gray-900/80 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div class="text-4xl mb-4">🤖</div>
          <h3 class="text-xl font-bold mb-4 text-gray-100">1С Автоматизация</h3>
          <p class="text-gray-200">Бизнес-процессы, интеграции и доработки платформы 1С</p>
        </div>

        <div
          class="bg-gray-900/80 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div class="text-4xl mb-4">🚀</div>
          <h3 class="text-xl font-bold mb-4 text-gray-100">SaaS решения</h3>
          <p class="text-gray-200">Готовые облачные сервисы с подпиской для вашего бизнеса</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 h-screen flex items-center">
    <div class="container mx-auto px-4">
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
interface HTMLVideoElement {
  playbackRate: number;
}

const videoPlayer = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.playbackRate = 0.75;
  }
});
</script>
