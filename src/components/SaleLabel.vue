<template>
  <div class="container">
    <div class="box box--1">
      <div class="line">
        <span>SUPER SALE 40%</span><span>BEST OFFER </span
        ><span>BEST BOOKS</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SaleLabel",
};
</script>
<style scoped>
:root {
  --color: #f1df40;
  --color-b: #625aee;
}

html {
  height: 100%;
}

body {
  margin: 0;
  background-color: #384052;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  -ms-flex-pack: center;
  font-family: "Helvetica Neue", Arial;
  font-size: 18px;
  letter-spacing: 3.3px;
  font-weight: bold;
}

.container {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}

.box {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  margin: 0 2.5%;
  background-color: var(--color-b);
}

.box--1 span {
  color: rgb(237, 0, 0);
  font-size: 1rem;
  display: inline-block;
  text-align: center;
  width: 100%;
  animation: marquee 18s linear infinite;
  text-shadow: 0 0 3px #00000044, 0 0 1px #00000060, 0 0 3px #0000005c;
}
.box--1 span::before {
  content: "🌟";
  width: 100%;
  height: 80px;
}
.box--1 span:nth-child(1) {
  position: absolute;
  left: -100%;
  animation: marquee 18s 5s linear infinite;
}
.box--1 span:nth-child(2) {
  position: absolute;
  left: -100%;
  animation: marquee 18s 10s linear infinite;
}
.box--1 span:nth-child(3)::after {
  content: "📚";
  width: 100%;
  height: 80px;
}
.box--1 .line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color);
}

@keyframes marquee {
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 0;
    transform: translateX(100%);
  }
}
</style>
