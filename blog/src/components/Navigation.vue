<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-links class="header" :to="{ name: 'Home' }"
          >FireBlogs</router-links
        >
      </div>

      <div class="l-list">
        <ul>
          <router-links class="link" to="#">Home</router-links>
          <router-links class="link" to="#">Blogs</router-links>
          <router-links class="link" to="#">Create Post</router-links>
          <router-links class="link" to="#">Login-Register</router-links>
        </ul>
      </div>
    </nav>

    <menuIcon />
  </header>
</template>

<script lang="ts">
import menuIcon from "../assets/Icons/bars-regular.svg";

export default {
  name: "navigation",
  components: {
    component: {
      menuIcon,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

.container {
  width: 80%;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;
  justify-items: center;
}

.branding {
  justify-self: left;
  margin-left: 20px;
}

.header {
  font-size: large;
  font-weight: 900;
}

.link {
  margin-left: 23px;
  margin-right: 23px;
}

.link:hover {
  color: grey;
}
</style>
