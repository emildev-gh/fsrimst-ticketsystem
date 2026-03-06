<template>
  <header class="flex flex-col items-center">
    <Divider />
    <slot />
  </header>
</template>

<script lang="ts" setup>
  import Divider from '@/components/utility/Divider.vue'
</script>
