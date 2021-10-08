<template>
  <section>
    <h1 class="mt-4">
      <fa-icon icon="users" />
      Registered users
    </h1>
    <div class="home container d-flex flex-col justify-content-center">
      <div class="col-8 px-3">
        <b-button
          variant="outline-primary"
          class="d-flex w-100 p-3 my-3 justify-content-center"
        >
          Add user
          <fa-icon class="mx-2 my-1" icon="plus" />
        </b-button>
        <UserProfileCard />
      </div>
    </div>
  </section>
</template>

<script>
import UserProfileCard from "@/components/user_profiles/UserProfileCard";

export default {
  name: "Home",
  components: { UserProfileCard },
};
</script>
