<template>
  <div class="container">
    <h4 class="quote">{{ quote.quote }}</h4>
    <h4 class="quote">{{ quote.author }}</h4>
    <button @click="getNewQuote">Quote Booster</button>
  </div>
</template>

<script>
export default {
  name: "QuoteBooster",

  data() {
    return {
      quote: "",
    };
  },

  async created() {
    await this.getNewQuote();
  },

  methods: {
    async getNewQuote() {
      const response = await fetch("https://dummy-apis.netlify.app/api/quote");
      const jsonQuoteData = await response.json();
      this.quote = jsonQuoteData;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Gruppo&family=Julius+Sans+One&family=Orbitron&family=Source+Code+Pro:wght@500&family=Tektur:wght@400;500;600&display=swap");
h4 {
  font-family: "Orbitron", sans-serif;
  background: linear-gradient(to right, #ccc, #565656, #142511);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

button {
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  background-color: #d1d1d1;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: 3px solid transparent;
  border-radius: 15px;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

button:hover {
  background-color: #a3f779bc;
}

.quote {
  font-size: 1rem;
  font-style: italic;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
</style>
