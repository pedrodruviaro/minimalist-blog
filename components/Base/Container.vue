<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: "div",
  }
)
</script>

<template>
  <Component :is="props.as" class="container">
    <slot />
  </Component>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1100px;
  padding-inline: 2rem;
}
</style>
