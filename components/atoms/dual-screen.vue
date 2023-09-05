<template>
  <div class="dual-screen-wrapper">
    <section>
      <slot name="left" />
    </section>
    <section>
      <slot name="right" />
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.dual-screen-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
