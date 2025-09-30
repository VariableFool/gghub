<template>
  <nav
    class="bg-gray-900/80 backdrop-blur-sm shadow-lg fixed mt-4 rounded-full ring-1 ring-gray-700 left-1/2 -translate-x-1/2 z-20"
  >
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center py-4 gap-6">
        <NuxtLink
          to="/"
          class="text-2xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-red-600 bg-clip-text text-transparent hover:brightness-200 transition-all"
        >
          GGHUB
        </NuxtLink>
        •
        <div class="hidden md:flex gap-6">
          <NuxtLink to="/" class="hover:text-red-400 transition-colors font-medium"
            >Главная</NuxtLink
          >
          •
          <NuxtLink to="/projects" class="hover:text-yellow-400 transition-colors font-medium"
            >Проекты</NuxtLink
          >
          •
          <NuxtLink to="/blog" class="hover:text-blue-400 transition-colors font-medium"
            >Блог</NuxtLink
          >
          •
          <NuxtLink to="/about" class="hover:text-violet-400 transition-colors font-medium"
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
