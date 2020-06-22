<template>
  <footer class="og-container footer">
    <div class="row og-section">
      <div class="column">
        <div class="og-section--heading">
          <h1 class="sub-title">Lets work together —</h1>
          <a href="mailto:hi@tammy.dev" class="og-link email">hi@tammy.dev</a>
        </div>
      </div>
      <div class="column">
        <div class="og-section--heading">
          <h1 class="sub-title">Find Me On Social Media —</h1>
          <div>
            <a href="https://www.github.com/simplytammy" class=" og-link" target="_blank">
              GitHub</a>
          </div>
          <div>
            <a href="https://codepen.io/simplytammy/" class=" og-link" target="_blank">
              Codepen</a>
          </div>
          <div>
            <a href="https://dev.to/simplytammy/" class=" og-link" target="_blank">
              Dev</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/benjamin-ogurinka-woruka-4b4093182" class=" og-link" target="_blank">
              LinkedIn</a>
          </div>
          <div>
            <a href="https://dribbble.com/simplytammy/" class=" og-link" target="_blank">
              Dribbble</a>
          </div>
        </div>
      </div>

    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer',
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500&display=swap');

@keyframes fadeInRight {
  0% {
    opacity: 0;
    top: 20%;
  }

  100% {
    opacity: 1;
    top: 0;
  }
}

@keyframes moveRight {

  0%,
  20%,
  50%,
  80%,
  100% {
    margin-left: 0;
    opacity: 1;
  }

  40% {
    margin-left: 10px;
    opacity: .5;
  }

  60% {
    margin-left: 5px;
    opacity: .1;
  }
}

.header {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  align-items: center;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 8;
  top: 0;
  right: 0;
  background-color: rgb(0, 9, 27);
  background-color: rgba(0, 9, 27, 0.9);
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow-x: hidden;
  transition: 0.5s;
}


.overlay.active {
  width: 300px;
  visibility: visible;
}

.overlay.active a {
  animation: fadeInRight 1s ease forwards;
  animation-delay: 1s;
}

.overlay.active a:nth-of-type(2) {
  animation-delay: 0.6s;
}

.overlay.active a:nth-of-type(3) {
  animation-delay: 0.7s;
}

.overlay.active a:nth-of-type(4) {
  animation-delay: 0.8s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  opacity: 0;

}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

.more {
  width: 32px;
  height: 32px;
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.2s ease;
  transition-delay: 0.15s;
  z-index: 8000;
  display: none;
}

.more svg {
  transform: rotate(270deg);
  z-index: 8000;
}

.more svg circle {
  stroke-width: 2;
  stroke: #fff;
  fill: none;
  stroke-dasharray: 95;
  stroke-dashoffset: 190;
  transition: all 0.6s ease;
  stroke-linecap: round;
  z-index: 8000;
}

.more svg #plus {
  transform-origin: 50% 50%;
  transition: all 0.8s ease;
}

.more svg #plus path {
  stroke-width: 2;
  stroke: #fff;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.more.toggle circle {
  stroke-dasharray: 95;
  stroke-dashoffset: 285;
  z-index: 8000;
}

.more.toggle #plus {
  transform: rotate(45deg);
}

.more.toggle:hover {
  background: rgba(255, 255, 255, 0.06);
}

.header .brand {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1.5px;
  font-family: 'MuseoModerno', cursive;
}

.header .nav {
  padding: 5px 0;
}

.header .nav a {
  position: relative;
  color: #fff;
  font-size: 15px;
  padding: 5px;
  font-weight: normal;
  text-decoration: none;
  display: inline-block;
  margin: 4px 4px 4px 0;
  transition: 0.8s ease-in-out;

}

.header .nav a:before {
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  top: 1.3rem;
  background: transparent;
  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.header .nav a:hover:before,
.header .nav a.active:before,
.header .nav a.router-link-exact-active:before {
  background: var(--defaultColor);
}

@media screen and (max-width: 768px) {
  .header {
    padding: 10px;
  }

  .overlay a {
    font-size: 16px
  }

  .nav {
    display: none;
  }

  .more {
    display: block;
  }
}

</style>
