<template>
  <div v-if="isDev" class="mx-auto max-w-2xl px-6 py-12">
    <div class="mb-12 flex items-center gap-4">
      <div class="bg-border h-px flex-1"></div>
      <div class="bg-gold h-1 w-1 flex-shrink-0 rounded-full"></div>
      <div class="bg-border h-px flex-1"></div>
    </div>

    <p class="text-muted mb-4 text-xs tracking-wide uppercase">Hochschule Kaiserslautern · Fachbereich I / MST</p>
    <h1 class="font-playfair mb-2 text-5xl font-bold">Absolventen<em class="text-gold italic">feier</em></h1>
    <p class="text-muted mb-12 text-xl">Frühling 2025</p>

    <div class="mb-12 space-y-2">
      <div class="flex items-center gap-4 text-sm">
        <span class="text-muted text-xs uppercase">Datum</span>
        <div class="bg-border h-3 w-px"></div>
        <span class="text-text">Samstag, 14. Juni 2025</span>
      </div>
      <div class="flex items-center gap-4 text-sm">
        <span class="text-muted text-xs uppercase">Uhrzeit</span>
        <div class="bg-border h-3 w-px"></div>
        <span class="text-text">18:00 Uhr</span>
      </div>
      <div class="flex items-center gap-4 text-sm">
        <span class="text-muted text-xs uppercase">Ort</span>
        <div class="bg-border h-3 w-px"></div>
        <span class="text-text">Festhalle Zweibrücken</span>
      </div>
    </div>

    <div class="mb-12 flex items-center gap-2">
      <div class="bg-border h-px flex-1"></div>
      <div class="flex gap-2">
        <svg class="h-3 w-3" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="2" fill="currentColor" class="text-rose" />
        </svg>
        <svg class="h-3 w-3" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="2" fill="currentColor" class="text-sun" />
        </svg>
        <svg class="h-3 w-3" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="2" fill="currentColor" class="text-lav" />
        </svg>
        <svg class="h-3 w-3" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="2" fill="currentColor" class="text-sage" />
        </svg>
        <svg class="h-3 w-3" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="2" fill="currentColor" class="text-rose" />
        </svg>
      </div>
      <div class="bg-border h-px flex-1"></div>
    </div>

    <div class="mb-12 grid grid-cols-2 gap-6">
      <div class="border-border rounded-lg border p-6">
        <div class="text-text mb-4 flex items-center gap-2 text-sm">
          <div class="bg-sage h-1.5 w-1.5 rounded-full"></div>
          Kostenlos
        </div>
        <h3 class="font-playfair mb-4 text-2xl font-bold">Eintritt</h3>
        <div class="mb-6">
          <strong class="text-text text-2xl">0 €</strong>
        </div>
        <ul class="text-text mb-6 space-y-1 text-sm">
          <li>Zugang zur Veranstaltung</li>
          <li>Freie Sitzplatzwahl vor Ort</li>
          <li>Ticket per E-Mail</li>
        </ul>
        <button class="border-border text-text hover:border-sage hover:text-sage w-full rounded border py-3 transition">
          Reservieren
        </button>
      </div>

      <div class="border-border rounded-lg border p-6">
        <div class="text-text mb-4 flex items-center gap-2 text-sm">
          <div class="bg-gold h-1.5 w-1.5 rounded-full"></div>
          15 €
        </div>
        <h3 class="font-playfair mb-4 text-2xl font-bold">Sitzplatz</h3>
        <div class="mb-6">
          <strong class="text-text text-2xl">15 €</strong>
        </div>
        <ul class="text-text mb-6 space-y-1 text-sm">
          <li>Garantierter Sitzplatz</li>
          <li>Wunschplatz wählbar</li>
          <li>Ticket per E-Mail</li>
        </ul>
        <button class="bg-gold hover:bg-gold-dk w-full rounded py-3 text-white transition">Platz wählen</button>
      </div>
    </div>

    <p class="text-muted text-center text-xs">
      Fragen? <a href="mailto:fsmr@hs-kl.de" class="text-gold hover:text-gold-dk">fsmr@hs-kl.de</a><br />
      Hochschule Kaiserslautern · Fachbereich I/MST
    </p>
  </div>
</template>

<script lang="ts" setup>
  const isDev = import.meta.env.DEV
</script>

<style scoped>
  h1 em {
    font-style: italic;
  }
</style>
