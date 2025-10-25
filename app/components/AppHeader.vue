<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

const login = ref(true);

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
]);
</script>

<template>
  <nav
    class="bg-gray-900/30 backdrop-blur-sm shadow-lg absolute md:fixed mt-4 rounded-full ring-1 ring-gray-700 left-1/2 transform -translate-x-1/2 z-20"
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
          <UModal
            :title="login ? 'Вход в аккаунт' : 'Регистрация аккаунта'"
            :ui="{
              content: 'bg-gray-900 ring-gray-700 w-96',
              header: 'border-gray-700',
              overlay: 'bg-black/80',
              title: 'text-white',
            }"
            :close="{
              icon: 'ic:baseline-close',
              variant: 'link',
              ui: { base: 'text-gray-500 hover:text-red-400 cursor-pointer' },
            }"
          >
            <UButton
              label="Войти"
              color="neutral"
              variant="link"
              :ui="{
                base: 'text-gray-300 m-0 p-0 text-md transition-none hover:text-green-400 cursor-pointer',
              }"
            />

            <template #body>
              <AuthModal v-model="login" />
            </template>
          </UModal>
        </div>

        <div class="md:hidden">
          <MobileMenu :items="items" />
        </div>
      </div>
    </div>
  </nav>
</template>
