<template>
  <button @click="editBook">Edit</button>
</template>

<script>
export default {
  name: "EditBookButton",

  props: {
    book: {
      type: Object,
      required: true,
    },
  },

  methods: {
    editBook() {
      this.$router.push(`/books/${this.book.id}/edit`);
    },
  },
};
</script>
<style scoped>
button {
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

button:hover {
  color: black;
  border-radius: 9px;
  background: linear-gradient(145deg, #fefefe, #d5d5d5);
  box-shadow: 7px 7px 14px #686868, -7px -7px 14px #ffffff;
}
</style>
