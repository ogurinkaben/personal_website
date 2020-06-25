<template>
  <footer class="footer">
    <a @click="jumpToTop" class="to-top">
      <i class="ti-arrow-up"></i>
    </a>
    <div class="og-container ">
      <div class="og-section">
        <div class="row">
          <div class="column">
            <div class="og-section--heading">
              <h1 class="sub-title">Quick links <span class="period"></span></h1>
              <div>
                <nuxt-link to="/" class=" og-link plain">
                  Home</nuxt-link>
              </div>
              <div>
                <nuxt-link to="/about" class=" og-link plain">
                  About</nuxt-link>
              </div>
              <div>
                <nuxt-link to="/blog" class=" og-link plain">
                  Blog</nuxt-link>
              </div>
              <div>
                <nuxt-link to="/contact" class=" og-link plain">
                  Contact</nuxt-link>
              </div>
              <div>
                <a href="https://portfolio.tammy.dev" class=" og-link plain" target="_blank">
                  Portfolio</a>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="og-section--heading">
              <h1 class="sub-title">Reach out via <span class="period"></span></h1>
              <div>
                <a href="https://www.github.com/simplytammy" class=" og-link plain" target="_blank">
                  GitHub</a>
              </div>
              <div>
                <a href="https://codepen.io/simplytammy/" class=" og-link plain" target="_blank">
                  Codepen</a>
              </div>
              <div>
                <a href="https://dev.to/simplytammy/" class=" og-link plain" target="_blank">
                  Dev</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/benjamin-ogurinka-woruka-4b4093182" class=" og-link plain" target="_blank">
                  LinkedIn</a>
              </div>
              <div>
                <a href="https://dribbble.com/simplytammy/" class=" og-link plain" target="_blank">
                  Dribbble</a>
              </div>
              <div>
                <a href="mailto:hi@tammy.dev" class=" og-link plain">
                  hi@tammy.dev</a>
              </div>
            </div>
          </div>

        </div>
        <p class="copyright pt">Copyright &copy; 2018 - present. Designed By Tammy</p>
        <p class="credits">Built with <img src="https://res.cloudinary.com/simplytammy/image/upload/v1593059237/nuxtlogo.png"></p>
      </div>

    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    jumpToTop() {
      if (process.client) {
        this.$scrollTo('#__nuxt', 0, { force: true })
      }
    },
  }
}

</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/themify-icons/0.1.2/css/themify-icons.css');

.to-top {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  position: absolute;
  height: 40px;
  width: 40px;
  top: -0.8rem;
  right: 1rem;
  background: #ddd;
  padding: 10px 20px;
  color: var(--primaryColor);
  transition: 0.4s ease-in-out;
}

.to-top:hover {
  color: #fff;
  cursor: pointer;
  background: var(--defaultColor);
}

.to-top i {
  font-style: normal;
  font-size: 15px;
  font-weight: 400;
}

.credits {
  font-size: 12px;
  padding: 0 1rem;
  display: flex;
  min-height: 20px;
  align-items: center;
}

.credits img {
  width: 100px;
}

</style>
