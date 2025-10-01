<template>
  <div class="wave">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div class="container mx-auto px-4">
    <h1 class="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-100">Что предлагаю</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div
        class="bg-gradient-to-tl to-violet-800/80 p-4 md:p-8 rounded-xl shadow-lg shadow-violet-800/50 text-center ring-1 ring-violet-600 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
      >
        <div class="text-4xl mb-4">🌐</div>
        <h3 class="text-sm md:text-xl font-bold mb-4 text-gray-100">Веб-разработка</h3>
        <p class="text-sm md:text-xl text-gray-200">
          Современные full-stack приложения на Vue.js, Nuxt и Node.js
        </p>
      </div>

      <div
        class="bg-gradient-to-tl to-violet-800/80 p-4 md:p-8 rounded-xl shadow-lg shadow-violet-800/50 text-center ring-1 ring-violet-600 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
      >
        <div class="text-4xl mb-4">🤖</div>
        <h3 class="text-sm md:text-xl font-bold mb-4 text-gray-100">1С Автоматизация</h3>
        <p class="text-sm md:text-xl text-gray-200">
          Бизнес-процессы, интеграции и доработки платформы 1С
        </p>
      </div>

      <div
        class="bg-gradient-to-tl to-violet-800/80 p-4 md:p-8 rounded-xl shadow-lg shadow-violet-800/50 text-center ring-1 ring-violet-600 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
      >
        <div class="text-4xl mb-4">🚀</div>
        <h3 class="text-sm md:text-xl font-bold mb-4 text-gray-100">SaaS решения</h3>
        <p class="text-sm md:text-xl text-gray-200">
          Готовые облачные сервисы с подпиской для вашего бизнеса
        </p>
      </div>
    </div>
  </div>
</template>

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
