<template>
  <div v-for="(user, idx) in props.users" :key="`user__${idx}`">
    <AtomsListItem v-bind="user" />
  </div>
</template>

<script setup lang="ts">
import { Users } from "~/interfaces/users";

const props = withDefaults(defineProps<{ users: Users }>(), {});
</script>

<style lang="scss" scoped></style>
