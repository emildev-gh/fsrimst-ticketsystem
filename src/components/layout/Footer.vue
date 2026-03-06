<template>
  <footer class="text-primary-muted w-full pt-8 pb-8 text-center text-xs">
    <Divider />
    <slot />
    <p>Noch Fragen? Kontaktieren Sie uns: <a href="">email@email.com</a></p>
  </footer>
</template>

<script lang="ts" setup>
  import Divider from '@/components/utility/Divider.vue'
</script>
