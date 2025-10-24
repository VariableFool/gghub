<script setup lang="ts">
const login = defineModel({ type: Boolean });

const formData = ref({
  email: '',
  password: '',
  confirmPassword: '',
});

const validateEmail = (value: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value.toLowerCase()) || 'Введите корректный email';
};

const inputs = computed(() => [
  { key: 'email', placeholder: 'Email', type: 'email', autocomplete: 'email' },
  {
    key: 'password',
    placeholder: 'Пароль',
    type: 'password',
    autocomplete: 'current-password',
  },
  {
    key: 'confirmPassword',
    placeholder: 'Повторите пароль',
    type: 'password',
    class: login.value ? 'hidden' : '',
    autocomplete: 'new-password',
  },
]);
</script>

<template>
  <div class="space-y-4">
    <UInput
      v-for="input in inputs"
      :key="input.key"
      :autocomplete="input.autocomplete"
      :type="input.type"
      :placeholder="input.placeholder"
      :class="input.class"
      v-model="formData[input.key as keyof typeof formData]"
      class="w-full"
      color="info"
      size="xl"
      :ui="{
        base: 'bg-transparent text-gray-200 ring-gray-700 focus-visible:ring-violet-500',
      }"
    />
    <UButton
      :label="login ? 'Войти' : 'Регистрация'"
      :ui="{
        label: 'font-black text-white w-full',
        base: 'w-full rounded-full cursor-pointer bg-violet-700 hover:bg-violet-800 active:bg-violet-900',
      }"
      color="primary"
      variant="solid"
      size="xl"
    />
    <USeparator class="" label="ИЛИ" :ui="{ border: 'border-gray-700', label: 'text-gray-600' }" />
    <UButton
      :label="login ? 'Зарегистрироваться' : 'Уже есть аккаунт? Войти'"
      :ui="{
        label: 'w-full text-white',
        base: 'w-full rounded-full cursor-pointer ring-violet-700 hover:bg-violet-800/20 active:bg-violet-900/20',
      }"
      color="primary"
      variant="outline"
      size="xl"
      @click="login = !login"
    />
  </div>
</template>
