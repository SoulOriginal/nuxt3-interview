<template>
  <div class="list-item">
    <div class="list-item__img" />

    <div class="list-item__content">
      <div class="list-item__text" />
      <div class="list-item__text" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.list-item {
  display: flex;
  gap: 20px;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    width: 100%;
  }
  &__text {
    height: 20px;
    width: 100%;
    background-color: #6180a6;
    border-radius: 4px;
    animation: skeleton-pulse 1.5s ease-in-out infinite;
  }
  &__img {
    border-radius: 10px;
    width: 80px;
    height: 80px;
    animation: skeleton-pulse 1.5s ease-in-out infinite;
    background-color: #212c39;
  }
}
</style>
