<template>
  <section class="favorite-books">
    <div class="table-item">
      <table v-if="favorites.length">
        <thead>
          <tr>
            <th class="table-item__table-head-cover">Cover</th>
            <th class="table-item__table-head-name">Name</th>
            <th class="table-item__table-head--ratings">Ratings</th>
            <th class="table-item__table-head--price">Price</th>
            <th class="table-item__table-head--action">&nbsp;</th>
            <th class="table-item__table-head--action">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <BookListRow
            v-for="book in favorites"
            :key="book.isbn"
            :title="book.title"
            :isbn="book.isbn"
            :price="book.price"
            :book="book"
            :isBookmarked="book?.isBookmarked"
            @bookmark-clicked="handleBookmarkClick"
            class="table-item__table-row"
          >
            <template #actionCol="slotProps">
              <BaseButton
                variant="secondary"
                :isBookmarked="slotProps?.isBookmarked"
                @btn-clicked="handleBookmarkClick(slotProps.isbn)"
              >
                <svg
                  v-if="!slotProps?.isBookmarked"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                >
                  <path
                    fill-rule="evenodd"
                    d="M19 22V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v18l7-4.666L19 22zM8.006 8.056c0-.568.224-1.083.585-1.456.361-.372.86-.603 1.412-.603 0 0 .996-.003 1.997 1.029 1.001-1.032 1.997-1.029 1.997-1.029.552 0 1.051.23 1.412.603s.585.888.585 1.456-.224 1.084-.585 1.456L12 13.203 8.591 9.512a2.083 2.083 0 0 1-.585-1.456z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                >
                  <path
                    d="M20 22V4c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22zM6 10V4h12v14.553l-6-3.428-6 3.428V10z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M15.409 9.512c.361-.372.585-.888.585-1.456s-.223-1.083-.585-1.456a1.962 1.962 0 0 0-1.412-.603S13.001 5.994 12 7.026c-1.001-1.032-1.997-1.029-1.997-1.029-.552 0-1.051.23-1.412.603-.362.373-.585.887-.585 1.456s.223 1.084.585 1.456L12 13.203l3.409-3.691z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </BaseButton>
            </template>
          </BookListRow>
        </tbody>
      </table>
      <p v-else>No favorite books added yet.</p>
    </div>
  </section>
</template>

<script>
import BookListRow from "@/components/BookListRow.vue";
import BaseButton from "@/components/BaseButton.vue";
import { watchEffect } from "vue";

export default {
  components: {
    BookListRow,
    BaseButton,
  },
  data() {
    return {
      books: [],
      originalBooks: [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    };
  },
  methods: {
    handleBookmarkClick(isbn) {
      const currentBookIndex = this.originalBooks.findIndex(
        (book) => book.isbn === isbn
      );
      const currentBook = this.originalBooks[currentBookIndex];
      // currentBook.isBookmarked = !currentBook.isBookmarked ? true : false;
      if (currentBook.isBookmarked) {
        // Remove from favorites if already bookmarked
        this.favorites = this.favorites.filter((book) => book.isbn !== isbn);
        currentBook.isBookmarked = false;
      } else {
        // Add to favorites if not already bookmarked
        this.favorites.push(currentBook);
        currentBook.isBookmarked = true;
      }
      // Update local storage
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
  },
  mounted() {
    watchEffect(() => {
      this.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    });
  },

  async created() {
    const response = await fetch("http://localhost:4730/books");
    const jsonBooksData = await response.json();
    // Mark books as bookmarked if they are in favorites
    for (let book of jsonBooksData) {
      if (this.favorites.some((fav) => fav.isbn === book.isbn)) {
        book.isBookmarked = true;
      }
    }

    this.originalBooks = jsonBooksData;
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.favorite-books {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
}
.table-item__table-head-name {
  width: 40%;
}
.table-item__table-head-cover {
  width: 10%;
}
.table-item__table-head--ratings {
  width: 20%;
}
.table-item__table-head--price {
  margin: 1rem;
  display: flex;
  width: 20%;
}
.table-item__table-head--action {
  width: 10%;
}
</style>
