<template>
  <button class="delete-btn" @click="deleteBook">Delete</button>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async deleteBook() {
      try {
        const response = await fetch(
          `http://localhost:4730/books/${this.book.id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          this.$emit("bookDeleted", this.book.id);
          // Remove the book from favorites stored in localStorage
          let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
          favorites = favorites.filter(
            (favBook) => favBook.id !== this.book.id
          );
          localStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
          console.error("Failed to delete book from API");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.delete-btn {
  color: white;
  border: 3px solid transparent;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
  width: 100%;
  display: block;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.delete-btn:hover {
  color: black;
  border-radius: 9px;
  background: linear-gradient(145deg, #e617177b, #d5d5d5);
  box-shadow: 7px 7px 14px #686868, -7px -7px 14px #ffffff;
}
</style>
