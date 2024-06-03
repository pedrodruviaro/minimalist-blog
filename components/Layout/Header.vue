<script setup lang="ts"></script>

<template>
  <header class="header">
    <BaseContainer class="header__container">
      <Logo />

      <nav class="header--nav">
        <NuxtLink to="/">Blogs.</NuxtLink>
        <button>
          <span>Contact.</span>
        </button>
      </nav>
    </BaseContainer>
  </header>
</template>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid $colorBaseDark;
  padding-block: 1rem;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  &--nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

button {
  --gap: 0.75rem;
  --decoration-size: 32px;

  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap);
  color: $colorBaseLight;

  span {
    font-weight: 700;
    background-color: $colorBaseDark;
    padding: 0.5rem 1.25rem;
    line-height: 120%;
    border-radius: 100vmax;
    z-index: 1;
    display: inline-block;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    background-color: $colorBaseDark;
    width: calc(2px + var(--gap));
    height: 8px;
    right: calc(-1px + var(--decoration-size));
    z-index: 0;
  }

  &::after {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23f8f7f4' viewBox='0 0 256 256'%3E%3Cpath d='M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z'%3E%3C/path%3E%3C/svg%3E");
    display: grid;
    place-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
    background-color: $colorBaseDark;
    width: var(--decoration-size);
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 1rem;
    z-index: 1;
  }
}
</style>
