<template>
  <div>
    <SearchBooks @search="handleSearch" />
    <div class="title-text-con">
      <h1>Tech Bookstore Amox</h1>
      <h3>Nourish Your Tech Wisdom.</h3>
    </div>

    <!-- Splide Slider -->
    <Splide :options="options" aria-label="Books Carousel">
      <SplideSlide v-for="chunk in bookChunks" :key="chunk[0].id">
        <ul class="book-row">
          <li v-for="book in chunk" :key="book.id" class="book-item">
            <div class="book-cover">
              <img :src="book.cover" :alt="book.title" />
            </div>
            <router-link class="book-title" :to="`/books/${book.isbn}`">{{
              book.title
            }}</router-link>

            <!--<h2 class="book-title">{{ book.title }}</h2>-->
            <p class="book-author">{{ book.author }}</p>
            <StarRating :bookId="book.id" />
          </li>
        </ul>
      </SplideSlide>
    </Splide>

    <div v-if="displayedBooks.length === 0 && !error" class="loading-state">
      Loading...
    </div>
    <div v-if="error" class="error-state">
      {{ error }}
    </div>
    <QuoteBooster />
    <div class="home-what-we-do">
      <h3>
        "At Amox Tech Bookstore, we believe that technology is more than just
        code and devices; it's about understanding, innovation, and foresight.
        That's why we've curated an expansive collection of technical literature
        ranging from foundational principles to the cutting-edge.
      </h3>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import StarRating from "@/components/StarRating.vue";
import SearchBooks from "@/components/SearchBooks.vue";
import QuoteBooster from "@/components/QuoteBooster.vue";

export default {
  name: "HomePageComp",
  props: {
    title: String,
    isbn: String,
    price: String,
    isBookmarked: Boolean,
  },
  book: {
    type: Object,
    required: true,
  },

  data() {
    return {
      searchQuery: "",
      books: [],
      error: null,
      options: {
        pagination: false,
        rewind: true,
        perpage: 1,
        autoplay: true,
        interval: 3000, // This is optional. It sets the autoplay interval to 2 seconds.
        pauseOnHover: true, // Optional: Pauses autoplay when the mouse is over the slider.
        pauseOnFocus: false, // Optional: Doesn't pause autoplay when the slider is focused.
      },
    };
  },
  components: {
    Splide,
    SplideSlide,
    StarRating,
    SearchBooks,
    QuoteBooster,
  },
  computed: {
    displayedBooks() {
      // Display books based on the search query
      if (this.searchQuery) {
        return this.books.filter((book) =>
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return this.books; // Show all books if no search query is present
    },

    bookChunks() {
      return this.chunk(this.displayedBooks, 5);
    },
  },
  methods: {
    chunk(arr, size) {
      let chunks = [];
      for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
      }
      return chunks;
    },
    handleSearch(query) {
      this.searchQuery = query; // Update the search query
    },
  },
  async created() {
    try {
      const response = await fetch("http://localhost:4730/books");
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      this.books = await response.json();
    } catch (err) {
      this.error = "Failed to fetch books. Please try again later.";
    }
    this.books;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Gruppo&family=Julius+Sans+One&family=Orbitron&family=Source+Code+Pro:wght@500&family=Tektur:wght@400;500;600&display=swap");
h1,
h3 {
  font-family: "Orbitron", sans-serif;
  background: linear-gradient(to right, #ccc, #565656, #142511);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
h1:hover {
  background: linear-gradient(to right, #333232, #666666, #def7da);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-what-we-do {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
  margin-bottom: 1rem;
}
.title-text-con {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 10px;
}
.book-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
}

.book-cover img {
  width: 150px;
  height: 225px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

.book-title,
.book-author {
  text-align: center;
  width: 100%;
  margin: 0 5px;
}

.book-title {
  font-size: 16px; /* adjust font size as needed */
  margin: 5px 0;
}

.book-author {
  font-size: 14px; /* adjust font size as needed */
  color: #777; /* Optional: Make the author font a bit lighter */
}
.book-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-weight: bold;
}

.error-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-weight: bold;
  color: red;
}
</style>
