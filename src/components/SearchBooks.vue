<template>
  <div class="input-container">
    <input
      type="text"
      v-model="query"
      @input="onSearch"
      placeholder="Search..."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.query);
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
input {
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #222;
  padding: 15px 5px 10px 20px;
  box-shadow: Inset 0 1px 25px rgba(0, 0, 0, 0.55);
  border-radius: 25px;
  width: 100%;
}
@media (min-width: 800px) {
  input {
    width: 930px;
  }
}
input:focus {
  border: 2px solid #c3c6ce;
}

input::placeholder {
  color: #555;
  transition: all 0.3s ease;
}

input:focus::placeholder {
  color: #999;
}
</style>
