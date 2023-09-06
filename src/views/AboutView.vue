<template>
  <div class="page-container">
    <h1 class="page-title">{{ pageTitle }}</h1>
    <img class="page-image" :src="pageImage" alt="" />
    <h2 class="page-subtitle">{{ pageSubtitle }}</h2>
    <div class="page-content">
      <h3>{{ aboutTitle }}</h3>
      <p>{{ aboutText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      pageTitle: "Tech Bookstore Amox",
      pageImage: require("@/assets/amoxLOGOaps.png"),
      pageSubtitle: "Nourish Your Tech Wisdom.",
      aboutTitle: "About Us",
      aboutText:
        "At Amox Tech Bookstore, we believe that technology is more than just code and devices; it's about understanding, innovation, and foresight. That's why we've curated an expansive collection of technical literature ranging from foundational principles to the cutting-edge. Whether you're a newbie stepping into the tech world or a seasoned expert looking to expand your horizons, Amox is your go-to destination for the latest and greatest in tech literature. Diving deep into the heart of technology, we provide enthusiasts, learners, and professionals with a range of books that cater to all tech domains. From coding manuals and software guides to in-depth analyses of emerging technologies, Amox ensures you stay updated and informed. More than a bookstore, we're a hub of knowledge, fostering a community passionate about technology and its transformative power.",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Gruppo&family=Julius+Sans+One&family=Orbitron&family=Source+Code+Pro:wght@500&family=Tektur:wght@400;500;600&display=swap");
h1,
h2,
h3 {
  font-family: "Orbitron", sans-serif;
  background: linear-gradient(to right, #ccc, #565656, #142511);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  color: #333;
}

.page-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.page-image {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.page-subtitle {
  font-size: 24px;
  margin-bottom: 20px;
}

.page-content {
  font-size: 18px;
  line-height: 1.5;
}
</style>
