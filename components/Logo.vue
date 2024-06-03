<template>
  <span class="logo">
    <NuxtLink to="/">minimalist.</NuxtLink>
  </span>
</template>

<style lang="scss" scoped>
.logo {
  font-weight: 700;
  font-size: 2rem;
  line-height: 120%;
  letter-spacing: -1px;
  transition: opacity 250ms ease-in-out;
  will-change: opacity;

  &:hover,
  &:focus {
    transition: opacity 250ms ease-in-out;
    will-change: opacity;
    opacity: 0.75;
  }

  @media (min-width: 45em) {
    font-size: 3rem;
  }
}
</style>
