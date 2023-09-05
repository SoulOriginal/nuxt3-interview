<template>
  <div>
    <img :src="props.src" alt="User Image" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ src: string }>(), {});
</script>

<style lang="scss" scoped></style>
