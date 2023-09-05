<template>
  <AtomsCard title="Users List">
    <AtomsList :users="cummon!" />
  </AtomsCard>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/stores/users";
const { cummon } = toRefs(useUsersStore());
</script>
