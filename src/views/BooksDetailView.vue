<template>
  <main>
    <section class="img-container">
      <img :src="book.cover" alt="" />
    </section>
    <section class="info-container">
      <h1>{{ book.title }}</h1>
      <h2>{{ book.subtitle }}</h2>
      <h2>{{ book.abstract }}</h2>
      <h3>Author | {{ book.author }}</h3>
      <h3>Publisher | {{ book.publisher }}</h3>
      <h3>Book Pages | {{ book.numPages }}</h3>
      <h3>Price | {{ book.price }}</h3>
      <h3>ISBN | {{ book.isbn }}</h3>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentId: "",
      book: [],
    };
  },
  created() {
    this.currentId = this.$route.params.id;

    fetch("http://localhost:4730/books/" + this.currentId)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        } else {
          return response.json();
        }
      })
      .then((jsonBookData) => {
        this.book = jsonBookData;
      });
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  max-width: 1000px;
}
.info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 50px;
}
.img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
}

img {
  min-width: 300px;
  height: 350px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  background: rgba(204, 203, 203, 0.8);
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

h2 {
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 15px;
}
h3 {
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 10px;
}

h2:last-child {
  margin-bottom: 20px;
}

h2:first-child {
  margin-top: 20px;
}
</style>
