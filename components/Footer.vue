<template>
  <footer class="footer">

    <div class="og-container ">
      <div class="og-section">
        <div class="row">
          <div class="column ">
            <div class="og-section--heading">
              <h1 class="small">Keep up with me</h1>
              <h1 class="cover-text text-is-muted--default">Keep up with me </h1>
            </div>
          </div>
          <div class="column ">
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
                <nuxt-link to="/versions" class=" og-link plain">
                  Versions</nuxt-link>
              </div>
              <div>
                <a href="mailto:hi@tammy.dev" class=" og-link plain">
                  hi@tammy.dev</a>
              </div>
            </div>
          </div>
          <div class="column ">
            <div class="og-section--heading">
              <h1 class="sub-title">Reach out via <span class="period"></span></h1>
              <div>
                <a href="https://www.github.com/simplytammy" class=" og-link plain" target="_blank">
                  GitHub</a>
              </div>
              <div>
                <a href="https://instagram.com/_simplytammy/" class=" og-link plain" target="_blank">
                  Instagram</a>
              </div>
              <div>
                <a href="https://dev.to/simplytammy/" class=" og-link plain" target="_blank">
                  Dev</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/simplytammy" class=" og-link plain" target="_blank">
                  LinkedIn</a>
              </div>
              <div>
                <a href="https://dribbble.com/simplytammy/" class=" og-link plain" target="_blank">
                  Dribbble</a>
              </div>
              <div>
                <a href="https://twitter.com/_simplytammy/" class=" og-link plain" target="_blank">
                  Twitter</a>
              </div>

            </div>
          </div>

        </div>
        <div class="pt ">
          <p class="copyright pt">Copyright &copy; 2020. All rights reserved</p>
          <p class="credits ">Built with <a href="https://nuxtjs.org/" target="_blank"><img src="https://res.cloudinary.com/simplytammy/image/upload/v1593059237/nuxtlogo.png"></a></p>
          <p class="credits ">Hosted on <a href="https://www.netlify.com/" target="_blank"><img src="https://res.cloudinary.com/simplytammy/image/upload/c_scale,w_100/v1593060309/netlify.png"></a></p>
        </div>
      </div>

    </div>
    <span @click="jumpToTop" class="to-top">
      <img src="../assets/img/page-images/rocket.png" class="footer-rocket">
    </span>
    <span class="footer-bb"></span>

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
@keyframes float {
  0% {
    transform: translatey(0);
  }

  50% {
    transform: translatey(-10px);
  }

  100% {
    transform: translatey(0);
  }
}

.to-top {
  border-radius: 10px;
  position: absolute;
  top: -2rem;
  right: 1rem;
  border: none;
  transition: 0.4s ease-in-out;
  cursor: pointer;
  background: #fff;
  padding: 10px;
}

.to-top:focus {
  outline: none;
}

.credits {
  font-size: 12px;
  padding: 0 1rem;
  display: flex;
  min-height: 20px;
  align-items: center;
}

.credits img {
  width: 80px;
  display: inline-block;
  margin: 0 auto;
  padding-left: 16px;

}

.footer-bb {
  display: block;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #f00000, #f00000 16.67%, #ff8000 16.67%, #ff8000 33.33%, #ffff00 33.33%, #ffff00 50%, #007940 50%, #007940 66.67%, #4040ff 66.67%, #4040ff 83.33%, #a000c0 83.33%, #a000c0) fixed;
  opacity: 0.7;
}

.footer-rocket {
  width: 30px;
  transform: translatey(0px);
  animation: float 3s ease-in-out infinite;
}

</style>
