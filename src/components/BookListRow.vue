<template>
  <tr class="table-item__table-row">
    <td>
      <img :src="book.cover" alt="" />
    </td>
    <td>
      <router-link class="title-style" :to="`/books/${isbn}`">{{
        title
      }}</router-link>
    </td>
    <td>
      <StarRating :bookId="book.isbn" @rating-set="handleRating" />
      <p v-if="rating">You rated: {{ rating }} - 5 Stars</p>
    </td>
    <td>{{ price }}</td>
    <td>
      <EditBookButton :book="book" />
    </td>
    <td><DeleteBook :book="book" @bookDeleted="navigateToBookList" /></td>
    <td>
      <slot
        name="actionCol"
        :title="title"
        :isbn="isbn"
        :isBookmarked="isBookmarked"
      />
    </td>
  </tr>
</template>

<script>
import EditBookButton from "./EditBookButton.vue";
import DeleteBook from "./DeleteBook.vue";
import StarRating from "./StarRating.vue";

export default {
  props: {
    title: String,
    isbn: String,
    price: String,
    isBookmarked: Boolean,
    book: {
      type: Object,
      required: true,
    },
  },
  components: {
    EditBookButton,
    DeleteBook,
    StarRating,
  },
  data() {
    return { rating: 0 };
  },
  methods: {
    handleRating(star) {
      this.rating = star;
    },
    navigateToBookList() {
      this.$router.push("/books");
    },
  },
};
</script>

<style scoped>
.table-item__table-row {
  width: 100%;
}
@media (max-width: 700px) {
  .table-item__table-row {
    width: 200px;
  }
  .table-item__table td {
    padding: 6px 7px;
  }
  .title-style {
    font-size: 0.7rem;
  }
}
img {
  width: 100px;
}
img:hover {
  scale: 1.8;
  width: 120px;
}
.table-item__table td {
  padding: 12px 15px;
}
.title-style {
  color: #000000ea;
  text-shadow: 1px 1px 1px #fefcfcea;
}
.title-style:hover {
  color: #727171ea;
  position: relative;
  text-shadow: 0;
}

.title-style:hover::before {
  content: "Click for Book Details";
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 0.8rem;
  background-color: #727171ea;
  color: #faf8f8;
  padding: 5px;
  border-radius: 4px;
  text-shadow: 1px 1px 1px #090909ea;
}
</style>
