<template>
  <LayoutHeader />
  <main>
    <div id="app" class="inside">
      <BookList />
    </div>
  </main>
</template>

<script>
import BookList from "@/components/BookList.vue";

export default {
  name: "App",
  components: {
    BookList,
  },
};
</script>

<style scoped>
h1,
h2,
h3,
h4 {
  color: var(--primary);
  margin-bottom: 15px;
}
</style>
