<template>
  <header class="my-10 flex flex-col items-center">
    <Divider mode="dot" />
    <slot />
  </header>
</template>

<script lang="ts" setup>
  import Divider from '@/components/utility/Divider.vue'
</script>
