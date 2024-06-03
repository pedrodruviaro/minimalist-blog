<script setup lang="ts"></script>

<template>
  <div>
    <LayoutHeader />
    <BaseContainer as="main">
      <slot />
    </BaseContainer>
    <LayoutFooter />
  </div>
</template>
