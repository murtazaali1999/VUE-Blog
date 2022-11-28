<template>
  <div class="home"></div>
  <BlogPost :blogs="blogs" />
  <BlogPost
    :blogs="blogs"
    v-for="(post, index) in blogs.sampleBlogPost"
    :key="index"
  />
  <div class="blog-card-wrap" align="center">
    <h3>View More Recent Blogs</h3>
    <div class="container">
      <div class="blog-cards">
        <BlogCard
          :card="card"
          class="blog-card"
          v-for="(card, index) in blogs.sampleBlogCards"
          :key="index"
        />
      </div>
    </div>
  </div>
  <div class="updates">
    <div class="containers">
      <h2 class="update-text">
        Never miss a post,Register for your free account today!
      </h2>
      <router-link class="router-button" to="#">
        <button>Register for FireBlogs <Arrow class="small arrow" /></button>
      </router-link>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";

import Arrow from "../assets/Icons/arrow-right-light.svg?component";

export default {
  name: "",
  data() {
    return {
      blogs: {
        welcomeScreen: {
          title: "Welcome!",
          blogPost:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius quod distinctio qui voluptate voluptatem rerum sit nobis voluptas? Id.",
          welcomeScreen: true,
          photo: "coding",
        },
        sampleBlogPost: [
          {
            title: "This is a Filler-1",
            blogHTML: "Lorem dum dolor sit dum",
            blogCoverPhoto: "beautiful-stories",
          },
          {
            title: "This is a Filler-2",
            blogHTML: "Lorem some dolor sit some",
            blogCoverPhoto: "designed-for-everyone",
          },
        ],
        sampleBlogCards: [
          {
            blogTitle: "Blog Card #1",
            blogCoverPhoto: "stock-1",
            blogDate: "May 15,2022",
          },
          {
            blogTitle: "Blog Card #2",
            blogCoverPhoto: "stock-2",
            blogDate: "May 25,2022",
          },
          {
            blogTitle: "Blog Card #3",
            blogCoverPhoto: "stock-3",
            blogDate: "May 55,2042",
          },
          {
            blogTitle: "Blog Card #4",
            blogCoverPhoto: "stock-4",
            blogDate: "May 95,3022",
          },
        ],
      },
    };
  },
  components: { BlogPost, BlogCard, Arrow },
  watch: {},
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 32px;

  background-color: rgb(218, 218, 218);
}

.containers {
  display: flex;
  height: 300px;
  align-items: center;

  background-color: rgb(204, 204, 204);

  padding: 30px;
}

.update-text {
  margin-right: 250px;
}

.small {
  width: 12px;
  height: 12px;
}

button {
  background-color: rgb(37, 37, 37);
  border-radius: 6%;
  border: none;

  color: white;

  width: 180px;
  height: 40px;
}

.container {
  box-sizing: border-box;
}

.blog-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  justify-items: center;
}

.blog-card {
  box-sizing: border-box;

  background-color: white;

  height: 320px;
  width: 300px;
}
</style>
