<script setup lang="ts">
import { SITE_TITLE, TITLE_SEPARATOR } from "~/constants/siteInfos"

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} ${TITLE_SEPARATOR} ${SITE_TITLE}`
      : SITE_TITLE
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
