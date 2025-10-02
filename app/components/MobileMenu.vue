<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

defineProps<{
  items?: DropdownMenuItem[];
}>();
</script>

<template>
  <UDropdownMenu
    size="xl"
    :items="items"
    :content="{
      align: 'center',
      side: 'bottom',
      sideOffset: 30,
    }"
  >
    <UButton icon="i-lucide-menu" variant="link" color="neutral" />
  </UDropdownMenu>
</template>
