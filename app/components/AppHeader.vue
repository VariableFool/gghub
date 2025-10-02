<template>
  <nav
    class="bg-gray-900/80 backdrop-blur-sm shadow-lg fixed mt-4 rounded-full ring-1 ring-gray-700 left-1/2 -translate-x-1/2 z-20"
  >
    <div class="container mx-auto px-6 font-[Inter]">
      <div class="flex justify-between items-center py-4 gap-6">
        <NuxtLink
          to="/"
          class="text-2xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-red-600 bg-clip-text text-transparent hover:brightness-200 transition-all"
        >
          GGHUB
        </NuxtLink>
        •
        <div class="hidden md:flex gap-9">
          <NuxtLink
            v-for="item in items"
            :to="item.href"
            :class="item.class"
            @click="item.onClick && item.onClick()"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <div class="md:hidden">
          <MobileMenu :items="items" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Главная',
    href: '/',
    onClick: scrollToTop,
    class: 'hover:text-blue-400',
    icon: 'i-lucide-home',
  },
  {
    label: 'Проекты',
    href: '/projects',
    class: 'hover:text-violet-400',
    icon: 'i-lucide-briefcase',
  },
  {
    label: 'Блог',
    href: '/blog',
    class: 'hover:text-orange-400',
    icon: 'i-lucide-book-open',
  },
  {
    label: 'Обо мне',
    href: '/about',
    class: 'hover:text-red-400',
    icon: 'i-lucide-user',
  },
  {
    label: 'Войти',
    href: '/login',
    class: 'hover:text-green-400',
    icon: 'i-lucide-log-in',
  },
]);
</script>
