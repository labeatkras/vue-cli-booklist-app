<template>
  <header class="header">
    <section class="header__section">
      <p class="header__task-name">Tech Bookstore</p>

      <img src="../assets/amoxLOGOaps.png" alt="logo" class="header__logo" />
      <SaleLabel />
      <div class="header__bootcamp-info-wrapper">
        <nav class="header__nav">
          <a href="#"></a>
          <router-link class="header__nav-item" to="/">Home</router-link>
          <router-link class="header__nav-item" to="/books">Books</router-link>
          <router-link class="header__nav-item" to="/favorits"
            >Favorits</router-link
          >
          <router-link class="header__nav-item" to="/add-book"
            >AddBook</router-link
          >
          <router-link class="header__nav-item" to="/about">About</router-link>
        </nav>
        <a href="#" class="header__bootcamp-link">code.amox.com</a>
      </div>
    </section>
  </header>
</template>

<script>
import SaleLabel from "./SaleLabel.vue";

export default {
  name: "LayoutHeader",
  components: {
    SaleLabel,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Gruppo&family=Julius+Sans+One&family=Orbitron&family=Source+Code+Pro:wght@500&family=Tektur:wght@400;500;600&display=swap");
p {
  font-family: "Orbitron", sans-serif;
  background: linear-gradient(to right, #ccc, #565656, #142511);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
* {
  box-sizing: border-box;
}

.header__logo {
  height: 80px;
  background-color: var(--primary);
  text-decoration: none;
  display: inline;
  margin-left: 0.3rem;
  padding: 0px 20px;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: var(--primary);
  color: #fff;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.header__task-name {
  display: none;
}

.header__section {
  padding: 10px 10px;
}

.header__bootcamp-info-wrapper {
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin: 0;
}
.header__bootcamp-link {
  display: none;
  background-color: var(--primary);
  color: #fff;
  text-decoration: none;
  display: none;
  margin-left: 1rem;
  padding: 0px 0.75rem;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.header__nav {
  margin: 30px 0 10px 0px;
}

.header__nav-item {
  color: #fff;
  border-radius: 3px;
  display: inline;
  padding: 10px 10px;
}

.router-link-exact-active {
  color: #fff;
  background-color: white;
  border-radius: 50px;
  box-shadow: rgba(23, 23, 23, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

@media only screen and (min-width: 1140px) {
  .header {
    font-size: 1.5rem;
    margin-bottom: 50px;
  }

  .header__section {
    display: flex;
    padding: 0px 20px;
    line-height: 1.5;
  }

  .header__bootcamp-info-wrapper {
    margin-left: auto;
    display: flex;
    line-height: 2.4;
  }

  .header__nav {
    margin: 0px;
  }
  .header__logo {
    margin-left: 1rem;
  }
}
@media only screen and (min-width: 1380px) {
  .header__task-name {
    color: #10210aa5;
    font-size: 1.4rem;
    margin: 0;
    background-color: var(--primary);
    color: #fff;
    text-decoration: none;
    display: inline;
    margin-left: 0.2rem;
    padding: 0px 20px;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  .header__bootcamp-link {
    display: block;
  }
}
</style>
