<template>
  <section class="table-item">
    <SearchBooks @search="handleSearch" />
    <label class="category-select" for="category-select"
      >Select a category:</label
    >
    <select id="category-select" v-model="selectedCategory">
      <option value="">All</option>
      <option value="HTML">HTML</option>
      <option value="CSS">CSS</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Vue">Vue</option>
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <!-- Add more options for other categories -->
    </select>
    <table class="table-item__table">
      <thead>
        <tr>
          <th class="table-item__table-head-cover">Cover</th>
          <th class="table-item__table-head-name">Name</th>
          <th class="table-item__table-head--action">Ratings</th>
          <th class="table-item__table-head--isbn">Price</th>
          <th class="table-item__table-head--action">&nbsp;</th>
          <th class="table-item__table-head--action">&nbsp;</th>
          <th class="table-item__table-head--action">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <BookListRow
          v-for="book in displayedBooks"
          :key="book.isbn"
          :title="book.title"
          :isbn="book.isbn"
          :price="book.price"
          :isBookmarked="book?.isBookmarked"
          :book="book"
          :category="book.category"
          @bookDeleted="handleBookDeletion"
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
              {{ bookMarkedBtnText(slotProps?.isBookmarked) }}
            </BaseButton>
          </template>
        </BookListRow>
      </tbody>
    </table>
  </section>
</template>

<script>
import BookListRow from "@/components/BookListRow.vue";
import BaseButton from "@/components/BaseButton.vue";
import SearchBooks from "@/components/SearchBooks.vue";

export default {
  components: {
    BookListRow,
    BaseButton,
    SearchBooks,
  },

  data() {
    return {
      books: [],
      originalBooks: [],
      searchQuery: "",
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
      selectedCategory: "",
    };
  },

  computed: {
    displayedBooks() {
      // Display books based on the search query and selected category
      if (this.searchQuery || this.selectedCategory) {
        return this.originalBooks.filter((book) => {
          const titleMatches = book.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
          const categoryMatches =
            !this.selectedCategory || book.category === this.selectedCategory;
          return titleMatches && categoryMatches;
        });
      }
      return this.originalBooks; // Show all books if no search query or category is selected
    },
  },

  methods: {
    bookMarkedBtnText(isBookmarked) {
      return isBookmarked ? "" : ""; // Show "Add to favorites" if not bookmarked, else show "Remove from favorites"
    },
    handleBookDeletion(bookId) {
      this.books = this.books.filter((book) => book.id !== bookId);
    },
    handleBookmarkClick(isbn) {
      const currentBookIndex = this.originalBooks.findIndex(
        (book) => book.isbn === isbn
      );
      const currentBook = this.originalBooks[currentBookIndex];

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
    handleSearch(query) {
      this.searchQuery = query; // Update the search query
      // Implement the search logic here
      // For now, we will filter based on the book title
      if (query) {
        this.books = this.books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        // Reload the books if the search query is empty
        this.books;
      }
    },
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
.category-select {
  font-size: 1rem;

  margin-bottom: 1rem;
}
.table-item__table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  border-radius: 13px;
  background: #d1d1d1;
  box-shadow: inset 25px 25px 51px #b2b2b2, inset -25px -25px 51px #f0f0f0;
}
.table-item__table-head-name {
  width: 60%;
}
.table-item__table-head-cover {
  width: 20%;
}
.table-item__table-head-isbn {
  width: 20%;
}
.table-item__table-head-actions {
  width: 20%;
}

.table-item__table thead tr {
  background-color: var(--primary);
  color: #1b1b1b;
  text-align: left;
}
.table-item__table th {
  padding: 12px 15px;
}
.table-item__table tbody tr {
  border-bottom: 1px solid #dddddd;
}
.table-item__table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.table-item__table tbody tr:last-of-type {
  border-bottom: 2px solid var(--primary);
}
.table-item__table tbody tr.active-row {
  font-weight: bold;
  color: var(--primary);
}
.table-item__hl {
  margin-top: 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid var(--primary-dark);
}
</style>
