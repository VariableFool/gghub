<template>
  <div class="wave">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div class="container mx-auto px-4">
    <h1
      class="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-100"
      style="text-shadow: 2px 2px 0 #ec4899"
    >
      Что предлагаю
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 place-items-center">
      <div
        v-for="(item, idx) in cardItems"
        :key="idx"
        class="group relative w-full h-32 md:h-56 cursor-pointer [perspective:1000px]"
      >
        <div
          class="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
        >
          <!-- Передняя сторона -->
          <div
            class="absolute inset-0 bg-gradient-to-tl to-violet-800/80 p-6 rounded-xl shadow-lg shadow-violet-800/50 text-center ring-1 ring-violet-600 flex flex-col items-center justify-center [backface-visibility:hidden]"
          >
            <div class="text-2xl md:text-4xl md:mb-4">{{ item.icon }}</div>
            <h3 class="text-lg font-bold mb-3 text-gray-100">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-200">
              {{ item.description }}
            </p>
          </div>

          <!-- Задняя сторона -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-pink-600/80 to-fuchsia-800/80 p-6 rounded-xl shadow-lg shadow-pink-800/50 text-center ring-1 ring-pink-600 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]"
          >
            <h3 class="text-lg font-bold text-gray-100 mb-3">
              {{ item.backTitle }}
            </h3>
            <p class="text-sm text-gray-200">
              {{ item.backDescription }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cardItems = [
  {
    icon: '🌐',
    title: 'Веб-разработка',
    description: 'Современные full-stack приложения на Vue.js, Nuxt и Node.js',
    backTitle: 'Упор на качество',
    backDescription: 'Чистый код, адаптивный дизайн и высокая производительность',
  },
  {
    icon: '🤖',
    title: '1С Автоматизация',
    description: 'Бизнес-процессы, интеграции и доработки платформы 1С',
    backTitle: 'Эффективность',
    backDescription: 'Ускорение работы и оптимизация бизнес-процессов',
  },
  {
    icon: '🚀',
    title: 'SaaS решения',
    description: 'Готовые облачные сервисы с подпиской для вашего бизнеса',
    backTitle: 'Масштабируемость',
    backDescription: 'Легкий старт и быстрый рост без лишних затрат',
  },
  {
    icon: '💾',
    title: 'Хостинг на 1 месяц',
    description: 'Бесплатный тестовый хостинг для ваших проектов',
    backTitle: 'Удобство',
    backDescription: 'Быстрый старт, простая настройка и поддержка',
  },
];
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
