<template>
  <section>
    <h1>Registered users</h1>
    <div class="home container d-flex justify-content-center">
      <div class="col-8">
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
