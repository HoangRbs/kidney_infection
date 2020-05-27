<template>
  <div class="header">
    <nav class="header-nav">
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UsersDatabase' }">Patients</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: rgb(241, 239, 239);
  padding: 30px 50px;
}

.header-nav {
  display: flex;
  justify-content: flex-end;
}

.header-nav ul {
  display: flex;
}

.header-nav ul li {
  margin-right: 20px;
}

ul li a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>