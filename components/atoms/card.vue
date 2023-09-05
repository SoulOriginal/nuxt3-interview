<template>
  <div class="card">
    <h3 class="card__title">
      {{ props.title }}
    </h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string }>(), {});
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 4px 4px 15px 0px rgba(66, 68, 90, 1);
  border-radius: 12px;
  padding: 15px;
  &__title {
    margin: 10px 0;
  }
}
</style>
