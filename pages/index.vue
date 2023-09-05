<template>
  <div class="content-box">
    {{ isLoading }}
    <OrganismsUsers />
    <!-- <pre>{{ cummon }}}</pre>
    <button @click="getDaa">getData</button>
    <button @click="getDaa({ sort_by: 'title', sort_order: 'ASC' })">getData</button>
    <AtomsCard title="Users List">
      <AtomsList :users="cummon" />
    </AtomsCard> -->
  </div>
</template>

<script lang="ts" setup>
import { useUsersStore } from "@/stores/users";
const { featchUsers, isLoading, cummon } = toRefs(useUsersStore());
const testres = ref([]);
const getDaa = async (v) => {
  testres.value = await featchUsers.value(v);
};
featchUsers.value();
</script>

<style lang="scss" scoped></style>
