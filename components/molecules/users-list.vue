<template>
  <AtomsCard title="Users List">
    <AtomsList :users="getUsersByFilters!" :isLoading="isLoading!" />
    <AtomsNotResults v-if="isNullableResult" />
  </AtomsCard>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/stores/users";
const { getUsersByFilters, isLoading } = toRefs(useUsersStore());
const isNullableResult = computed(() => getUsersByFilters?.value!.length === 0);
</script>
