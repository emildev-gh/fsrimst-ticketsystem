<template>
  <article
    :class="[
      'border-border cursor-pointer border bg-white px-5 pt-6 pb-5 transition-all duration-200',
      'hover:border-gold-light hover:shadow-card hover:-translate-y-0.5'
    ]"
    @click="handleSelect"
  >
    <div :class="['mb-3 flex items-center gap-1.5 text-[9.5px] tracking-[0.18em] uppercase', typeColorClass]">
      <div :class="['h-[5px] w-[5px] rounded-full', pipColorClass]"></div>
      {{ typeLabel }}
    </div>

    <h3 class="font-display text-text mb-1 text-[21px] font-normal">{{ title }}</h3>

    <div class="text-text-muted mb-4 text-xs">
      <strong class="font-display text-text block text-2xl leading-[1.1] font-normal">{{ price }}</strong>
      {{ description }}
    </div>

    <ul class="mb-5 flex list-none flex-col gap-1.5">
      <li
        v-for="feature in features"
        :key="feature"
        class="text-text-muted before:bg-gold-light flex items-start gap-2 text-xs before:mt-[5px] before:h-[3px] before:w-[3px] before:rounded-full before:content-['']"
      >
        {{ feature }}
      </li>
    </ul>

    <button
      type="button"
      :class="[
        'w-full cursor-pointer border px-0 py-2.5 text-center text-[10.5px] tracking-[0.14em] uppercase transition-colors duration-200',
        buttonClass
      ]"
      @click.stop="handleSelect"
    >
      {{ actionLabel }}
    </button>
  </article>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  type Variant = 'free' | 'gold'

  const props = defineProps<{
    ticketKey: string
    variant: Variant
    typeLabel: string
    title: string
    price: string
    description: string
    features: string[]
    actionLabel: string
  }>()

  const emit = defineEmits<{
    select: [ticketKey: string]
  }>()

  const typeColorClass = computed(() => (props.variant === 'free' ? 'text-sage' : 'text-gold'))
  const pipColorClass = computed(() => (props.variant === 'free' ? 'bg-sage' : 'bg-gold'))
  const buttonClass = computed(() =>
    props.variant === 'free'
      ? 'border-border text-text hover:border-sage hover:text-sage'
      : 'border-gold bg-gold text-white hover:bg-gold-dark hover:border-gold-dark'
  )

  const handleSelect = () => {
    emit('select', props.ticketKey)
  }
</script>
