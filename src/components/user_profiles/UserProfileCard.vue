<template>
  <div>
    <Card v-if="!isEditing">
      <div class="d-flex flex-row p-auto align-items-center">
        <b-avatar class="mr-2" variant="primary">{{ username }}</b-avatar>
        <div class="mr-auto text-left">
          <b>{{ `${first_name} ${last_name}` }}</b>
          <p class="mb-0">{{ email }}</p>
        </div>
      </div>
      <div class="col-md-4">
        <b-button class="m-1" @click="startEdit()" variant="outline-primary">
          <fa-icon icon="pen" />
        </b-button>
        <b-button class="m-1" @click="deleteUser" variant="danger">
          <fa-icon icon="trash" />
        </b-button>
      </div>
    </Card>
    <!-- totally should separate this in 2 components -->
    <Card v-else>
      <b-avatar class="mr-2" variant="primary">{{
        tempUser.username
      }}</b-avatar>
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
import { mapActions } from "vuex";
export default {
  first_name: "UserProfileCard",
  components: { Card },
  props: {
    first_name: {
      type: String,
      default: "Jon",
    },
    last_name: {
      type: String,
      default: "Doe",
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
    ...mapActions(["editUser", "createUser"]),
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
    deleteUser() {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$emit("remove", this.pk, this.index);
      }
    },
    saveChanges() {
      //the index is sent for a faster update of the data
      this.userChanged(this.tempUser, this.index);
    },
    userChanged(user, listIndex) {
      let request;
      if (user.pk) {
        request = this.editUser({ user, listIndex });
      } else {
        request = this.createUser({ user, listIndex });
      }
      request.then(() => {
        this.isEditing = false;
      });
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