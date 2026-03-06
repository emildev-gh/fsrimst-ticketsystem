<template>
  <div class="flex min-h-screen flex-col items-center">
    <div class="w-[90%] max-w-[600px]">
      <Header>
        <slot name="header" />
      </Header>
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Header from '@/components/layout/Header.vue'
  import Footer from '@/components/layout/Footer.vue'
</script>
