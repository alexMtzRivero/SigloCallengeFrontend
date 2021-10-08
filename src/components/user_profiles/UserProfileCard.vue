<template>
  <Card>
    <b-avatar class="mr-2" variant="primary" text="BV"></b-avatar>
    <div class="mr-auto">
      <div class="text-left">Name</div>
      <p class="mb-0">description</p>
    </div>
    <b-button class="m-1" variant="outline-primary">
      <fa-icon icon="pen" />
    </b-button>
    <b-button class="m-1" variant="danger">
      <fa-icon icon="trash" />
    </b-button>
  </Card>
</template>

<script>
import Card from "@/components/lib/Card.vue";
export default {
  name: "UserProfileCard",
  components: { Card },
};
</script>

<style>
</style>