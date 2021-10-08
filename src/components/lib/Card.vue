<template>
  <div class="card flex-row align-items-center my-3 p-3">
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
  max-width: 684px;
  transition: border-color 0.5s ease-in;
}
.card:hover {
  border-color: rgb(163, 163, 163);
}
</style>