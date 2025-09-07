<script setup lang="ts">
const { data: posts } = await useAsyncData(() =>
  queryCollection('content').all()
)

// Sort by date (newest first, assuming H1 = date)
const timeline = computed(() =>
  posts.value?.sort((a, b) => {
    const dateA = new Date(a.title)
    const dateB = new Date(b.title)
    return dateB.getTime() - dateA.getTime()
  }) || []
)
</script>

<template>
  <UContainer>
    <div class="max-w-2xl mx-auto py-8">
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

        <div class="space-y-8">
          <div
            v-for="entry in timeline"
            :key="entry._id"
            class="relative flex items-start gap-6"
          >
            <!-- Timeline Dot -->
            <div class="relative z-10">
              <div class="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
                <div class="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-500" />
              </div>
            </div>

            <!-- Content Card -->
            <div class="flex-1 min-w-0">
              <!-- Date Header -->
              <div class="mb-2">
                <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {{ entry.title }}
                </span>
              </div>

              <!-- Card -->
              <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm px-6 transition-all duration-200 hover:shadow-md">
                <div class="prose prose-gray dark:prose-invert max-w-none prose-sm">
                  <ContentRenderer :value="entry" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
