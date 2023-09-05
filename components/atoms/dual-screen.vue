<template>
  <div class="dual-screen-wrapper">
    <slot name="left" />

    <slot name="right" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.dual-screen-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
