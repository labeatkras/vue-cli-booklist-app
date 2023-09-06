<template>
  <div>
    <input type="text" placeholder="ISBN" v-model="isbn" />
    <input type="text" placeholder="Title" v-model="title" />
    <input type="text" placeholder="Subtitle" v-model="subtitle" />
    <input type="text" placeholder="Author" v-model="author" />
    <input type="text" placeholder="Publisher" v-model="publisher" />
    <input type="text" placeholder="Pages" v-model="numPages" />
    <input type="text" placeholder="Price" v-model="price" />
    <input type="text" placeholder="Abstract" v-model="abstract" />
    <input type="text" placeholder="Category" v-model="category" />
    <BookCoverUploader @cover-changed="updateCoverPreview" />
    <button @click="addBook">Add New Book</button>
  </div>
</template>

<script>
import BookCoverUploader from "../components/BookCoverUploader.vue";
export default {
  name: "AddBookComp",

  components: {
    BookCoverUploader,
  },

  data() {
    return {
      isbn: "",
      title: "",
      subtitle: "",
      author: "",
      publisher: "",
      numPages: "",
      price: "",
      abstract: "",
      cover: "",
      category: "",
    };
  },

  methods: {
    updateCoverPreview(newCover) {
      this.cover = newCover;
    },
    async addBook() {
      const newBook = {
        isbn: this.isbn,
        title: this.title,
        subtitle: this.subtitle,
        author: this.author,
        publisher: this.publisher,
        numPages: this.numPages,
        price: this.price,
        abstract: this.abstract,
        cover: this.cover,
        category: this.category,
      };

      try {
        const response = await fetch("http://localhost:4730/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBook),
        });

        if (response.ok) {
          // Book was successfully added to the API
          // You can now update the local book list with the new book
          // and navigate the user to the book list view
          this.$emit("bookAdded");
        } else {
          // Handle error
          console.error("Failed to add book to API");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Container styling */
div {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Input fields styling */
input[type="text"] {
  display: block;
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

input[type="text"]:focus {
  border-color: #007bff;
}

/* Button styling */
button {
  display: block;
  width: 100%;
  padding: 12px 15px;
  background-color: #dddddd;
  color: #2f2f2f;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 15px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

button:hover {
  background-color: #828282;
  color: white;
}

/* If you're showing the cover within this component */
img {
  width: 100%;
  max-height: 300px;
  display: block;
  margin: 20px 0;
  object-fit: cover;
  border-radius: 8px;
}
</style>
