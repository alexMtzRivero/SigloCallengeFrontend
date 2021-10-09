<template>
  <div
    class="
      card
      row
      flex-row
      align-items-center
      justify-content-between
      my-3
      p-3
    "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "card",
};
</script>
<style scoped>
.card {
  transition: border-color 0.5s ease-in;
}
.card:hover {
  border-color: rgb(163, 163, 163);
}
</style>