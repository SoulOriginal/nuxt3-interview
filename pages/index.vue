<template>
  <div class="content-box absolute-center">
    <OrganismsUsers />
  </div>
</template>

<script lang="ts" setup>
import { useUsersStore } from "@/stores/users";
const { featchUsers } = toRefs(useUsersStore());

await featchUsers.value({});
</script>

<style lang="scss" scoped>
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
