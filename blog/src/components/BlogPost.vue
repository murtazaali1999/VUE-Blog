<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <div class="blog-text">
        <!-- if -->
        <h1 v-if="blogs.welcomeScreen.welcomeScreen">
          {{ blogs.welcomeScreen.title }}
        </h1>
        <!-- else -->
        <h1 v-else>{{ blogs.welcomeScreen.title }}</h1>

        <!-- if -->
        <p v-if="blogs.welcomeScreen.welcomeScreen">
          {{ blogs.welcomeScreen.blogPost }}
        </p>
        <!-- else -->
        <p class="content-preview" v-else>
          {{ blogs.welcomeScreen.blogPost }}
        </p>

        <!-- if -->
        <router-link
          class="link link-light"
          v-if="blogs.welcomeScreen.welcomeScreen"
          to="#"
        >
          Login/Register<Arrow class="arrow arrow-light small" />
        </router-link>
        <!-- else -->
        <router-link class="link link-light" v-else to="#">
          View The Post<Arrow class="arrow small" />
        </router-link>

        <!-- end -->
      </div>
      <div class="blog-photo">
        <!-- if -->
        <img
          :src="blogPhotosArrow()"
          v-if="blogs.welcomeScreen.welcomeScreen"
        />
        <!-- else -->
        <div
          v-else
          class="sample"
          v-for="(blog, index) in blogs.sampleBlogPost"
          :key="index"
        >
          <img :src="sampleBlogPhotos(blog)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg?component";
export default {
  name: "blogPost",
  props: ["blogs"],
  data() {
    return {};
  },
  components: { Arrow },
  watch: {},
  methods: {
    blogPhotosArrow() {
      return new URL(
        `../assets/blogPhotos/${this.blogs.welcomeScreen.photo}.jpg`,
        import.meta.url
      ).href;
    },
    sampleBlogPhotos(blog) {
      return new URL(
        `../assets/blogPhotos/${blog.blogCoverPhoto}.jpg`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

img {
  box-sizing: content-box !important;
}

.blog-content {
  display: flex;
  flex-direction: row;
}

.blog-text {
  padding: 100px;
}

.blog-text h1 {
  font-size: 40px;
  margin-bottom: 10px;
}
.blog-text p {
  word-spacing: 3px;
  letter-spacing: 2px;
}

.blog-photo {
  width: 100%;
  height: 100%;
}

.blog-photo img {
  width: 100%;
  height: 100%;
}

.small {
  width: 30px;
  height: 30px;
}
</style>
