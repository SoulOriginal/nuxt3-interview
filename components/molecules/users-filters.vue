<template>
  <AtomsCard class="w100 max-w-50-perscents" title="Local Filters">
    <section>
      <div>
        <p>Filter by Title</p>
        <select class="w100" v-model="filters.title">
          <option :value="option" v-for="(option, idx) in getUsersTitles" :key="idx">
            <span v-html="option" />
          </option>
        </select>
      </div>
      <div>
        <p>Filter by County</p>
        <select class="w100" v-model="filters.county">
          <option :value="option" v-for="(option, idx) in getUsersCountries" :key="idx">
            <span v-html="option" />
          </option>
        </select>
      </div>
    </section>
    <section>
      <h2>Server Filters</h2>
      <div>
        <p>Sort by Title</p>
        <select class="w100" @change="handleChangeSorting($event)">
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </div>
    </section>

    <button class="w100" @click="handleCleatFilters">Clear Filters</button>
  </AtomsCard>
</template>

<script setup>
import { useUsersStore } from "@/stores/users";
const { getUsersTitles, getUsersCountries, filters, featchUsers } = toRefs(useUsersStore());
const handleCleatFilters = () => {
  filters.value = {};
};
const handleChangeSorting = (event) => {
  const getValue = event?.target?.value;
  featchUsers.value({ sort_by: "title", sort_order: getValue });
};
</script>

<style lang="scss" scoped>
.max-w-50-perscents {
  max-width: 50%;
}
</style>
