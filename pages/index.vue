<script setup lang="ts">
const { data } = await useAsyncData("blog", () => queryContent("/").find());
</script>

<template>
  <div>
    <BlogPostCard
      v-for="post in data"
      :key="post._id"
      :title="post.title!"
      :description="post.longDescription"
      :date="post.date"
      :imagePath="'images/' + post.image"
      :link="post._path!"
    />
  </div>
</template>

<style scoped lang="scss"></style>
