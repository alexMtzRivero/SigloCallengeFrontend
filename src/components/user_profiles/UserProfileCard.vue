<template>
  <card>
    <b-avatar class="mr-2" variant="primary" text="BV"></b-avatar>
    <div class="mr-auto">
      <div class="text-left">Name</div>
      <p class="mb-0">description</p>
    </div>
    <b-button variant="outline-primary">Edit</b-button>
    <b-button variant="danger">Delete</b-button>
  </card>
</template>

<script>
import card from "@/components/lib/Card.vue";
export default {
  name: "UserProfileCard",
  components: { card },
};
</script>

<style>
</style>