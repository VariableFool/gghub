<template>
  <nav
    class="bg-gray-950/60 backdrop-blur-sm shadow-lg fixed z-10 mt-4 rounded-3xl ring-1 ring-gray-700 left-1/2 translate-x-[-50%]"
  >
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center py-4 gap-6">
        <!-- <NuxtLink
          to="/"
          class="text-2xl text-blue-400 font-bold hover:text-blue-300 transition-colors"
        >
          GGHUB
        </NuxtLink> -->
        <div class="hover:brightness-125 cursor-pointer" @click="$router.push('/')">
          <NuxtImg src="logo.png" alt="GGHUB Logo" width="140" height="30" />
        </div>
        •
        <div class="hidden md:flex gap-6">
          <NuxtLink to="/" class="hover:text-blue-400 transition-colors font-medium"
            >Главная</NuxtLink
          >
          •
          <NuxtLink to="/projects" class="hover:text-blue-400 transition-colors font-medium"
            >Проекты</NuxtLink
          >
          •
          <NuxtLink to="/blog" class="hover:text-blue-400 transition-colors font-medium"
            >Блог</NuxtLink
          >
          •
          <NuxtLink to="/about" class="hover:text-blue-400 transition-colors font-medium"
            >Обо мне</NuxtLink
          >
        </div>

        <button class="md:hidden text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
