<script setup lang="ts">
const { data: post } = await useAsyncData(() =>
  queryCollection('content').first()
)
</script>

<template>
  <ContentRenderer
    :value="post"
    :prose="false"
  />
</template>
