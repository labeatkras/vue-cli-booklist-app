<template>
  <div class="star-rating">
    <span
      v-for="star in 5"
      :key="star"
      @click="setRating(star)"
      :class="{ rated: star <= rating }"
    >
      ★
    </span>
  </div>
  <p v-if="rating">{{ rating }} - 5</p>
</template>

<script>
export default {
  props: {
    bookId: {
      type: String,
      required: true,
    },
  },
  emits: ["ratingSet"],
  data() {
    return {
      rating: this.getRatingFromLocalStorage(),
    };
  },
  methods: {
    setRating(star) {
      this.rating = star;
      this.$emit("ratingSet", star);
      this.saveRatingToLocalStorage(star);
    },
    saveRatingToLocalStorage(star) {
      localStorage.setItem(`book-rating-${this.bookId}`, star.toString());
    },
    getRatingFromLocalStorage() {
      return parseInt(localStorage.getItem(`book-rating-${this.bookId}`)) || 0;
    },
  },
};
</script>

<style scoped>
p {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  font-size: 0.8em;
  color: #999;
}
.star-rating {
  display: flex;
  font-size: 1.5em;
  cursor: pointer;
}
@media (max-width: 800px) {
  .star-rating {
    font-size: 1em;
  }
}

.star-rating .rated {
  color: gold;
}

.star-rating span:not(.rated) {
  color: rgb(160, 160, 160);
}
</style>
