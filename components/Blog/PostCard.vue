<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    imagePath: string;
    date: string;
    description: string;
    link: string;
    tags?: string[];
    buttonText?: string;
  }>(),
  {
    buttonText: "Read More",
  },
);
</script>

<template>
  <div>
    <NuxtImg :src="props.imagePath" />
  </div>
</template>
