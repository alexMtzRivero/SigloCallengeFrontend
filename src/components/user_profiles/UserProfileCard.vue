<template>
  <div>
    <Card v-if="!isEditing">
      <b-avatar class="mr-2" variant="primary" text="BV"></b-avatar>
      <div class="mr-auto text-left">
        <div text-left>{{ `${first_name} ${last_name}` }}</div>
        <p class="mb-0">{{ email }}</p>
      </div>
      <b-button class="m-1" @click="startEdit()" variant="outline-primary">
        <fa-icon icon="pen" />
      </b-button>
      <b-button class="m-1" variant="danger">
        <fa-icon icon="trash" />
      </b-button>
    </Card>
    <!-- totally should separate this in 2 components -->
    <Card v-else>
      <b-avatar class="mr-2" variant="primary" text="BV"></b-avatar>
      <div class="mr-auto text-left">
        <label for="">User name</label>
        <b-form-input
          v-model="tempUser.username"
          placeholder="Enter a firsts name"
        ></b-form-input>
        <label for="">First name</label>
        <b-form-input
          v-model="tempUser.first_name"
          placeholder="Enter a firsts name"
        ></b-form-input>
        <label for="">Last name</label>
        <b-form-input
          v-model="tempUser.last_name"
          placeholder="Enter a last name"
        ></b-form-input>
        <label for="">Email</label>
        <b-form-input
          v-model="tempUser.email"
          type="email"
          placeholder="Enter an email"
        ></b-form-input>
      </div>
      <b-button class="m-1" @click="saveChanges()" variant="outline-primary">
        <fa-icon icon="save" />
      </b-button>
      <b-button class="m-1" @click="undoChanges()" variant="danger">
        <fa-icon icon="history" />
      </b-button>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/lib/Card.vue";
export default {
  first_name: "UserProfileCard",
  components: { Card },
  props: {
    first_name: {
      type: String,
      default: "Unknown",
    },
    last_name: {
      type: String,
      default: "also unknown",
    },
    username: {
      type: String,
      default: "guest",
    },
    email: {
      type: String,
      default: "",
    },
    pk: {
      type: Number,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      isEditing: false,
      tempUser: {},
    };
  },
  methods: {
    startEdit() {
      this.isEditing = true;
      this.tempUser = {
        pk: this.pk,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        username: this.username,
      };
    },
    saveChanges() {
      //the index is sent for a faster update of the data
      this.$emit("change", this.tempUser, this.index);
    },
    undoChanges() {
      this.isEditing = false;
      this.tempUser = {};
    },
  },
};
</script>

<style>
</style>