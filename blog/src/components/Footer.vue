<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-links class="footer" :to="{ name: 'Home' }">
            FireBlogs</router-links
          >
          <ul class="social-icons">
            <li>
              <a href="#"><youTube class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><twitter class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><instagram class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><linkedIn class="svg-icon" /></a>
            </li>
          </ul>
        </div>

        <div class="col-2">
          <router-links class="link" :to="{ name: 'home' }">Home</router-links>
          <router-links class="link" :to="{ name: 'blogs' }"
            >Blogs</router-links
          >
          <router-links class="link" :to="{ name: 'newpost' }"
            >NewPost</router-links
          >
          <router-links class="link" :to="{ name: 'login' }"
            >Login / Register</router-links
          >
        </div>
      </div>
      <div class="right">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youTube from "../assets/Icons/youtube-brands.svg?component";
import twitter from "../assets/Icons/twitter-brands.svg?component";
import instagram from "../assets/Icons/instagram-brands.svg?component";
import linkedIn from "../assets/Icons/linkedin-brands.svg?component";

export default {
  name: "footer",
  components: {
    youTube,
    twitter,
    instagram,
    linkedIn,
  },
};
</script>

<style lang="scss" scoped>
footer {
  height: 300px;
  width: 100%;
  background-color: rgb(15, 15, 15);
  color: rgb(216, 216, 216);
}

.container {
  width: 80%;
  height: 300px;
  margin: auto;

  display: grid;
  grid-template-columns: 3fr 1fr;

  align-items: center;
  justify-items: left;
}

.left {
  display: grid;
  grid-template-columns: 3fr 1fr;

  align-items: center;
}

.footer {
  margin-left: 80px;
}

.svg-icon {
  height: 20px;
  width: 20px;
  margin-left: -7px;
  margin-right: -7px;
}

.col-1 {
  justify-self: left;
}

.col-2 {
  justify-self: right;
}

.social-icons {
  list-style: none;

  display: flex !important;
}

.link {
  display: flex !important;
  margin-top: 7px;
}

.social-icons a {
  text-decoration: none;
  color: white;

  margin-left: 15px;
  margin-right: 15px;
}
</style>
