<script setup lang="ts">
const { data: posts } = await useAsyncData(() =>
  queryCollection('content').all()
)

// Sort by date (assuming H1 is a date like `September 07, 2025`)
const timeline = computed(() =>
  posts.value?.sort((a, b) => {
    const dateA = new Date(a.title) // a.title is "# September 07, 2025"
    const dateB = new Date(b.title)
    return dateB.getTime() - dateA.getTime() // newest first
  }) || []
)
</script>

<template>
  <UContainer>
    <div class="relative border-l-2 border-gray-300 dark:border-gray-700 ml-8">
      <div
        v-for="entry in timeline"
        :key="entry._id"
        class="mb-12 relative"
      >
        <!-- Timeline Dot -->
        <div
          class="absolute -left-[14px] top-2 w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 border-4 border-white dark:border-gray-900"
        ></div>

        <!-- Flex Layout -->
        <UFlex class="items-start gap-8">
          <!-- Left: Date -->
          <div class="w-40 text-right pr-4 font-semibold text-gray-700 dark:text-gray-300">
            {{ entry.title }}
          </div>

          <!-- Right: Content Card -->
          <UCard class="flex-1 shadow-sm border border-gray-200 dark:border-gray-700">
            <ContentRenderer :value="entry" />
          </UCard>
        </UFlex>
      </div>
    </div>
  </UContainer>
</template>
