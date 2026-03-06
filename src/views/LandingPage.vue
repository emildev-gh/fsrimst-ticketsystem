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

    <section class="grid w-full max-w-[700px] grid-cols-1 gap-3.5 px-8 sm:grid-cols-2">
      <OrderItem
        ticket-key="seat"
        variant="gold"
        type-label="15 €"
        title="Sitzplatz"
        price="15 €"
        description="reservierter Wunschplatz"
        :features="['Garantierter Sitzplatz', 'Wunschplatz wählbar', 'Ticket per E-Mail']"
        action-label="Platz wählen"
        @select="handleOrderSelection"
      />

      <OrderItem
        ticket-key="free"
        variant="free"
        type-label="Kostenlos"
        title="Eintritt"
        price="0 €"
        description="freier Platz vor Ort"
        :features="[
          'Zugang zum Event der Hochschule',
          'Freie Sitzplatzwahl vor Ort',
          'Sektempfang, Vorträge der Hochschule und anschließende Zeugnisübergabe'
        ]"
        action-label="Reservieren"
        @select="handleOrderSelection"
      />
    </section>
  </Layout>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'

  import OrderItem from '@/components/OrderItem.vue'
  import Layout from '@/components/layout/Layout.vue'
  import Divider from '@/components/utility/Divider.vue'
  import { strings } from '@/assets/strings'

  const router = useRouter()

  const handleOrderSelection = (ticketKey: string) => {
    void router.push({ path: '/reservation', query: { ticket: ticketKey } })
  }
</script>
