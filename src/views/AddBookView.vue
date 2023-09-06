<template>
  <div>
    <AddBookComp @bookAdded="navigateToBookList" />
  </div>
</template>

<script>
import AddBookComp from "@/components/AddBookComp.vue";

export default {
  name: "AddBookView",

  components: {
    AddBookComp,
  },

  methods: {
    navigateToBookList() {
      this.$router.push("/books");
    },
  },
};
</script>
