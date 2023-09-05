<template>
  <div>
    <AtomsDualScreen>
      <template v-slot:left>
        <MoleculesUsersFilters class="w100" />
      </template>
      <template v-slot:right>
        <MoleculesUsersList class="w100" />
      </template>
    </AtomsDualScreen>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
