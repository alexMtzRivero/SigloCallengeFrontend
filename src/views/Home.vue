<template>
  <section>
    <h1 class="mt-4">
      <fa-icon icon="users" />
      Registered users
    </h1>
    <div class="home container d-flex flex-col justify-content-center">
      <div class="col-8 col-xs-14 px-3">
        <b-button
          variant="outline-primary"
          class="d-flex w-100 p-3 my-3 justify-content-center"
          @click="addEmptyUser"
        >
          Add user
          <fa-icon class="mx-2 my-1" icon="plus" />
        </b-button>
        <UserProfileCard
          v-for="(user, index) in users"
          :index="index"
          :key="user.pk"
          :pk="user.pk"
          :first_name="user.first_name"
          :last_name="user.last_name"
          :email="user.email"
          :username="user.username"
          @remove="removeUser"
        />
      </div>
    </div>
  </section>
</template>

<script>
import UserProfileCard from "@/components/user_profiles/UserProfileCard";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Home",
  components: { UserProfileCard },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    ...mapActions(["getUsers", "deleteUser"]),
    ...mapMutations(["addEmptyUser"]),
    removeUser(userPk, listIndex) {
      this.deleteUser({ userPk, listIndex });
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
