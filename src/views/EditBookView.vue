<template>
  <div>
    <h1>Edit Book</h1>
    <p>Book ID: {{ book.id }}</p>
    <img :src="book.cover" alt="" />
    <input type="text" placeholder="ISBN" v-model="isbn" />
    <input type="text" placeholder="Title" v-model="title" />
    <input type="text" placeholder="Subtitle" v-model="subtitle" />
    <input type="text" placeholder="Author" v-model="author" />
    <input type="text" placeholder="Publisher" v-model="publisher" />
    <input type="text" placeholder="Pages" v-model="numPages" />
    <input type="text" placeholder="Price" v-model="price" />
    <input type="text" placeholder="Abstract" v-model="abstract" />
    <input type="text" placeholder="Category" v-model="category" />

    <BookCoverUploader
      :initialCover="cover"
      @cover-changed="updateCoverPreview"
    />
    <button @click="updateBook">Update Book</button>
  </div>
</template>

<script>
import BookCoverUploader from "../components/BookCoverUploader.vue";

export default {
  name: "EditBookView",
  components: {
    BookCoverUploader,
  },

  data() {
    return {
      book: [],
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

  async created() {
    const bookId = this.$route.params.id;

    try {
      const response = await fetch(`http://localhost:4730/books/${bookId}`);

      if (response.ok) {
        const book = await response.json();
        this.book = book;
        this.isbn = book.isbn;
        this.title = book.title;
        this.subtitle = book.subtitle;
        this.author = book.author;
        this.publisher = book.publisher;
        this.numPages = book.numPages;
        this.price = book.price;
        this.abstract = book.abstract;
        this.cover = book.cover;
        this.category = book.category;
      } else {
        console.error("Failed to fetch book from API");
      }
    } catch (error) {
      console.error(error);
    }
  },

  methods: {
    updateCoverPreview(newCover) {
      this.cover = newCover;
    },
    async updateBook() {
      const updatedBook = {
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
        const response = await fetch(
          `http://localhost:4730/books/${this.book.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedBook),
          }
        );

        if (response.ok) {
          // Book was successfully updated in the API
          // You can now update the local book list with the updated book
          // and navigate the user to the book list view
          this.$router.push("/books");
        } else {
          // Handle error
          console.error("Failed to update book in API");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
/* Container styling */
div {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  overflow-wrap: break-word;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

p {
  color: #666;
  margin-bottom: 20px;
}

/* Input fields styling */
input[type="text"] {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: border-color 0.2s;

  white-space: pre-wrap; /* Allow long text to wrap */
  overflow: hidden; /* Hide overflow content */
  text-overflow: ellipsis; /* Display ellipsis for overflow content */
}

input[type="text"]:focus {
  border-color: #007bff;
}

/* Image styling */
img {
  width: 100%;
  max-height: 300px;
  display: block;
  margin: 20px 0;
  object-fit: cover;
  border-radius: 8px;
}

h3 {
  color: #444;
  margin-bottom: 10px;
}

/* Button styling */
button {
  display: block;
  width: 100%;
  padding: 12px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}
</style>
