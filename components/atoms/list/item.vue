<template>
  <div class="list-item">
    <AtomsImg :src="props.avatar" class="list-item__img" />

    <div class="list-item__content">
      <h3>
        <p v-html="props.title"></p>
      </h3>
      <span v-html="props.subtitle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IUser } from "@/interfaces/users";
const props = withDefaults(defineProps<IUser>(), {});
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  gap: 20px;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__img {
    border-radius: 10px;
    width: 80px;
  }
}
</style>
