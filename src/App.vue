<template>
  <LayoutHeader />
  <router-view />
</template>

<script>
import LayoutHeader from "./components/LayoutHeader.vue";

export default {
  components: {
    LayoutHeader,
  },
};
</script>

<style>
:root {
  --primary: #ffffff;
  --primary-dark: #9c9c9c;
  --secondary: #f39c12;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.inside {
  margin: 10px;
}

@media only screen and (min-width: 1140px) {
  .inside {
    width: 960px;
    margin: 0 auto;
  }
}
</style>
