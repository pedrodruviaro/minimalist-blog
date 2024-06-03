<script setup lang="ts">
const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <footer class="footer">
    <BaseContainer class="footer__container">
      <p>&copy; Copyright {{ currentYear }} - Some rights reserved.</p>
    </BaseContainer>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding-block: 2.25rem;
  background-color: $colorSecondary;
  display: grid;
  place-items: center;
  text-align: center;

  p {
    font-size: 0.85rem;
  }
}
</style>
