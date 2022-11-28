<template>
  <div class="card-wrap">
    <div class="card-container">
      <div class="icons">
        <div class="icon"><Edit class="edit small" /></div>
        <div class="icon"><Delete class="delete small" /></div>
      </div>
      <div class="card-photo">
        <img :src="cardPhotos(this.card)" alt="" />
      </div>
      <div class="card-header">{{ this.card.blogTitle }}</div>
      <div class="card-date">{{ this.card.blogDate }}</div>
    </div>

    <router-link class="link" to="#"
      >View The Post<Arrow class="arrow small"
    /></router-link>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg?component";
import Edit from "../assets/Icons/edit-regular.svg?component";
import Delete from "../assets/Icons/trash-regular.svg?component";

export default {
  name: "blogCard",
  props: ["card"],
  data() {},
  methods: {
    cardPhotos(card) {
      console.log(card);
      return new URL(
        `../assets/blogCards/${card.blogCoverPhoto}.jpg`,
        import.meta.url
      );
    },
  },
  components: { Arrow, Edit, Delete },
  watch: {},
};
</script>

<style lang="scss" scoped>
.card-wrap {
  border-radius: 6%;
}

.card-photo img {
  width: 297px;
  height: 150px;

  border-radius: 5%;
}

.card-header {
  margin-top: 30px;
}

.card-date {
  margin-top: 30px;
}

.small {
  margin-top: 20px;

  width: 15px;
  height: 15px;
}

.link {
  font-size: large;
}

.icons {
  display: flex;

  position: relative;
  top: 10px;
  right: 80px;

  z-index: 99;
}

.icon {
  display: flex;

  width: 15px;
  height: 15px;

  margin-left: 4px;
  margin-right: 4px;
}
</style>
