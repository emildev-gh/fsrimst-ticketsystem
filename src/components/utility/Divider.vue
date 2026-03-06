<template>
  <div class="flex h-20 w-full flex-row items-center justify-between">
    <div :class="lineClasses"></div>
    <div v-if="mode === 'dot'" class="bg-gold-light mx-3 h-1.5 w-1.5 flex-shrink-0 rounded-full"></div>
    <div v-else-if="mode === 'flower'" class="mx-3 flex gap-2">
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" fill="#d4847a" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#d4847a" opacity="0.7" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#d4847a" opacity="0.7" transform="rotate(72 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#d4847a" opacity="0.7" transform="rotate(144 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#d4847a" opacity="0.7" transform="rotate(216 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#d4847a" opacity="0.7" transform="rotate(288 10 10)" />
      </svg>
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" fill="#c9a84c" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#e8c96a" opacity="0.7" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#c9a84c" opacity="0.7" transform="rotate(72 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#e8c96a" opacity="0.7" transform="rotate(144 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#c9a84c" opacity="0.7" transform="rotate(216 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#e8c96a" opacity="0.7" transform="rotate(288 10 10)" />
      </svg>
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" fill="#9e8fb5" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#b5a8c8" opacity="0.7" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#9e8fb5" opacity="0.7" transform="rotate(72 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#b5a8c8" opacity="0.7" transform="rotate(144 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#9e8fb5" opacity="0.7" transform="rotate(216 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#b5a8c8" opacity="0.7" transform="rotate(288 10 10)" />
      </svg>
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" fill="#7a9e7e" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#8fb594" opacity="0.7" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#7a9e7e" opacity="0.7" transform="rotate(72 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#8fb594" opacity="0.7" transform="rotate(144 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#7a9e7e" opacity="0.7" transform="rotate(216 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#8fb594" opacity="0.7" transform="rotate(288 10 10)" />
      </svg>
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" fill="#d4847a" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#e09e96" opacity="0.7" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#d4847a" opacity="0.7" transform="rotate(72 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#e09e96" opacity="0.7" transform="rotate(144 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#d4847a" opacity="0.7" transform="rotate(216 10 10)" />
        <ellipse cx="10" cy="3" rx="2.5" ry="4" fill="#e09e96" opacity="0.7" transform="rotate(288 10 10)" />
      </svg>
    </div>
    <div :class="lineClasses"></div>
  </div>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      mode?: 'dot' | 'flower'
    }>(),
    {
      mode: 'dot'
    }
  )

  const lineClasses = 'bg-gold-light h-px w-full opacity-25'
</script>
