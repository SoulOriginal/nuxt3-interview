<template>
  <div>
    <img :src="props.src" alt="User Image" class="img" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ src: string }>(), {});
</script>

<style lang="scss" scoped>
.img {
  width: inherit;
  height: inherit;
  border-radius: inherit;
}
</style>
