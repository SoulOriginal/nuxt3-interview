<template>
  <div>
    <AtomsDualScreen>
      <template v-slot:left> abc </template>
      <template v-slot:right>
        <MoleculesUsersList />
      </template>
    </AtomsDualScreen>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
