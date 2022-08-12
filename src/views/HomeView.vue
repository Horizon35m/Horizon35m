<template>
  <div>
    <div class="container">
      <div class="images">
        <div
          v-for="imageData in featuredImages"
          :key="imageData"
          class="listing-item"
        >
          <img
            :alt="imageData.image"
            :src="`/images/featured/${imageData.image}`"
          />
          <div class="description">{{ imageData.description }}</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="images">
        <router-link
          v-for="imageData in linkCovers"
          :key="imageData"
          class="listing-item"
          :to="imageData.link"
        >
          <img
            :alt="imageData.image"
            :src="`/images/link-covers/${imageData.image}`"
          />
          <div class="description">
            {{ imageData.description }}
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import featuredImages from "@/assets/images/featuredImages.json";
export default {
  data() {
    return {
      featuredImages: featuredImages,
      linkCovers: [
        {
          image: "avi.png",
          link: "avis",
          description: "Avis",
        },
        {
          image: "banners.png",
          link: "banners",
          description: "Banners",
        },
        {
          image: "live.png",
          link: "live",
          description: "Live Packages",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.images {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding: 10px;
}
.listing-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: solid #4534aa 3px;
  border-radius: 15px;
  transition: all ease-in-out 150ms;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 13px;
  }
  &:hover {
    box-shadow: rgb(157, 67, 241) 0px 0px 6px;
    .description {
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      position: absolute;
    }
  }
  .description {
    display: none;
    transition: background-color 150ms;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 15px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    height: 100%;
    width: 100%;
    font-size: 24px;
    color: #4534aa;
    text-shadow: 1px 1px 5px rgba(70, 52, 170, 0.291);
    top: 0px;
  }
}
</style>
