<template>
  <div class="user-info-section">
    <div class="user-infos">
      <div class="small-info">
        <label>Name:</label>
        <input type="text" placeholder="type your name" @input="handleNameInput" />
      </div>
      <div class="small-info">
        <label>Age:</label>
        <input type="number" placeholder="type your age" @input="handleAgeInput" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleNameInput(e) {
      // dispatch action with payload
      this.$store.dispatch("changeUserName", {
        userName: e.target.value
      });

      this.$emit("USER_INFO_CHANGED");
    },
    handleAgeInput(e) {
      this.$store.dispatch("changeUserAge", {
        userAge: parseFloat(e.target.value)
      });

      this.$emit("USER_INFO_CHANGED");
    }
  }
};
</script>

<style scoped>
</style>