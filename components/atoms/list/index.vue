<template>
  <div class="list">
    <div v-for="(user, idx) in props.users" :key="`user__${idx}`">
      <component :is="getComponent" v-bind="user" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Users } from "~/interfaces/users";
const props = withDefaults(defineProps<{ users: Users; isLoading: boolean }>(), {});
const getComponent = computed(() => (props?.isLoading ? "AtomsListSkeleton" : "AtomsListItem"));
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
