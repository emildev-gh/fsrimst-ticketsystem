<template>
  <Layout>
    <template #header>
      <h6 class="text-gold text-xs font-medium tracking-wide uppercase">
        Hochschule Kaiserslautern · Fachbereich I / MST
      </h6>
      <h1 class="font-display text-text mt-4 mb-1.5 text-center text-5xl font-normal tracking-wide">
        Absolventen<em class="text-gold italic">feier</em>
      </h1>
      <h6 class="font-display text-muted text-gold text-center text-base italic">Frühling {{ strings.year }}</h6>
      <div class="mt-6 text-center text-xs">
        <p class="mt-2">
          <span class="text-gold tracking-widest uppercase">Datum</span><span class="mx-4">|</span> {{ strings.date }}
        </p>
        <p class="mt-2">
          <span class="text-gold tracking-widest uppercase">Uhrzeit</span><span class="mx-4">|</span> {{ strings.time }}
        </p>
        <p class="mt-2">
          <span class="text-gold tracking-widest uppercase">Ort</span><span class="mx-4">|</span> {{ strings.location }}
        </p>
      </div>
      <Divider mode="flower" />
    </template>
    Landing Page
  </Layout>
</template>

<script lang="ts" setup>
  import Layout from '@/components/layout/Layout.vue'
  import Divider from '@/components/utility/Divider.vue'
  import { strings } from '@/assets/strings'
</script>
